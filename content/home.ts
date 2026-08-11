export const SITE = {
  name: "EVIA Labs",
  url: "https://evialabs.in",
  location: "Nellore, India",
} as const;

export const NAVIGATION = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Capabilities & Process", href: "/capabilities" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const HERO = {
  h1: "Trusted Nutraceutical Manufacturers for Global Brands",
  highlight: "Global Brands",
  sub: [
    "EVIA Labs assists wellness and pharmaceutical companies in launching regulated, documented, and formulation-ready dietary supplements, from tablets and capsules to powders.",
  ],
  actions: [
    {
      label: "Request a Manufacturing Consultation",
      href: "#inquiry",
      variant: "primary",
    },
    {
      label: "View All Products",
      href: "/products",
      variant: "link",
    },
  ],
  stats: [
    { value: 100, suffix: "%", label: "Compliance Rate" },
    { value: 500, suffix: "K+", label: "Daily Capacity" },
    { value: "20+", label: "Years of Experience" },
  ],
  imageAlt:
    "Nutraceutical manufacturing specialist operating pharmaceutical equipment in an EVIA Labs cleanroom",
} as const;

export const HOME_SECTIONS = {
  trust: "Trust Badges Strip",
  inquiry: "Manufacturing Inquiry Form",
  problem: "The Problem We Solve",
  why: "Why Choose EVIA Labs?",
  products: "Our Products",
  services: "Our Services",
  about: "About EVIA Labs",
  capabilities: "Our Capabilities & Process",
  clients: "Our Clients & Partners",
  contact: "Contact CTA Strip",
} as const;

export const PROBLEM = {
  h2: "The Problem We Solve",
  headline: "Bridging the Gap Between Manufacturing Claims and Production Reality",
  h3: "It's Not Just What You Manufacture; It's How You Manufacture It",
  paragraphs: [
    "Nutraceutical manufacturers are evaluated on their consistency, not solely on their formulas. It's the reliability from batch to batch that safeguards a brand's reputation with both regulators and consumers.",
    "At EVIA Labs, we comply with international standards by maintaining state-of-the-art air-handling systems and quality control measures. We follow these standards at every step, for every batch we make.",
  ],
} as const;

export const WHY_CHOOSE = {
  h2: "Why Choose EVIA Labs?",
  headline: "A Manufacturing Partner That Strengthens Your Brand",
  introduction:
    "Specialized knowledge of pharmaceutical-grade standards and hands-on production processes enable EVIA Labs to convert innovative product concepts into commercially viable nutraceuticals. Both of these aspects are aligned with your brand’s vision.",
  items: [
    {
      h3: "Pharmaceutical-Grade Standards, Not Just GMP Compliance",
      paragraphs: [
        "Every formulation is tested in accordance with IP, USP, BP, and JP standards to ensure that a brand's label meets the highest standards possible worldwide.",
      ],
    },
    {
      h3: "Every Brand Is Different, So Is Our Approach",
      paragraphs: [
        "Each brand has various characteristics, demographics, pricing, and order targets. We provide specialist production with privacy, transparency, and reliable scheduling.",
      ],
    },
    {
      h3: "Custom Formulations, Tailored for You",
      paragraphs: [
        "We make tablets, capsules, or granules crafted to each brand's unique specifications and meticulously document them for consistent repeat batches, guaranteeing a product that is export-ready from the start.",
      ],
    },
  ],
} as const;

