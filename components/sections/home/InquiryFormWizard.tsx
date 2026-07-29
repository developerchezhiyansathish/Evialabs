"use client";

import {
  type ChangeEvent,
  type FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  HiCheck,
  HiCheckCircle,
  HiChevronLeft,
  HiChevronRight,
  HiOutlineCloudArrowUp,
} from "react-icons/hi2";
import SplitText from "@/components/motion/SplitText";
import { Reveal } from "@/components/motion/Reveal";
import { INQUIRY_FORM } from "@/content/home";
import {
  additionalInquirySchema,
  contactInquirySchema,
  MAX_UPLOAD_BYTES,
  productInquirySchema,
  type Inquiry,
} from "@/lib/schema";

type InquiryFormState = Omit<
  Inquiry,
  "productCategory" | "formulationStatus" | "targetMarket" | "consent"
> & {
  productCategory: Inquiry["productCategory"] | "";
  formulationStatus: Inquiry["formulationStatus"] | "";
  targetMarket: Inquiry["targetMarket"] | "";
  consent: boolean;
};

type TextFieldName =
  | "fullName"
  | "companyName"
  | "email"
  | "phone"
  | "location"
  | "productName"
  | "estimatedQuantity"
  | "certifications"
  | "timeline"
  | "message";

type Errors = Record<string, string>;

const INITIAL_VALUES: InquiryFormState = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  location: "",
  productCategory: "",
  productName: "",
  formulationStatus: "",
  estimatedQuantity: "",
  packagingRequirements: [],
  targetMarket: "",
  certifications: "",
  timeline: "",
  message: "",
  consent: false,
};

const STEP_SCHEMAS = [
  contactInquirySchema,
  productInquirySchema,
  additionalInquirySchema,
] as const;

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.055 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: [0.16, 1, 0.3, 1] as const },
  },
};

