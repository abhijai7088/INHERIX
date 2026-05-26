export type LegalPage = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  sections: Array<{ title: string; body: string; bullets?: string[] }>;
};

export const legalPages: LegalPage[] = [
  {
    slug: "terms",
    title: "Terms & Conditions",
    description: "Structured operational terms governing the use of INHERIX continuity-oriented platform workflows.",
    intro:
      "Structured operational terms governing the use of the INHERIX continuity-oriented platform, workflows, governance systems, and operational coordination services.",
    sections: [
      {
        title: "Platform Usage Terms",
        body: "Defines responsible operational use of the INHERIX platform and continuity-oriented workflows."
      },
      {
        title: "User Responsibilities",
        body: "Users remain responsible for the accuracy, authorization, and legal suitability of information they organize.",
        bullets: ["Information accuracy", "Operational coordination", "Authorized continuity usage", "Compliance with applicable laws"]
      },
      {
        title: "Operational Workflow Limitations",
        body: "INHERIX operates as a continuity-oriented operational infrastructure platform and does not independently determine legal authority.",
        bullets: ["Legal ownership", "Succession entitlement", "Judicial validity", "Legal authority"]
      },
      {
        title: "Service Availability",
        body: "Platform services may evolve, improve, pause, or update as part of operational development and continuity enhancement."
      },
      {
        title: "Intellectual Property",
        body: "Platform designs, operational systems, workflows, branding, UI structures, and continuity-oriented infrastructure remain protected intellectual property unless otherwise contractually agreed."
      }
    ]
  },
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    description: "Responsible information handling and governance-oriented operational practices for INHERIX.",
    intro:
      "INHERIX is being designed with awareness toward responsible information handling, governance-oriented operational practices, and continuity-focused privacy principles.",
    sections: [
      {
        title: "Information Handling Philosophy",
        body: "The platform architecture focuses on responsible operational handling, governance visibility, structured continuity workflows, and privacy-oriented coordination systems."
      },
      {
        title: "Information Categories",
        body: "The platform may organize information categories that support continuity workflows and operational coordination.",
        bullets: ["User profile information", "Continuity-related records", "Operational workflow data", "Governance visibility logs", "Coordination-related information"]
      },
      {
        title: "Operational Security Awareness",
        body: "The platform is being designed with awareness toward encryption-oriented systems, access controls, operational monitoring, and governance visibility."
      },
      {
        title: "Data Usage Principles",
        body: "Information is intended to support platform continuity workflows, operational coordination, governance visibility, and continuity-oriented user experience."
      },
      {
        title: "User Rights & Visibility",
        body: "Users may request operational clarification regarding continuity-related information visibility and governance-oriented workflow handling."
      }
    ]
  },
  {
    slug: "consent-policy",
    title: "Consent & Operational Authorization Policy",
    description: "Governance-oriented workflows for responsible operational coordination and user consent principles.",
    intro:
      "Structured governance-oriented workflows designed around responsible operational coordination and continuity-focused user consent principles.",
    sections: [
      {
        title: "Consent-Oriented Workflow Structure",
        body: "INHERIX is designed around controlled operational visibility, governance-oriented coordination, user-managed continuity workflows, and structured operational authorization."
      },
      {
        title: "User Authorization Principles",
        body: "Users maintain operational control over continuity organization, beneficiary structures, visibility preferences, and coordination workflows."
      },
      {
        title: "Workflow Verification Awareness",
        body: "Certain continuity-oriented workflows may involve structured review visibility and governance-oriented operational handling."
      },
      {
        title: "Communication Consent",
        body: "Users may receive continuity-related operational communication associated with consultation workflows, platform coordination, or governance-oriented continuity activities."
      }
    ]
  },
  {
    slug: "data-access-policy",
    title: "Data Access & Governance Visibility Policy",
    description: "Operational visibility systems and governance-oriented workflow structures for responsible information handling.",
    intro:
      "Operational visibility systems and governance-oriented workflow structures designed to support continuity coordination and responsible information handling.",
    sections: [
      {
        title: "Controlled Access Framework",
        body: "The platform is designed with role-based operational visibility, structured workflow permissions, governance-oriented access systems, and continuity-focused operational controls."
      },
      {
        title: "Verification-Oriented Workflow Handling",
        body: "Continuity-related workflows may involve structured review systems intended to support governance visibility and operational accountability."
      },
      {
        title: "Audit Visibility",
        body: "The platform architecture may support operational tracking, workflow event visibility, governance-oriented audit logs, and structured continuity monitoring."
      },
      {
        title: "Third-Party Access Limitation",
        body: "INHERIX does not sell operational continuity information or provide unrestricted third-party visibility access."
      }
    ]
  },
  {
    slug: "legal-disclaimer",
    title: "Legal & Operational Disclaimer",
    description: "INHERIX platform boundaries, operational positioning, and responsible legal disclaimers.",
    intro:
      "INHERIX is designed as a continuity-oriented operational infrastructure platform focused on governance visibility and structured continuity coordination workflows.",
    sections: [
      {
        title: "INHERIX Is Not",
        body: "INHERIX is not a court of law, legal authority, banking institution, government authority, judicial body, succession authority, or financial regulatory institution."
      },
      {
        title: "INHERIX Does Not Independently",
        body: "INHERIX does not independently determine legal ownership, validate inheritance claims, execute legal succession decisions, provide judicial rulings, determine entitlement outcomes, or replace legal, financial, or regulatory advice."
      },
      {
        title: "Platform Positioning",
        body: "The platform is intended to support continuity organization, governance visibility, trusted coordination, structured operational workflows, and continuity-oriented operational readiness."
      },
      {
        title: "Built Around Operational Trust, Governance & Continuity Visibility",
        body: "INHERIX is being developed with a long-term vision toward helping families and trusted professionals improve continuity organization through governance-oriented workflows, structured operational visibility, and continuity-focused coordination systems."
      }
    ]
  }
];