export const PRODUCTS = {
  h2: "Our Products",
  headline: "Multiple Formats, One Consistent Standard",
  introduction:
    "EVIA Labs delivers essential dosage formats backed by pharmaceutical-grade controls and detailed batch records. B2B brands can select the format that is most suitable for their product line, without compromising process consistency.",
  items: [
    {
      h3: "Tablets: Small Format and Solid Standard",
      description: "Perfectly packed for consistent results that a brand’s customers can truly appreciate.",
      cta: "Enquire Now",
      image: "/images/product-tablets.webp",
      imageAlt:
        "Pharmaceutical-grade white and pale green nutraceutical tablets on a stainless-steel laboratory tray",
    },
    {
      h3: "Capsules: Pharmaceutical Fill. Clean Delivery",
      description:
        "Delivering clean and accurate results with pharmaceutical-grade purity.",
      cta: "Enquire Now",
      image: "/images/product-capsules.webp",
      imageAlt:
        "Pharmaceutical-grade white and pale green hard-shell capsules in a clean laboratory dish",
    },
    {
      h3: "Powders (Containers): Bulk Nutrition, Bulk Confidence",
      description:
        "Bulk nutrition, produced with the consistency that reputable manufacturers are known for delivering.",
      cta: "Enquire Now",
      image: "/images/product-powder-container.webp",
      imageAlt:
        "Unbranded nutraceutical powder container and measuring scoop in a pharmaceutical laboratory",
    },
    {
      h3: "Powders (Sachets): Single-Serve, High Standard.",
      description:
        "Simple single-serve solutions that are portioned for convenience and consistency.",
      cta: "Enquire Now",
      image: "/images/product-powder-sachets.webp",
      imageAlt:
        "Unbranded single-serve nutraceutical powder sachets in a clean pharmaceutical laboratory",
    },
  ],
  viewAll: "View All Products",
  previousSlide: "Previous product",
  nextSlide: "Next product",
} as const;

export const SERVICES_CONTENT = {
  h2: "Our Services",
  headline: "One Partner from Formula to Finished Pack",
  introduction:
    "EVIA Labs offers a comprehensive range of contract manufacturing services, from initial formulation to the final branded product, catering to wellness companies seeking to launch pharmaceutical-grade nutraceuticals under their own label.",
  items: [
    {
      h3: "Batch Manufacturing",
      paragraphs: [
        "EVIA Labs manufactures capsules, pills, and powders for pharmaceutical standardization, documenting and certifying every batch.",
      ],
      cta: "Learn More",
    },
    {
      h3: "Private Labeling",
      paragraphs: [
        "EVIA Labs delivers pharmaceutical-grade items under the client's trademark, ensuring dependable outcomes while the brand focuses on client engagement.",
      ],
      cta: "Learn More",
    },
    {
      h3: "Custom Formulation",
      paragraphs: [
        "EVIA Labs’ formulation team works with a brand’s ingredients, dosage, and positioning to create custom nutraceuticals that meet FSSAI RDA and international pharmaceutical standards.",
      ],
      cta: "Learn More",
    },
    {
      h3: "Packaging & Labelling",
      paragraphs: [
        "EVIA Labs offers containers, packs, bottles, and sachets- fully labelled and ready to sell.",
      ],
      cta: "Learn More",
    },
    {
      h3: "White Labeling",
      paragraphs: [
        "EVIA Labs’ branded nutraceutical formulations let wellness brands launch new product lines faster than developing a custom formulation from scratch.",
      ],
      cta: "Learn More",
    },
  ],
  viewAll: "Explore All Services",
} as const;

export const ABOUT_CONTENT = {
  h2: "About EVIA Labs",
  headline: "Pharma Expertise Behind Every Product",
  paragraphs: [
    "EVIA Labs is a B2B nutraceutical company based in Hyderabad, India, with its manufacturing facility located in Nellore, India. With more than 20 years of experience in the pharmaceutical industry, we provide a variety of services like formulation, private labelling, and contract production- delivered at the standard well-established nutraceutical manufacturers are known for.",
    "Our services are beneficial to pharmaceutical and wellness organizations on a global scale. We focus entirely on delivering to our client's requirements.",
  ],
  cta: "Learn More About EVIA Labs",
  image: "/images/about-evia-manufacturing-campus.webp",
  imageAlt:
    "Modern pharmaceutical and nutraceutical manufacturing campus with landscaped grounds in Nellore, India",
} as const;

