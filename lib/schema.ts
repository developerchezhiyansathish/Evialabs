import { z } from "zod";

const requiredText = z.string().trim().min(1).max(500);

export const inquirySchema = z.object({
  fullName: requiredText,
  companyName: requiredText,
  email: z.email(),
  phone: requiredText,
  location: requiredText,
  productCategory: z.enum([
    "Tablets",
    "Capsules",
    "Powders",
    "Multiple Products",
    "Other",
  ]),
  productName: requiredText,
  formulationStatus: z.enum([
    "Yes, formulation is ready",
    "No, formulation support is required",
    "Formula is under development",
  ]),
  estimatedQuantity: requiredText,
  packagingRequirements: z
    .array(
      z.enum([
        "Bottles",
        "Jars",
        "Sachets",
        "Blister Packs",
        "Bulk Supply",
        "Packaging guidance required",
      ]),
    ),
  targetMarket: z.union([
    z.enum(["India", "Export", "Both India and Export"]),
    z.literal(""),
  ]),
  certifications: z.string().trim().max(5000),
  timeline: z.string().trim().max(500),
  message: z.string().trim().min(1).max(5000),
  consent: z.literal(true),
});

export type Inquiry = z.infer<typeof inquirySchema>;

export const contactInquirySchema = inquirySchema.pick({
  fullName: true,
  companyName: true,
  email: true,
  phone: true,
  location: true,
});

export const productInquirySchema = inquirySchema.pick({
  productCategory: true,
  productName: true,
  formulationStatus: true,
  estimatedQuantity: true,
  packagingRequirements: true,
  targetMarket: true,
});

export const additionalInquirySchema = inquirySchema.pick({
  certifications: true,
  timeline: true,
  message: true,
  consent: true,
});

export const ALLOWED_UPLOAD_MIME_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "image/png",
  "image/jpeg",
]);

export const MAX_UPLOAD_BYTES = 10 * 1024 * 1024;

export const ALLOWED_UPLOAD_EXTENSIONS = new Set([
  ".pdf",
  ".doc",
  ".docx",
  ".xls",
  ".xlsx",
  ".png",
  ".jpg",
  ".jpeg",
]);
