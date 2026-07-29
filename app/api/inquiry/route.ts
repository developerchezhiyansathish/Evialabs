import { NextResponse } from "next/server";
import {
  ALLOWED_UPLOAD_EXTENSIONS,
  ALLOWED_UPLOAD_MIME_TYPES,
  MAX_UPLOAD_BYTES,
  inquirySchema,
} from "@/lib/schema";
import { sendInquiryEmails } from "@/lib/mailer";
import { getRequestIp } from "@/lib/utils";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const MINIMUM_COMPLETION_MS = 3_000;

function isRateLimited(ip: string) {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || entry.resetAt <= now) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX;
}

export async function POST(request: Request) {
  const ip = getRequestIp(request.headers);
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests." }, { status: 429 });
  }

  const formData = await request.formData();
  if (String(formData.get("website") ?? "")) {
    return NextResponse.json({ ok: true });
  }

  const startedAt = Number(formData.get("startedAt"));
  if (!Number.isFinite(startedAt) || Date.now() - startedAt < MINIMUM_COMPLETION_MS) {
    return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
  }

  const values = {
    fullName: String(formData.get("fullName") ?? ""),
    companyName: String(formData.get("companyName") ?? ""),
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    location: String(formData.get("location") ?? ""),
    productCategory: String(formData.get("productCategory") ?? ""),
    productName: String(formData.get("productName") ?? ""),
    formulationStatus: String(formData.get("formulationStatus") ?? ""),
    estimatedQuantity: String(formData.get("estimatedQuantity") ?? ""),
    packagingRequirements: formData
      .getAll("packagingRequirements")
      .map(String),
    targetMarket: String(formData.get("targetMarket") ?? ""),
    certifications: String(formData.get("certifications") ?? ""),
    timeline: String(formData.get("timeline") ?? ""),
    message: String(formData.get("message") ?? ""),
    consent: formData.get("consent") === "true",
  };
  const parsed = inquirySchema.safeParse(values);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed.", issues: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  const upload = formData.get("attachment");
  let attachment:
    | { filename: string; content: Buffer; contentType: string }
    | undefined;

  if (upload instanceof File && upload.size > 0) {
    const dotIndex = upload.name.lastIndexOf(".");
    const extension =
      dotIndex >= 0 ? upload.name.slice(dotIndex).toLowerCase() : "";

    if (
      upload.size > MAX_UPLOAD_BYTES ||
      !ALLOWED_UPLOAD_MIME_TYPES.has(upload.type) ||
      !ALLOWED_UPLOAD_EXTENSIONS.has(extension)
    ) {
      return NextResponse.json({ error: "Invalid attachment." }, { status: 400 });
    }

    attachment = {
      filename: upload.name,
      content: Buffer.from(await upload.arrayBuffer()),
      contentType: upload.type,
    };
  }

  try {
    const [internal, acknowledgement] = await sendInquiryEmails(
      parsed.data,
      attachment,
    );

    if (acknowledgement.status === "rejected") {
      console.error("Inquiry acknowledgement failed.", acknowledgement.reason);
    }
    if (internal.status === "rejected") {
      console.error("Internal inquiry notification failed.", internal.reason);
      return NextResponse.json(
        { error: "Mail delivery is unavailable." },
        { status: 503 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Inquiry delivery failed.", error);
    return NextResponse.json(
      { error: "Mail delivery is unavailable." },
      { status: 503 },
    );
  }
}