export const CAPABILITIES_PROCESS = {
  h2: "Our Process",
  headline: "From the Brief to the Finished Product",
  introduction:
    "EVIA Labs incorporates regulatory compliance, uniformity, and transparency into every phase of manufacturing, from inquiry to delivery of the completed order.",
  steps: [
    {
      h3: "Step 1: Formulation",
      description:
        "Develop and authorize formulations for pharmaceutical use.",
    },
    {
      h3: "Step 2: Sample Development",
      description:
        "Prepare product samples for assessment and approval.",
    },
    {
      h3: "Step 3: Regulatory Compliance",
      description:
        "Complete all certifications and paperwork related to compliance.",
    },
    {
      h3: "Step 4: Production",
      description:
        "Produce in compliance with pharmaceutical quality and safety standards.",
    },
    {
      h3: "Step 5: Quality Assurance",
      description:
        "Conduct comprehensive testing prior to batch distribution.",
    },
    {
      h3: "Step 6: Final Distribution",
      description:
        "Package and ship the products with all necessary regulatory documents and labels.",
    },
  ],
} as const;

export const CLIENTS_PARTNERS = {
  h2: "Our Clients & Partners",
  headline: "Who We Partner With",
  body:
    "We work with B2B pharmaceutical firms that sell to hospitals, dealers, pharmacies, and healthcare networks. Our primary clients include pharma companies sourcing nutraceutical products, D2C supplement brands, and exporters. Every client receives the same standard of service, from first inquiry to final delivery.",
  logoAriaLabel: "EVIA Labs client and partner logo placeholders",
  logos: [
    {
      src: "/logos/client-partner-01.svg",
      alt: "Client partner placeholder logo 1",
      width: 177,
      height: 87,
    },
    {
      src: "/logos/client-partner-02.svg",
      alt: "Client partner placeholder logo 2",
      width: 168,
      height: 41,
    },
    {
      src: "/logos/client-partner-03.svg",
      alt: "Client partner placeholder logo 3",
      width: 169,
      height: 42,
    },
    {
      src: "/logos/client-partner-04.svg",
      alt: "Client partner placeholder logo 4",
      width: 170,
      height: 41,
    },
  ],
} as const;

export const CONTACT_CTA = {
  h2: "Contact CTA Strip",
  headline: "The Partner Behind Your Brand's Growth",
  body: "Reach out today, and we will get back to you within a day.",
  actions: [
    {
      label: "Contact Sales Team",
      href: "/contact",
      variant: "light",
    },
    {
      label: "Request Pricing",
      href: "#inquiry",
      variant: "bright",
    },
  ],
} as const;

export const FOOTER_CONTENT = {
  description:
    "Precision contract manufacturing for the next generation of wellness. Based in Nellore, India.",
  columns: [
    {
      title: "Platform",
      links: [
        { label: "Manufacturing", href: "/services" },
        { label: "Supply Chain", href: "/capabilities" },
        { label: "Quality Control", href: "/capabilities" },
        { label: "Lab Services", href: "/services" },
      ],
    },
    {
      title: "Compliance",
      links: [
        { label: "ISO Certification", href: "/capabilities" },
        { label: "FSSAI Standards", href: "/capabilities" },
        { label: "Pharmacopoeia", href: "/capabilities" },
        { label: "Regulatory Affairs", href: "/services" },
      ],
    },
  ],
  contact: {
    title: "Contact",
    address: "Nellore Industrial Park, Plot 42, Andhra Pradesh, India",
    email: "contact@evialabs.com",
    phoneLabel: "+91 999 888 7777",
    phoneHref: "+919998887777",
  },
  social: {
    emailLabel: "Email EVIA Labs",
    shareLabel: "Share EVIA Labs",
  },
  copyright: "EVIA Labs. All rights reserved.",
  credit: {
    prefix: "Designed and developed by",
    label: "drig.digital",
    href: "https://drig.digital",
  },
  badges: ["FSSAI Licensed", "WHO GMP Pending"],
} as const;

export const FORM_STEPS = [
  "01 Contact Information",
  "02 Product Requirements",
  "03 Additional Information",
] as const;

