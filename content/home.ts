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
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const HERO = {
  eyebrow: "Nellore, India / Contract Manufacturing",
  h1: "Created by Nutraceutical Manufacturers Who Won't Compromise On Quality.",
  highlight: "Won't Compromise On Quality.",
  sub: [
    "Many nutraceutical manufacturers in India overlook essential aspects like ingredient quality, product testing, and documentation. EVIA Labs was established to provide a more dependable solution.",
    "Located in Nellore, India, EVIA Labs specializes in contract manufacturing of nutraceuticals, offering tablets, capsules, and powders for B2B pharmaceutical and nutraceutical marketing companies. Our manufacturing practices reflect a commitment to quality, compliance, and precision, rooted in over twenty years of experience in the pharmaceutical industry by our founding team.",
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
    { value: "Nellore", label: "Manufacturing Hub" },
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
  headline:
    "A Market Built on Quick Fixes. A Manufacturer Established On Principles.",
  h3: "It's Not Just What You Manufacture It's How You Manufacture It",
  paragraphs: [
    "As the nutraceutical industry evolves, there is a need for manufacturers that can provide quality, innovations, and effective formulations. Due to the growing need for safety, transparency, and efficiency from the consumer’s point of view, selection among various methods of production becomes extremely crucial to the future success of the brand.",
    "With the use of advanced air handling technology, strict manufacturing, and stringent quality controls, EVIA Labs offers nutraceutical products that meet internationally recognized quality standards of manufacture.",
    "We are reputable nutraceutical manufacturers working with both local and national pharmaceutical marketing firms through reliable manufacturing capacity and the expertise needed for bringing quality health products to the market.",
  ],
} as const;

export const WHY_CHOOSE = {
  h2: "Why Choose EVIA Labs?",
  headline: "Why Evia Labs Is the Perfect Manufacturing Partner for Your Brand",
  introduction:
    "We are different from most supplement companies. We are a contract manufacturer of pharmaceutical grades, and it is our responsibility to meet the high standards required by the leading marketing companies and export buyers.",
  items: [
    {
      h3: "Pharmaceutical-Grade Standards, Not Just GMP Compliance",
      paragraphs: [
        "We do more than just check the box for compliance as nutraceutical manufacturers-we go beyond. Our building is pharmaceutical production-like, with controlled environments, proven processes, HEPA-grade air handling units, and clean working conditions. Each recipe must meet the standards set by the Indian, US, British, and Japanese pharmaceuticals. Because if your name is on the label, it means that the quality beneath is real.",
      ],
    },
    {
      h3: "A Pure B2B Manufacturing Partner No Retail, No Conflict",
      paragraphs: [
        "EVIA Labs is a committed third-party and business-to-business manufacturer. We do not sell to customers directly, have our own store name, or go up against our clients. We focus on who you serve, how much you earn, and the overall success of your business.",
        "We will handle production, so you can concentrate on expanding your business and market share.",
      ],
    },
    {
      h3: "Custom Formulations, Tailored for You. Each Brand Has Different Needs.",
      paragraphs: [
        "We as nutraceutical manufacturers produce nutraceuticals in tablets, capsules, or granules in containers and sachets as per your specifications and standards. We suggest appropriate formulations, ingredient ratios, and dosage forms according to your wishes. Correctly specified, properly recorded, and reliably repeatable batch-to-batch.",
        "Manufacturing Export Ready from Day One EVIA Labs is built to comply with the most stringent international quality standards. This means your products have a manufacturing story that you can confidently share with international distributors, export buyers, and regulatory bodies.",
      ],
    },
  ],
} as const;

export const PRODUCTS = {
  h2: "Our Products",
  headline:
    "Produced to International Pharmacuetical Standards: Your Product, Your Format.",
  introduction:
    "Every blend we make meets pharmaceutical-grade standards and we keep complete records of each batch. Thus, the quality of each production is always identical. As nutraceutical manufacturers, it is our topmost priority.",
  items: [
    {
      h3: "Tablets Built to Deliver Reliable Performance",
      description:
        "Our nutraceutical tablets are precisely compressed to meet quality standards, and we offer a variety of options, including coated, uncoated, standard, and custom formulated.",
      cta: "Enquire Now",
      image: "/images/product-tablets.webp",
      imageAlt:
        "Pharmaceutical-grade white and pale green nutraceutical tablets on a stainless-steel laboratory tray",
    },
    {
      h3: "Capsules: Pharmaceutical Fill. Clean Delivery",
      description:
        "Manufactured to international pharmaceutical specifications, our pharmaceutical-grade hard-shell capsules ensure purity, accuracy, and clean-label excellence across a wide range of nutraceutical products.",
      cta: "Enquire Now",
      image: "/images/product-capsules.webp",
      imageAlt:
        "Pharmaceutical-grade white and pale green hard-shell capsules in a clean laboratory dish",
    },
    {
      h3: "Powders (Containers): Bulk Nutrition, Bulk Confidence",
      description:
        "Functional nutrition, meal boosters blended to pharmaceutical-level accuracy, in ready-to-consume containers for nutraceutical powder blends. Custom taste and formulation are delivered.",
      cta: "Enquire Now",
      image: "/images/product-powder-container.webp",
      imageAlt:
        "Unbranded nutraceutical powder container and measuring scoop in a pharmaceutical laboratory",
    },
    {
      h3: "Powders (Sachets): Single-Serve, Sachets: Single-Serve, High Standard.",
      description:
        "Single-serve sachet powders for convenient energy, immunity, and daily wellness nutrition, produced to the same pharmaceutical-grade standards as our bulk formats.",
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
  headline: "Everything Your Brand Needs in a Manufacturing Partner",
  introduction:
    "From original formulation to finished, branded product, EVIA Labs provides the whole spectrum of contract manufacturing services that B2B marketing organizations require to bring pharmaceutical-grade nutraceuticals to market under their label.",
  items: [
    {
      h3: "Contract Manufacturing",
      paragraphs: [
        "As nutraceutical manufacturers, we offer third-party production for the specified products of your requirements, capsules, tablets, and powders, processed in our high-grade facility for pharmaceutical production, with comprehensive batch documentation and quality certificates.",
      ],
      cta: "Learn More",
    },
    {
      h3: "Private Labeling",
      paragraphs: [
        "Your trademark on pharmaceutical-grade formulations. We oversee the manufacturing while you handle the market. Private label solutions of constant quality that your clients and authorities can verify.",
      ],
      cta: "Learn More",
    },
    {
      h3: "Custom Formulation",
      paragraphs: [
        "Customized nutraceutical formulations made as per your brief within FSSAI RDA limits and international pharmaceutical standards. Our formulation team works in tandem with your ingredient requirements, target dosage, and product positioning.",
      ],
      cta: "Learn More",
    },
    {
      h3: "Packaging & Labelling",
      paragraphs: [
        "We can offer complete packaging for your end product, including containers, packs, bottles, and sachets, as nutraceutical manufacturers.",
        "Your product is prepared for the market, with label-ready output that includes your brand artwork.",
      ],
      cta: "Learn More",
    },
    {
      h3: "White Labeling",
      paragraphs: [
        "Branded nutraceutical formulations ready for market – a shortcut to market for marketing organizations seeking to launch new product lines without the lead time of custom formulation.",
      ],
      cta: "Learn More",
    },
  ],
  viewAll: "Explore All Services",
} as const;

export const ABOUT_CONTENT = {
  h2: "About EVIA Labs",
  headline: "Founded to set the standard. Built For It.",
  paragraphs: [
    "We produce nutraceutical tablets, capsules, and powders for B2B marketing firms in India and other countries. Our primary services are contract manufacturing and private labeling, which are backed by a founding team with more than 20 years of experience in the pharmaceutical sector.",
    "We as nutraceutical manufacturers deal only with B2B marketing organizations, offering your brand access to manufacturing infrastructure, quality processes, and documentation requirements that other nutraceutical contract manufacturers in India do not give.",
    "We have pharmaceutical-grade air handling equipment, hygienic manufacturing environments, and the processes required to meet not only Indian regulatory requirements but also the demands of global buyers and foreign markets.",
  ],
  cta: "Learn More About EVIA Labs",
  image: "/images/about-evia-manufacturing-campus.webp",
  imageAlt:
    "Modern pharmaceutical and nutraceutical manufacturing campus with landscaped grounds in Nellore, India",
} as const;

export const CAPABILITIES_PROCESS = {
  h2: "Our Capabilities & Process",
  headline: "Five Steps from Your Brief To Your Finished Product",
  introduction:
    "Our manufacturing process is built to deliver regulatory confidence, consistency, and transparency from the moment you submit an inquiry to the delivery of your finished, documented product batch.",
  steps: [
    {
      h3: "Step 1 — Sampling & Formulation",
      description:
        "As nutraceutical manufacturers, the formulation team develops products that meet the standards of pharmaceuticals. Once you approve a trial batch, we go into full production.",
    },
    {
      h3: "Step 2—Paperwork for Regulations",
      description:
        "Before the manufacturing process, necessary compliance papers, Certificate of Analysis and Batch Records are prepared.",
    },
    {
      h3: "Step 3 — Production",
      description:
        "Production takes place in our pharmaceutical-grade facility, in a controlled environment, with certified equipment and in-process quality assessment at every vital stage.",
    },
    {
      h3: "Step 4—Quality Assurance & Release",
      description:
        "Each batch is checked for compliance with pharmaceutical specifications before release. No product is allowed to leave our facility without passing on an analytical release and obtaining a full certificate of analysis.",
    },
    {
      h3: "Step 5—Packaging & Delivery",
      description:
        "Your completed product—packaged, labeled, and recorded—is delivered according to your specifications and timeframe from our nutraceutical manufacturers.",
    },
  ],
} as const;

export const CLIENTS_PARTNERS = {
  h2: "Our Clients & Partners",
  headline:
    "A Manufacturer You Can Rely on to Provide You with Value Over a Marketing Company",
  body:
    "Only B2B pharmaceutical marketing firms that sell to hospitals, distributors, pharmacies, and healthcare networks and who require a contract manufacturer who can be held responsible at every stage of the supply chain are partners of EVIA Labs.",
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
  h2: "Contact EVIA Labs",
  headline: "Your Next Manufacturer Is a Conversation Away.",
  body:
    "What is your target market? What formulation requirements do you have? No commitments, no long lead times. We’ll get back to you within a day.",
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
  eyebrow: "Partner With Us",
  heading: "Manufacturing Inquiry Form",
  introduction:
    "Tell us about your nutraceutical manufacturing requirements, and our team will get in touch with you.",
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
      placeholder: "Enter your full name",
    },
    companyName: {
      label: "Company Name",
      placeholder: "Enter your company name",
    },
    email: {
      label: "Email Address",
      placeholder: "Enter your business email",
    },
    phone: {
      label: "Phone Number",
      placeholder: "Enter your contact number",
    },
    location: {
      label: "City / State",
      placeholder: "Enter your location",
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
    "Thank you for contacting EVIA Labs. Your inquiry has been received successfully. Our team will review your requirements and contact you shortly.",
} as const;

export const CREDENTIALS = ["IP", "USP", "BP", "JP", "FSSAI Licensed"] as const;

export const TRUST_STRIP = {
  items: [
    "Pharmaceutical-Grade Ingredients",
    "FSSAI Licensed",
    "WHO GMP Certification – In Progress",
  ],
  formulation: "Personalized Formulation Within the FSSAI RDA Limits",
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
