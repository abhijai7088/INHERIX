export type SectionItem = {
  title: string;
  text: string;
  icon?: string;
};

export type MarketingPage = {
  slug: string;
  seo: { title: string; description: string };
  eyebrow: string;
  title: string;
  intro: string;
  sections: Array<{
    eyebrow?: string;
    title: string;
    body: string;
    items?: SectionItem[];
  }>;
  cta: { title: string; text: string; primary: string; secondary: string };
};

export const homePage = {
  seo: {
    title: "INHERIX | India's Digital Continuity Infrastructure",
    description:
      "INHERIX helps families organize critical digital information through structured continuity planning, trusted coordination, and governance-oriented workflows."
  },
  hero: {
    seoH1: "Secure What Matters Most For Your Family",
    title: "Secure What Matters Most For Your Family",
    titleGradient: "Matters Most",
    trustLine: "INHERIX protects continuity across generations.",
    positioning: "Institutional Digital Continuity Framework",
    intro:
      "INHERIX helps families organize critical digital information, define trusted continuity relationships, and manage controlled access through verification-oriented governance workflows.",
    supporting:
      "Demo Preview Only — Features and workflows subject to final release architecture.",
    primary: "Request Early Access",
    secondary: "Schedule Professional Consultation"
  },
  assets: {
    hero: "/media/home/hero-family-continuity.webp",
    problem: "/media/home/problem-fragmented-records.webp",
    professional: "/media/home/professional-consultation.webp"
  },
  problem: {
    eyebrow: "The continuity problem",
    title: "Modern families depend on digital information, but continuity remains unstructured.",
    text:
      "Important records often live across devices, emails, platforms, files, and personal memory. When life becomes uncertain, families need more than storage - they need structure, trusted coordination, and responsible continuity visibility.",
    items: [
      { title: "Fragmented records", text: "Banking references, insurance files, property documents, business systems, and family instructions often remain scattered." },
      { title: "Unclear trusted access", text: "Trusted family members may not know what exists, where it lives, or how continuity coordination should begin." },
      { title: "No governance visibility", text: "Sensitive continuity decisions need structured review, audit visibility, and controlled operational handling." }
    ]
  },
  definition: {
    eyebrow: "What INHERIX is",
    title: "INHERIX is a structured continuity system for modern families.",
    text:
      "INHERIX is not a simple document locker. It is being designed as a structured continuity platform for secure organization, trusted nominee coordination, continuity instructions, proof review, governance review, controlled release visibility, audit awareness, and privacy-oriented workflows.",
    principles: [
      "Structured organization",
      "Trusted nominee coordination",
      "Verification-oriented review",
      "Controlled release visibility"
    ]
  },
  infrastructure: {
    title: "Building India's Digital Continuity Infrastructure.",
    text:
      "INHERIX is being designed as a long-term continuity infrastructure platform for families, professionals, NRIs, advisors, and trusted continuity coordination - built around structure, governance, privacy, and operational maturity.",
    pillars: [
      { title: "Family continuity", text: "A calm structure for critical family information and continuity readiness." },
      { title: "Professional governance", text: "A responsible operating layer for advisors, review roles, and trusted coordination." },
      { title: "Controlled access workflows", text: "Verification-oriented visibility designed to support mature continuity handling." }
    ]
  },
  workflow: [
    { title: "Client", text: "Organizes continuity information and defines trusted relationships." },
    { title: "Nominee", text: "Requests access through a structured continuity workflow." },
    { title: "Proof", text: "Submits required proof for verification-oriented review." },
    { title: "Admin Review", text: "Operational review supports responsible workflow handling." },
    { title: "Controlled Release", text: "Only approved information is released through controlled visibility." }
  ],
  professionalAccess: {
    eyebrow: "Professional access layer",
    title: "Designed for families, nominees, and trusted professionals.",
    text:
      "INHERIX supports a responsible coordination ecosystem where families, nominees, advisors, and review roles can understand the continuity process through structured, governance-oriented visibility.",
    roles: [
      { title: "Family / Client", text: "Organizes critical continuity information and defines trusted relationships." },
      { title: "Nominee", text: "Participates in structured request and proof workflows." },
      { title: "Advisor / Professional", text: "Supports responsible continuity planning and coordination." },
      { title: "Admin Review", text: "Maintains governance-oriented review and controlled release visibility." }
    ]
  },
  governance: [
    { title: "Consent-based visibility", text: "Continuity visibility is framed around consent-aware workflow structures." },
    { title: "Role-based access", text: "Client, nominee, and review roles remain separated through operational boundaries." },
    { title: "Audit trails", text: "Activity history supports continuity monitoring and responsible accountability." },
    { title: "Human review layer", text: "Sensitive requests are positioned through review-oriented handling, not automatic action." },
    { title: "Verification-oriented workflow", text: "Proof and review states help maintain operational discipline." },
    { title: "No public document exposure", text: "The product narrative avoids unrestricted or public information visibility." }
  ],
  security: [
    { title: "AES-256 Ready Storage", text: "A protected storage model positioned for strong encryption patterns around sensitive continuity information." },
    { title: "Verification Layer", text: "Controlled, proof-based review language for nominee requests and sensitive workflow handling." },
    { title: "Access Control", text: "Selective access management framed through client, nominee, and admin role boundaries." },
    { title: "Audit Trail", text: "Activity and request history designed to make every access workflow traceable in the product preview." },
    { title: "Data Lifecycle Controls", text: "Information handling is positioned around operational maturity, retention awareness, and responsible controls." },
    { title: "Compliance Awareness", text: "Indian data protection and IT law awareness is referenced without making legal compliance guarantees." }
  ],
  founder: {
    title: "Why INHERIX Exists",
    text:
      "Families lose access to critical information because records become fragmented, instructions remain personal, and continuity coordination becomes difficult during sensitive situations. INHERIX is being built to solve this responsibly.",
    quote:
      "At INHERIX, our vision is to build a trusted continuity institution for the digital age - designed around responsibility, privacy, governance, and family continuity.",
    attribution: "Amit Tyagi, Founder, INHERIX"
  },
  future: {
    title: "The future of family continuity will be structured, governed, and trusted.",
    text:
      "As families become more digitally dependent, continuity planning requires more than scattered records. INHERIX is being developed to support long-term continuity readiness through structured information organization, trusted coordination, and governance-oriented workflows."
  },
  finalCta: {
    title: "Secure your family's continuity with confidence.",
    text:
      "Start building a structured continuity system with trust, privacy, governance, and operational clarity at its core.",
    primary: "Request Early Access",
    secondary: "Schedule Professional Consultation",
    disclaimer: "Demo Preview Only — Features and workflows subject to final release architecture."
  },
  trust: [
    { title: "Structured for clarity", text: "Operational systems for organizing sensitive continuity-related information.", icon: "Layers3" },
    { title: "Controlled workflows", text: "Governance-oriented nominee and request visibility without unrestricted access.", icon: "LockKeyhole" },
    { title: "Audit visibility", text: "Activity and review trails designed for continuity-oriented operational awareness.", icon: "Activity" },
    { title: "Long-term readiness", text: "A calm infrastructure mindset for families, professionals, and trusted coordination.", icon: "Building2" }
  ],
  solution: [
    "Secure information organization",
    "Trusted nominee structures",
    "Controlled access workflows",
    "Verification-oriented request handling",
    "Operational audit visibility",
    "Continuity-focused governance systems"
  ],
  legacyWorkflow: [
    { title: "Create continuity profile", text: "Establish a structured environment for important records, instructions, and operational information." },
    { title: "Organize important information", text: "Categorize continuity-related information through calm, structured visibility systems." },
    { title: "Assign trusted nominees", text: "Define trusted continuity relationships with controlled visibility settings." },
    { title: "Verification-oriented access", text: "Requests follow structured review, verification, and operational approval workflows." }
  ]
};