export const INQUIRY_FORM = {
  eyebrow: "Inquiry Form",
  heading: "Inquiry Form",
  introduction:
    "Fill in the form, and our team will respond within a day.",
  steps: [
    {
      title: "Contact Information",
      shortTitle: "Contact Information",
    },
    {
      title: "Product Requirements",
      shortTitle: "Product Requirements",
    },
    {
      title: "Additional Information",
      shortTitle: "Review & Submit",
    },
  ],
  fields: {
    fullName: {
      label: "Full Name",
      placeholder: "Enter your full name.",
    },
    companyName: {
      label: "Company Name",
      placeholder: "Enter your company name.",
    },
    email: {
      label: "Email Address",
      placeholder: "Enter your business email.",
    },
    phone: {
      label: "Phone Number",
      placeholder: "Enter your contact number.",
    },
    location: {
      label: "City / State",
      placeholder: "Enter your location.",
    },
    productCategory: {
      label: "Product Category",
      hint: "Select one:",
      options: [
        "Tablets",
        "Capsules",
        "Powders",
        "Multiple Products",
        "Other",
      ],
    },
    productName: {
      label: "Product or Formulation Name",
      placeholder: "Mention the product you want to manufacture",
    },
    formulationStatus: {
      label: "Do You Have an Existing Formulation?",
      options: [
        "Yes, formulation is ready",
        "No, formulation support is required",
        "Formula is under development",
      ],
    },
    estimatedQuantity: {
      label: "Estimated Order Quantity",
      placeholder: "Enter your expected quantity",
    },
    packagingRequirements: {
      label: "Packaging Requirements",
      options: [
        "Bottles",
        "Jars",
        "Sachets",
        "Blister Packs",
        "Bulk Supply",
        "Packaging guidance required",
      ],
    },
    targetMarket: {
      label: "Target Market",
      options: ["India", "Export", "Both India and Export"],
    },
    certifications: {
      label: "Required Certifications or Testing",
      placeholder:
        "Mention any specific testing, documentation, or compliance requirements",
    },
    timeline: {
      label: "Expected Project Timeline",
      placeholder: "Enter your preferred production or launch timeline",
    },
    message: {
      label: "Message / Additional Requirements",
      placeholder:
        "Share details about your product, formulation, packaging, quantity, and other manufacturing requirements.",
    },
    attachment: {
      label: "Upload Product Brief or Formulation",
      help: "Upload supporting files, if available",
    },
    consent: {
      label: "Consent",
      text: "I agree to be contacted by EVIA Labs regarding my inquiry.",
    },
  },
  actions: {
    continue: "Continue to Next Step",
    back: "Back",
    submit: "Request a Manufacturing Consultation",
    submitting: "Sending Inquiry",
  },
  errors: {
    required: "This field is required.",
    email: "Enter a valid business email.",
    packaging: "Select at least one packaging requirement.",
    consent: "Consent is required before submitting.",
    file:
      "Upload a PDF, DOC, DOCX, XLS, XLSX, PNG, or JPG file up to 10MB.",
    submission:
      "We could not send your inquiry. Please review the form and try again.",
  },
  confirmation:
    "Thank you for contacting EVIA Labs. Your inquiry has been received successfully. Our team will contact you shortly.",
} as const;

export const CREDENTIALS = ["IP", "USP", "BP", "JP", "FSSAI Licensed"] as const;

export const TRUST_STRIP = {
  items: [
    "Pharmaceutical-Grade Ingredients",
    "FSSAI Licensed",
    "WHO GMP Certification – In Progress",
  ],
  formulation: "Personalized Formulation Within the FSSAI RDA Limits.",
} as const;

export const INTERFACE_COPY = {
  openMenu: "Open menu",
  closeMenu: "Close menu",
  primaryNavigation: "Primary navigation",
  mobileNavigation: "Mobile navigation",
  logoAlt: "EVIA Labs",
} as const;

export const HEADER_ACTIONS = [
  { label: "Get a Quote", href: "/contact", variant: "outline" },
  { label: "Schedule a Call", href: "/contact", variant: "solid" },
] as const;

export const SEO = {
  title: "EVIA Labs | Nutraceutical Manufacturers- Pharmaceutical-Graded",
  description:
    "EVIA Labs is one of India's WHO GMP-certified nutraceutical manufacturers. We make pharma-grade tablets, capsules and more for B2B marketers and exporters.",
} as const;