function RequiredLabel({
  htmlFor,
  children,
  required = false,
}: {
  htmlFor?: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  const className =
    "mb-2 block text-[11px] font-normal tracking-[0.08em] text-ink-700 uppercase";

  return htmlFor ? (
    <label htmlFor={htmlFor} className={className}>
      {children}
      {required ? <span aria-hidden="true">*</span> : null}
    </label>
  ) : (
    <p className={className}>
      {children}
      {required ? <span aria-hidden="true">*</span> : null}
    </p>
  );
}

function FieldError({ id, error }: { id: string; error?: string }) {
  return error ? (
    <p id={id} className="mt-1.5 text-xs text-ink-800" role="alert">
      {error}
    </p>
  ) : null;
}

function TextField({
  name,
  label,
  placeholder,
  value,
  error,
  type = "text",
  required = false,
  multiline = false,
  onChange,
  className = "",
}: {
  name: TextFieldName;
  label: string;
  placeholder: string;
  value: string;
  error?: string;
  type?: string;
  required?: boolean;
  multiline?: boolean;
  onChange: (name: TextFieldName, value: string) => void;
  className?: string;
}) {
  const errorId = `${name}-error`;
  const fieldClassName =
    "w-full rounded-ui border border-ink-300 bg-white px-4 text-[15px] text-ink-800 transition-[border-color,box-shadow,transform] duration-200 placeholder:text-ink-500 hover:border-brand-600 focus:border-brand-700 focus:shadow-[0_0_0_3px_rgba(82,136,40,0.12)]";

  return (
    <motion.div variants={staggerItem} className={className}>
      <RequiredLabel htmlFor={name} required={required}>
        {label}
      </RequiredLabel>
      {multiline ? (
        <textarea
          id={name}
          name={name}
          rows={name === "message" ? 5 : 3}
          value={value}
          placeholder={placeholder}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          onChange={(event) => onChange(name, event.target.value)}
          className={`${fieldClassName} min-h-28 resize-y py-3`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          onChange={(event) => onChange(name, event.target.value)}
          className={`${fieldClassName} min-h-12`}
        />
      )}
      <FieldError id={errorId} error={error} />
    </motion.div>
  );
}

function ChoiceGroup({
  name,
  label,
  hint,
  options,
  value,
  values,
  error,
  required = false,
  multiple = false,
  onSelect,
}: {
  name: "productCategory" | "formulationStatus" | "targetMarket" | "packagingRequirements";
  label: string;
  hint?: string;
  options: readonly string[];
  value?: string;
  values?: readonly string[];
  error?: string;
  required?: boolean;
  multiple?: boolean;
  onSelect: (option: string) => void;
}) {
  const errorId = `${name}-error`;

  return (
    <motion.fieldset
      variants={staggerItem}
      className="min-w-0"
      aria-describedby={error ? errorId : undefined}
    >
      <legend className="sr-only">{label}</legend>
      <RequiredLabel required={required}>{label}</RequiredLabel>
      {hint ? <p className="-mt-1 mb-2 text-xs text-ink-500">{hint}</p> : null}
      <div
        className={`grid gap-2.5 ${
          options.length > 4
            ? "sm:grid-cols-2 xl:grid-cols-3"
            : "sm:grid-cols-2"
        }`}
      >
        {options.map((option) => {
          const selected = multiple
            ? values?.includes(option)
            : value === option;
          const id = `${name}-${option.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-")}`;

          return (
            <div key={option} className="relative">
              <input
                id={id}
                name={name}
                type={multiple ? "checkbox" : "radio"}
                value={option}
                checked={Boolean(selected)}
                aria-invalid={Boolean(error)}
                onChange={() => onSelect(option)}
                className="peer sr-only"
              />
              <label
                htmlFor={id}
                className={`flex min-h-12 cursor-pointer items-center justify-between gap-3 rounded-ui border px-3.5 py-2.5 text-sm transition-[border-color,background-color,color,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-brand-600 hover:shadow-sm ${
                  selected
                    ? "border-brand-700 bg-brand-50 text-brand-700 shadow-sm"
                    : "border-ink-300 bg-white text-ink-700"
                }`}
              >
                <span>{option}</span>
                <span
                  className={`grid size-5 shrink-0 place-items-center rounded-full border transition-colors ${
                    selected
                      ? "border-brand-700 bg-brand-700 text-white"
                      : "border-ink-300 text-transparent"
                  }`}
                  aria-hidden="true"
                >
                  <HiCheck size={13} />
                </span>
              </label>
            </div>
          );
        })}
      </div>
      <FieldError id={errorId} error={error} />
    </motion.fieldset>
  );
}

export function InquiryFormWizard() {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<InquiryFormState>(INITIAL_VALUES);
  const [errors, setErrors] = useState<Errors>({});
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );
  const [submissionError, setSubmissionError] = useState("");
  const stepHeading = useRef<HTMLHeadingElement>(null);
  const honeypot = useRef<HTMLInputElement>(null);
  const startedAt = useRef(0);
  const mounted = useRef(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    stepHeading.current?.focus();
  }, [step]);

  const updateText = (name: TextFieldName, value: string) => {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  };

  const selectSingle = (
    name: "productCategory" | "formulationStatus" | "targetMarket",
    value: string,
  ) => {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  };

  const togglePackaging = (option: string) => {
    setValues((current) => {
      const packagingRequirements = current.packagingRequirements.includes(
        option as Inquiry["packagingRequirements"][number],
      )
        ? current.packagingRequirements.filter((item) => item !== option)
        : [
            ...current.packagingRequirements,
            option as Inquiry["packagingRequirements"][number],
          ];
      return { ...current, packagingRequirements };
    });
    setErrors((current) => ({ ...current, packagingRequirements: "" }));
  };

  const validateStep = (stepIndex: number) => {
    const result = STEP_SCHEMAS[stepIndex].safeParse(values);
    if (result.success) {
      setErrors({});
      return true;
    }

    const nextErrors: Errors = {};
    for (const issue of result.error.issues) {
      const field = String(issue.path[0] ?? "");
      if (!nextErrors[field]) {
        nextErrors[field] =
          field === "email"
            ? INQUIRY_FORM.errors.email
            : field === "packagingRequirements"
              ? INQUIRY_FORM.errors.packaging
              : field === "consent"
                ? INQUIRY_FORM.errors.consent
                : INQUIRY_FORM.errors.required;
      }
    }
    setErrors(nextErrors);
    return false;
  };

  const continueToNextStep = () => {
    if (!validateStep(step)) return;
    setStep((current) => Math.min(current + 1, 2));
  };

  const handleFile = (event: ChangeEvent<HTMLInputElement>) => {
    const selected = event.target.files?.[0] ?? null;
    if (!selected) {
      setFile(null);
      setErrors((current) => ({ ...current, attachment: "" }));
      return;
    }

    const validExtension =
      /\.(pdf|doc|docx|xls|xlsx|png|jpe?g)$/i.test(selected.name);
    if (!validExtension || selected.size > MAX_UPLOAD_BYTES) {
      setFile(null);
      event.target.value = "";
      setErrors((current) => ({
        ...current,
        attachment: INQUIRY_FORM.errors.file,
      }));
      return;
    }

    setFile(selected);
    setErrors((current) => ({ ...current, attachment: "" }));
  };

  const submitInquiry = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateStep(2) || errors.attachment) return;

    setStatus("submitting");
    setSubmissionError("");

    const payload = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((item) => payload.append(key, item));
      } else {
        payload.set(key, String(value));
      }
    });
    payload.set("website", honeypot.current?.value ?? "");
    payload.set("startedAt", String(startedAt.current));
    if (file) payload.set("attachment", file);

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        body: payload,
      });

      if (!response.ok) throw new Error("Submission failed.");
      setStatus("success");
    } catch {
      setStatus("idle");
      setSubmissionError(INQUIRY_FORM.errors.submission);
    }
  };

  return (
    <div className="grid items-start gap-10 lg:grid-cols-[minmax(260px,0.72fr)_minmax(0,1.28fr)] lg:gap-14 xl:gap-20">
      <div className="lg:sticky lg:top-32">
        <Reveal>
          <p className="flex items-center gap-3 text-[11px] font-normal uppercase tracking-[0.14em] text-brand-700 tabular-nums">
            <span className="size-1.5 bg-brand-500" aria-hidden="true" />
            SEC 03 / {INQUIRY_FORM.eyebrow}
          </p>
        </Reveal>
        <SplitText
          tag="h2"
          text={INQUIRY_FORM.heading}
          splitType="words, chars"
          delay={20}
          duration={0.65}
          ease="power4.out"
          from={{ opacity: 0, yPercent: 105, rotateX: -55 }}
          to={{ opacity: 1, yPercent: 0, rotateX: 0 }}
          threshold={0.16}
          rootMargin="-30px"
          className="mt-5 max-w-[13ch] font-display text-[clamp(1.875rem,4vw,3.125rem)] leading-[1.04] font-normal tracking-[-0.02em] text-ink-900"
        />
        <Reveal>
          <p className="mt-5 max-w-[42ch] text-sm leading-relaxed font-normal text-ink-600 sm:text-[15px]">
            {INQUIRY_FORM.introduction}
          </p>
        </Reveal>

        <ol className="mt-8 grid grid-cols-3 gap-2 lg:block">
          {INQUIRY_FORM.steps.map((formStep, index) => {
            const active = index === step;
            const complete = index < step || status === "success";
            return (
              <li
                key={formStep.title}
                className="relative lg:min-h-20 lg:pb-5"
                aria-current={active ? "step" : undefined}
              >
                {index < INQUIRY_FORM.steps.length - 1 ? (
                  <span
                    className="absolute left-5 top-10 hidden h-[calc(100%-1.25rem)] w-px bg-ink-200 lg:block"
                    aria-hidden="true"
                  >
                    <motion.span
                      className="block h-full origin-top bg-brand-700"
                      animate={{ scaleY: complete ? 1 : 0 }}
                      transition={{ duration: reduced ? 0 : 0.35 }}
                    />
                  </span>
                ) : null}
                <div className="flex flex-col items-center gap-2 text-center lg:flex-row lg:gap-3 lg:text-left">
                  <motion.span
                    className={`relative z-10 grid size-10 shrink-0 place-items-center rounded-ui border text-sm transition-colors ${
                      active || complete
                        ? "border-brand-700 bg-brand-700 text-white"
                        : "border-ink-300 bg-white text-ink-600"
                    }`}
                    animate={{ scale: active ? 1.06 : 1 }}
                    transition={{ duration: reduced ? 0 : 0.25 }}
                  >
                    {complete ? <HiCheck size={17} /> : index + 1}
                  </motion.span>
                  <span
                    className={`text-[11px] leading-tight sm:text-xs ${
                      active ? "font-medium text-ink-900" : "text-ink-600"
                    }`}
                  >
                    {formStep.shortTitle}
                  </span>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="rounded-card border border-ink-200 bg-white p-4 shadow-[0_18px_55px_rgba(11,11,11,0.07)] sm:p-7 xl:p-10">
        {status === "success" ? (
          <motion.div
            className="flex min-h-[460px] flex-col items-center justify-center px-3 py-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45 }}
            aria-live="polite"
          >
            <motion.div
              initial={{ opacity: 0, scale: reduced ? 1 : 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <HiCheckCircle className="text-brand-700" size={64} />
            </motion.div>
            <p className="mt-5 max-w-xl font-display text-2xl leading-relaxed text-ink-900 sm:text-3xl">
              {INQUIRY_FORM.confirmation}
            </p>
          </motion.div>
        ) : (
          <form onSubmit={submitInquiry} noValidate>
            <input
              ref={honeypot}
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="absolute -left-[10000px] size-px opacity-0"
              aria-hidden="true"
            />
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={step}
                initial={{ opacity: 0, x: reduced ? 0 : 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: reduced ? 0 : -18 }}
                transition={{ duration: reduced ? 0.2 : 0.36, ease: [0.16, 1, 0.3, 1] }}
              >
                <h3
                  ref={stepHeading}
                  tabIndex={-1}
                  className="mb-7 font-display text-2xl text-ink-900 focus:outline-none sm:text-3xl"
                >
                  {INQUIRY_FORM.steps[step].title}
                </h3>

                {step === 0 ? (
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="grid gap-5 sm:grid-cols-2"
                  >
                    <TextField
                      name="fullName"
                      label={INQUIRY_FORM.fields.fullName.label}
                      placeholder={INQUIRY_FORM.fields.fullName.placeholder}
                      value={values.fullName}
                      error={errors.fullName}
                      required
                      onChange={updateText}
                    />
                    <TextField
                      name="companyName"
                      label={INQUIRY_FORM.fields.companyName.label}
                      placeholder={INQUIRY_FORM.fields.companyName.placeholder}
                      value={values.companyName}
                      error={errors.companyName}
                      required
                      onChange={updateText}
                    />
                    <TextField
                      name="email"
                      type="email"
                      label={INQUIRY_FORM.fields.email.label}
                      placeholder={INQUIRY_FORM.fields.email.placeholder}
                      value={values.email}
                      error={errors.email}
                      required
                      onChange={updateText}
                    />
                    <TextField
                      name="phone"
                      type="tel"
                      label={INQUIRY_FORM.fields.phone.label}
                      placeholder={INQUIRY_FORM.fields.phone.placeholder}
                      value={values.phone}
                      error={errors.phone}
                      required
                      onChange={updateText}
                    />
                    <TextField
                      name="location"
                      label={INQUIRY_FORM.fields.location.label}
                      placeholder={INQUIRY_FORM.fields.location.placeholder}
                      value={values.location}
                      error={errors.location}
                      required
                      onChange={updateText}
                      className="sm:col-span-2"
                    />
                  </motion.div>
                ) : null}

                {step === 1 ? (
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="space-y-6"
                  >
                    <ChoiceGroup
                      name="productCategory"
                      label={INQUIRY_FORM.fields.productCategory.label}
                      hint={INQUIRY_FORM.fields.productCategory.hint}
                      options={INQUIRY_FORM.fields.productCategory.options}
                      value={values.productCategory}
                      error={errors.productCategory}
                      required
                      onSelect={(option) =>
                        selectSingle("productCategory", option)
                      }
                    />
                    <div className="grid gap-5 sm:grid-cols-2">
                      <TextField
                        name="productName"
                        label={INQUIRY_FORM.fields.productName.label}
                        placeholder={
                          INQUIRY_FORM.fields.productName.placeholder
                        }
                        value={values.productName}
                        error={errors.productName}
                        required
                        onChange={updateText}
                      />
                      <TextField
                        name="estimatedQuantity"
                        label={INQUIRY_FORM.fields.estimatedQuantity.label}
                        placeholder={
                          INQUIRY_FORM.fields.estimatedQuantity.placeholder
                        }
                        value={values.estimatedQuantity}
                        error={errors.estimatedQuantity}
                        required
                        onChange={updateText}
                      />
                    </div>
                    <ChoiceGroup
                      name="formulationStatus"
                      label={INQUIRY_FORM.fields.formulationStatus.label}
                      options={INQUIRY_FORM.fields.formulationStatus.options}
                      value={values.formulationStatus}
                      error={errors.formulationStatus}
                      required
                      onSelect={(option) =>
                        selectSingle("formulationStatus", option)
                      }
                    />
                    <ChoiceGroup
                      name="packagingRequirements"
                      label={INQUIRY_FORM.fields.packagingRequirements.label}
                      options={
                        INQUIRY_FORM.fields.packagingRequirements.options
                      }
                      values={values.packagingRequirements}
                      error={errors.packagingRequirements}
                      multiple
                      onSelect={togglePackaging}
                    />
                    <ChoiceGroup
                      name="targetMarket"
                      label={INQUIRY_FORM.fields.targetMarket.label}
                      options={INQUIRY_FORM.fields.targetMarket.options}
                      value={values.targetMarket}
                      error={errors.targetMarket}
                      onSelect={(option) =>
                        selectSingle("targetMarket", option)
                      }
                    />
                  </motion.div>
                ) : null}

                {step === 2 ? (
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="grid gap-5 sm:grid-cols-2"
                  >
                    <TextField
                      name="certifications"
                      label={INQUIRY_FORM.fields.certifications.label}
                      placeholder={
                        INQUIRY_FORM.fields.certifications.placeholder
                      }
                      value={values.certifications}
                      error={errors.certifications}
                      multiline
                      onChange={updateText}
                    />
                    <TextField
                      name="timeline"
                      label={INQUIRY_FORM.fields.timeline.label}
                      placeholder={INQUIRY_FORM.fields.timeline.placeholder}
                      value={values.timeline}
                      error={errors.timeline}
                      multiline
                      onChange={updateText}
                    />
                    <TextField
                      name="message"
                      label={INQUIRY_FORM.fields.message.label}
                      placeholder={INQUIRY_FORM.fields.message.placeholder}
                      value={values.message}
                      error={errors.message}
                      required
                      multiline
                      onChange={updateText}
                      className="sm:col-span-2"
                    />

                    <motion.div
                      variants={staggerItem}
                      className="sm:col-span-2"
                    >
                      <RequiredLabel htmlFor="attachment">
                        {INQUIRY_FORM.fields.attachment.label}
                      </RequiredLabel>
                      <label
                        htmlFor="attachment"
                        className="flex min-h-24 cursor-pointer flex-col items-center justify-center rounded-ui border border-dashed border-ink-300 bg-ink-50 px-4 py-5 text-center transition-[border-color,background-color,transform] duration-200 hover:-translate-y-0.5 hover:border-brand-700 hover:bg-brand-50"
                      >
                        <HiOutlineCloudArrowUp
                          size={27}
                          className="text-brand-700"
                          aria-hidden="true"
                        />
                        <span className="mt-2 text-sm text-ink-700">
                          {file?.name ?? INQUIRY_FORM.fields.attachment.help}
                        </span>
                      </label>
                      <input
                        id="attachment"
                        name="attachment"
                        type="file"
                        accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg"
                        onChange={handleFile}
                        className="sr-only"
                      />
                      <FieldError
                        id="attachment-error"
                        error={errors.attachment}
                      />
                    </motion.div>

                    <motion.fieldset
                      variants={staggerItem}
                      className="sm:col-span-2"
                    >
                      <legend className="mb-2 text-[11px] font-normal tracking-[0.08em] text-ink-700 uppercase">
                        {INQUIRY_FORM.fields.consent.label}
                      </legend>
                      <div className="relative">
                        <input
                          id="consent"
                          name="consent"
                          type="checkbox"
                          checked={values.consent}
                          aria-invalid={Boolean(errors.consent)}
                          aria-describedby={
                            errors.consent ? "consent-error" : undefined
                          }
                          onChange={(event) => {
                            setValues((current) => ({
                              ...current,
                              consent: event.target.checked,
                            }));
                            setErrors((current) => ({
                              ...current,
                              consent: "",
                            }));
                          }}
                          className="peer sr-only"
                        />
                        <label
                          htmlFor="consent"
                          className="flex min-h-12 cursor-pointer items-center gap-3 rounded-ui border border-ink-300 bg-white px-4 py-3 text-sm text-ink-700 transition-colors hover:border-brand-700 hover:bg-brand-50"
                        >
                          <span
                            className={`grid size-5 shrink-0 place-items-center rounded-chip border ${
                              values.consent
                                ? "border-brand-700 bg-brand-700 text-white"
                                : "border-ink-300 text-transparent"
                            }`}
                            aria-hidden="true"
                          >
                            <HiCheck size={14} />
                          </span>
                          {INQUIRY_FORM.fields.consent.text}
                        </label>
                      </div>
                      <FieldError
                        id="consent-error"
                        error={errors.consent}
                      />
                    </motion.fieldset>
                  </motion.div>
                ) : null}
              </motion.div>
            </AnimatePresence>

            {submissionError ? (
              <p
                className="mt-5 rounded-ui border border-ink-300 bg-ink-50 p-3 text-sm text-ink-800"
                role="alert"
              >
                {submissionError}
              </p>
            ) : null}

            <div className="mt-8 flex flex-col-reverse gap-3 border-t border-ink-200 pt-6 sm:flex-row sm:justify-between">
              {step > 0 ? (
                <button
                  type="button"
                  onClick={() => setStep((current) => current - 1)}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-ui border border-ink-300 px-5 text-sm text-ink-700 transition-[border-color,color,transform] hover:-translate-y-0.5 hover:border-brand-700 hover:text-brand-700"
                >
                  <HiChevronLeft size={17} />
                  {INQUIRY_FORM.actions.back}
                </button>
              ) : (
                <span aria-hidden="true" />
              )}

              {step < 2 ? (
                <button
                  type="button"
                  onClick={continueToNextStep}
                  className="hero-liquid-button min-h-12 justify-center px-6 text-sm"
                >
                  <span>{INQUIRY_FORM.actions.continue}</span>
                  <HiChevronRight className="relative z-[2]" size={17} />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="hero-liquid-button min-h-12 justify-center px-6 text-sm disabled:cursor-wait disabled:opacity-70"
                >
                  <span>
                    {status === "submitting"
                      ? INQUIRY_FORM.actions.submitting
                      : INQUIRY_FORM.actions.submit}
                  </span>
                  <HiChevronRight className="relative z-[2]" size={17} />
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