export const marketingPages: MarketingPage[] = [
  {
    slug: "how-it-works",
    seo: {
      title: "How INHERIX Works",
      description:
        "A structured digital continuity workflow for trusted coordination, operational clarity, and controlled access governance."
    },
    eyebrow: "Structured Digital Continuity Workflow",
    title: "How INHERIX Works",
    intro:
      "INHERIX is designed to help families securely organize continuity-related information, define trusted continuity relationships, and manage controlled operational workflows through verification-oriented systems and governance-focused visibility.",
    sections: [
      {
        title: "Create Your Secure Digital Continuity Profile",
        body:
          "Users begin by creating a structured continuity environment designed to organize important continuity-related information, operational records, personal instructions, and trusted continuity relationships.",
        items: [
          { title: "Guided setup", text: "A calm onboarding flow with progress visibility.", icon: "ClipboardCheck" },
          { title: "Profile foundation", text: "An operational base for continuity visibility.", icon: "UserCheck" }
        ]
      },
      {
        title: "Organize Important Digital Information & Documents",
        body:
          "Users can organize operational records, financial documents, continuity instructions, digital account references, and sensitive information categories through structured workflows.",
        items: [
          { title: "Document categories", text: "Insurance, property, financial, business, and family information.", icon: "FolderArchive" },
          { title: "Structured visibility", text: "Focused on organization rather than unstructured storage.", icon: "FileLock2" }
        ]
      },
      {
        title: "Define Trusted Beneficiaries & Nominee Relationships",
        body:
          "Trusted continuity relationships are organized through nominee and beneficiary structures designed to support governance visibility and controlled coordination.",
        items: [
          { title: "Relationship mapping", text: "Beneficiary cards and continuity hierarchy visuals.", icon: "Network" },
          { title: "Controlled access structures", text: "Workflow positioning remains verification-oriented.", icon: "KeyRound" }
        ]
      },
      {
        title: "Add Important Continuity Instructions & Operational Guidance",
        body:
          "Users may organize continuity-related instructions, operational guidance, important notes, and coordination information intended to support trusted continuity workflows.",
        items: [
          { title: "Instruction panels", text: "Human-centered content blocks for responsible guidance.", icon: "BookOpenCheck" },
          { title: "Coordination clarity", text: "Structured notes, reminders, and contact references.", icon: "CircleCheck" }
        ]
      },
      {
        title: "Verification-Oriented Continuity Activation Workflow",
        body:
          "Continuity-related workflow activation follows structured review, verification visibility, and governance-oriented procedures designed to maintain trust, accountability, and audit visibility.",
        items: [
          { title: "Review stages", text: "Controlled workflow activation and operational handling.", icon: "GanttChartSquare" },
          { title: "Audit visibility", text: "Governance-focused tracking across sensitive requests.", icon: "Activity" }
        ]
      }
    ],
    cta: {
      title: "Start Building Your Digital Continuity Structure.",
      text: "Create continuity systems with operational clarity, structure, and trust-focused governance.",
      primary: "Start Digital Continuity Plan",
      secondary: "Explore Security Framework"
    }
  },
  {
    slug: "digital-vault",
    seo: {
      title: "Your Secure Digital Continuity Vault",
      description:
        "Organize important continuity-related information, operational records, digital references, and trusted instructions through structured workflows."
    },
    eyebrow: "Secure Digital Continuity Vault",
    title: "Your Secure Digital Continuity Vault",
    intro:
      "INHERIX helps families organize important continuity-related information, operational records, digital references, and trusted continuity instructions through structured governance-oriented workflows.",
    sections: [
      {
        title: "Organize Important Digital Information In One Structured Continuity Environment",
        body:
          "The INHERIX Digital Vault is designed to help users organize important continuity-related information through governance visibility and operational continuity systems.",
        items: [
          { title: "Continuity organization", text: "Structured categories for long-term clarity.", icon: "FolderArchive" },
          { title: "Governance visibility", text: "Permission-aware organization and review pathways.", icon: "ShieldCheck" }
        ]
      },
      {
        title: "Bank Account Information",
        body:
          "Users may organize banking-related references and operational notes in a continuity-oriented format without positioning the platform as a banking institution.",
        items: [{ title: "Reference-first structure", text: "Helpful context without unrestricted account visibility.", icon: "Landmark" }]
      },
      {
        title: "Demat & Investment Records",
        body:
          "Investment-related references can be organized for continuity visibility while keeping legal and financial determinations outside the platform scope.",
        items: [{ title: "Record clarity", text: "A structured place for references, instructions, and categories.", icon: "GanttChartSquare" }]
      },
      {
        title: "Insurance Documents",
        body:
          "Insurance policies and supporting references can be organized so trusted coordination has clearer operational context during continuity workflows.",
        items: [{ title: "Policy organization", text: "Category cards and instruction panels for continuity readiness.", icon: "BadgeCheck" }]
      },
      {
        title: "Property Documents",
        body:
          "Property-related files and references can be arranged through structured continuity categories and controlled visibility planning.",
        items: [{ title: "Property records", text: "Organized references with governance-oriented handling.", icon: "Building2" }]
      },
      {
        title: "Email & Digital Account References",
        body:
          "Digital account references can be organized as continuity information while maintaining controlled operational positioning and responsible access language.",
        items: [{ title: "Digital references", text: "Structured account context without broad public access.", icon: "Fingerprint" }]
      },
      {
        title: "Important Family Instructions",
        body:
          "Family notes, important contacts, process instructions, and continuity-related reminders can be organized for trusted coordination.",
        items: [{ title: "Instruction clarity", text: "Calm guidance panels for sensitive coordination.", icon: "BookOpenCheck" }]
      },
      {
        title: "Governance & Security Layer",
        body:
          "The vault is presented with governance-focused workflows, controlled access structures, and audit-oriented visibility.",
        items: [{ title: "Security posture", text: "Encryption-ready architecture and permission-focused design.", icon: "LockKeyhole" }]
      }
    ],
    cta: {
      title: "Start Organizing Your Digital Continuity Vault.",
      text: "Build a structured environment for continuity-related information with clarity and operational maturity.",
      primary: "Start Digital Continuity Plan",
      secondary: "View Dashboard Preview"
    }
  },
  {
    slug: "family-access-system",
    seo: {
      title: "Structured Family Access & Continuity Governance",
      description:
        "Controlled family access workflows for trusted continuity coordination and governance-oriented visibility."
    },
    eyebrow: "Family Access System",
    title: "Structured Family Access & Continuity Governance",
    intro:
      "INHERIX is designed with controlled access workflows intended to support trusted continuity coordination through verification-oriented systems, governance visibility, and structured continuity management.",
    sections: [
      {
        title: "Continuity Access Should Be Structured, Controlled & Verification-Oriented",
        body:
          "INHERIX is not designed as an unrestricted information-sharing platform. Its access philosophy focuses on controlled workflows, nominee structures, and review visibility.",
        items: [
          { title: "Controlled visibility", text: "Access is framed through governance-oriented workflows.", icon: "LockKeyhole" },
          { title: "Trusted coordination", text: "Family access planning with responsible operational language.", icon: "UsersRound" }
        ]
      },
      {
        title: "No Direct Access Without Verification",
        body:
          "Continuity-related access handling is positioned through structured verification, operational review, and audit-focused coordination.",
        items: [{ title: "Review before release", text: "A staged workflow visual reinforces controlled handling.", icon: "ClipboardCheck" }]
      },
      {
        title: "Beneficiary Access After Defined Continuity Event",
        body:
          "Beneficiary and nominee visibility is presented as part of a defined, controlled continuity workflow rather than automatic entitlement.",
        items: [{ title: "Defined relationships", text: "Nominee maps and relationship cards clarify roles.", icon: "Network" }]
      },
      {
        title: "Private Client Instructions",
        body:
          "Users can organize private instructions and operational guidance designed to support family coordination during sensitive situations.",
        items: [{ title: "Instruction privacy", text: "Clean instruction panels and permission indicators.", icon: "FileLock2" }]
      },
      {
        title: "Multi-Layer Review",
        body:
          "Sensitive continuity workflows are shown with layered proof review, admin visibility, and responsible release positioning.",
        items: [{ title: "Layered governance", text: "Visual review stages make the process understandable.", icon: "Layers3" }]
      },
      {
        title: "Family Trust & Continuity Positioning",
        body:
          "The experience should reassure families through calm explanation, structured access maps, and mature continuity language.",
        items: [{ title: "Operational reassurance", text: "Human, clear, practical, and non-fear-based.", icon: "ShieldCheck" }]
      }
    ],
    cta: {
      title: "Design Your Family Continuity Structure.",
      text: "Plan trusted coordination through controlled access workflows and governance visibility.",
      primary: "Understand Workflow",
      secondary: "Book Consultation"
    }
  },
  {
    slug: "emergency-trigger-system",
    seo: {
      title: "Structured Emergency Continuity Workflow",
      description:
        "Verification-oriented emergency continuity workflows for controlled operational handling and audit visibility."
    },
    eyebrow: "Emergency Trigger System",
    title: "Structured Emergency Continuity Workflow",
    intro:
      "INHERIX is designed with controlled continuity workflows intended to support trusted coordination through verification-oriented operational systems, governance visibility, and structured continuity management processes.",
    sections: [
      {
        title: "Emergency Workflow Philosophy",
        body:
          "Continuity-related workflows require operational maturity, structured review systems, governance visibility, and responsible coordination mechanisms.",
        items: [{ title: "Mature workflow design", text: "A staged process avoids panic-driven messaging.", icon: "GanttChartSquare" }]
      },
      {
        title: "Trigger Is Not Automatic Without Verification",
        body:
          "The website must make clear that trigger workflows are controlled, reviewed, and verification-oriented.",
        items: [{ title: "Verification stage", text: "Proof and review panels communicate responsible handling.", icon: "BadgeCheck" }]
      },
      {
        title: "Manual / Admin Review",
        body:
          "Admin review is presented as a governance-focused operational workflow for evaluating requests and proof visibility.",
        items: [{ title: "Review dashboard", text: "Pending, more proof, approved, and released demo states.", icon: "ClipboardCheck" }]
      },
      {
        title: "No False Legal Claim Positioning",
        body:
          "INHERIX should not claim to determine legal ownership, succession entitlement, judicial validity, or legal authority.",
        items: [{ title: "Responsible claims", text: "Legal boundaries stay visible and calm.", icon: "Scale" }]
      },
      {
        title: "Continuity Support & Governance Visibility",
        body:
          "The workflow supports structured coordination, audit visibility, and operational tracking for continuity readiness.",
        items: [{ title: "Audit trail", text: "Timeline cards show demo review events.", icon: "Activity" }]
      }
    ],
    cta: {
      title: "Explore A Controlled Continuity Workflow.",
      text: "Understand how verification-oriented workflows can support trusted coordination.",
      primary: "View Dashboard Preview",
      secondary: "Explore Security Framework"
    }
  },
  {
    slug: "security-compliance",
    seo: {
      title: "Security, Governance & Operational Transparency",
      description:
        "Security-first continuity positioning with governance visibility, consent awareness, RBAC, audit logs, and responsible legal framing."
    },
    eyebrow: "Security & Compliance",
    title: "Security, Governance & Operational Transparency",
    intro:
      "INHERIX is being designed with a security-first operational philosophy focused on governance visibility, structured continuity workflows, controlled operational access, and responsible information management systems.",
    sections: [
      {
        title: "Built With Security & Governance-Oriented Operational Principles",
        body:
          "The platform vision focuses on controlled continuity workflows, governance visibility, audit-oriented systems, responsible access handling, and operational accountability.",
        items: [
          { title: "Governance controls", text: "Permission-aware workflows and operational visibility.", icon: "ShieldCheck" },
          { title: "Responsible access", text: "Controlled release positioning without overpromising.", icon: "LockKeyhole" }
        ]
      },
      {
        title: "Encryption & Data Security",
        body:
          "The architecture is positioned as encryption-ready and cloud-ready, with responsible language around access controls and data protection awareness.",
        items: [{ title: "Security architecture", text: "Layered trust visuals and infrastructure grids.", icon: "Fingerprint" }]
      },
      {
        title: "Consent & Role-Based Access Awareness",
        body:
          "Consent-oriented workflow structure and role-based operational visibility are core to the INHERIX trust narrative.",
        items: [{ title: "Role visibility", text: "Client, nominee, and admin views remain separated in the preview.", icon: "UserCheck" }]
      },
      {
        title: "Audit Logs & Operational Visibility",
        body:
          "Activity tracking and workflow event visibility are presented as audit-oriented continuity monitoring systems.",
        items: [{ title: "Audit timeline", text: "Structured operational event history.", icon: "Activity" }]
      },
      {
        title: "DPDP Act & IT Act Awareness",
        body:
          "The site may reference awareness toward Indian data protection and IT law contexts without making legal compliance guarantees.",
        items: [{ title: "Compliance-aware", text: "Mature, transparent, and non-defensive wording.", icon: "Scale" }]
      },
      {
        title: "Important Legal & Operational Disclaimer",
        body:
          "INHERIX is not a court, legal authority, banking institution, government authority, judicial body, succession authority, or financial regulatory institution.",
        items: [{ title: "Clear boundaries", text: "The platform supports organization and workflow visibility.", icon: "Landmark" }]
      }
    ],
    cta: {
      title: "Explore Security-Oriented Continuity Infrastructure.",
      text: "See how governance visibility, controlled workflows, and operational transparency shape INHERIX.",
      primary: "View Dashboard Preview",
      secondary: "Schedule Consultation"
    }
  }
];

export const contactContent = {
  seo: {
    title: "Start Your Digital Continuity Consultation",
    description:
      "Request a structured consultation for digital continuity organization, governance-oriented workflows, and trusted coordination."
  },
  purposes: [
    "Family Digital Continuity Planning",
    "Continuity Workflow Understanding",
    "Beneficiary & Nominee Structure",
    "Digital Asset Organization",
    "Professional / Advisor Consultation",
    "Operational Continuity Guidance",
    "General Platform Understanding"
  ],
  times: ["Morning", "Afternoon", "Evening", "Flexible Timing"],
  flow: [
    "The INHERIX team reviews your continuity consultation request and operational requirements.",
    "A suitable consultation schedule is coordinated based on preferred availability and discussion objectives.",
    "The session focuses on continuity organization workflows, governance visibility, and operational systems.",
    "Users receive structured guidance regarding continuity organization approaches and workflow understanding."
  ],
  audiences: ["Families", "Professionals", "Business owners", "Senior citizens", "NRIs", "Chartered Accountants", "Advisors", "Wealth professionals"]
};
