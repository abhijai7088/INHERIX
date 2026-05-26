import {
  Bell,
  CheckCircle2,
  ClipboardList,
  FileCheck2,
  FileText,
  FolderLock,
  Home,
  KeyRound,
  LockKeyhole,
  MessageSquare,
  Search,
  ShieldCheck,
  UserPlus,
  UsersRound
} from "lucide-react";

export const workflowStages = [
  { title: "Client", text: "Organizes records, nominees, and continuity instructions." },
  { title: "Nominee", text: "Submits a controlled access request through a guided workflow." },
  { title: "Proof", text: "Uploads supporting proof for operational review visibility." },
  { title: "Admin Review", text: "Reviews request status, proof, and audit history." },
  { title: "Controlled Release", text: "Selective demo release status is shown only after review." }
];

export const dashboardNotice =
  "Preview-only demo interface. All numbers, requests, proof items, logs, and release states are sample content for website walkthrough purposes.";

export const adminDashboard = {
  title: "Admin Continuity Dashboard",
  subtitle: "Operational visibility across clients, nominees, proof review, and controlled release statuses.",
  nav: ["Dashboard", "Clients", "Nominees", "Documents", "Instructions", "Consent Logs", "Trigger Requests", "Release Records", "Audit Logs"],
  metrics: [
    { label: "Total Clients", value: "18", change: "+2", icon: UsersRound },
    { label: "Active Clients", value: "11", change: "+1", icon: CheckCircle2 },
    { label: "Nominees", value: "24", change: "+3", icon: UserPlus },
    { label: "Trigger Requests", value: "3", change: "Review", icon: ClipboardList },
    { label: "Pending Releases", value: "1", change: "Controlled", icon: FolderLock },
    { label: "Support Tickets", value: "2", change: "Open", icon: MessageSquare }
  ],
  requests: [
    { name: "Rajesh Sharma", detail: "Client: Vikram Sharma", status: "Under Review" },
    { name: "Priya Mehta", detail: "Client: Arvind Mehta", status: "Submitted" },
    { name: "Neha Verma", detail: "Client: Suresh Verma", status: "More Proof" },
    { name: "Aman Patel", detail: "Client: Mahesh Patel", status: "Approved" }
  ]
};

export const clientDashboard = {
  title: "Client Dashboard",
  subtitle: "A calm workspace for documents, nominees, instructions, and continuity status.",
  nav: ["Dashboard", "My Profile", "Nominees", "Documents", "Instructions", "Consent", "Activity & Logs", "Support"],
  metrics: [
    { label: "Profile Completion", value: "80%", icon: ShieldCheck },
    { label: "Documents", value: "10", icon: FileText },
    { label: "Nominees", value: "2", icon: UsersRound },
    { label: "Pending Actions", value: "1", icon: Bell }
  ],
  categories: [
    { label: "Identity", count: "2 Documents", icon: FileCheck2 },
    { label: "Property", count: "1 Document", icon: Home },
    { label: "Insurance", count: "1 Document", icon: ShieldCheck },
    { label: "Financial", count: "2 Documents", icon: KeyRound },
    { label: "Legal", count: "1 Document", icon: ClipboardList },
    { label: "Family Notes", count: "1 Document", icon: MessageSquare }
  ],
  activity: ["Document uploaded: PAN Card.pdf", "Instruction updated: Family guidance", "Nominee added: Neha Sharma", "Consent completed: Instruction declaration"]
};

export const nomineeDashboard = {
  title: "Nominee Dashboard",
  subtitle: "Request tracking, proof visibility, and released item status in one structured preview.",
  nav: ["Dashboard", "My Profile", "My Requests", "Released Items", "Support Tickets", "Activity & Logs", "Settings"],
  metrics: [
    { label: "Active Requests", value: "2", icon: ClipboardList },
    { label: "Released Items", value: "2", icon: FolderLock },
    { label: "Pending Proofs", value: "1", icon: FileCheck2 },
    { label: "Support Tickets", value: "1", icon: MessageSquare }
  ],
  requests: [
    { title: "Request for Vikram Sharma", detail: "Submitted on 18 May 2025", status: "Under Review" },
    { title: "Request for Vikram Sharma", detail: "Submitted on 10 May 2025", status: "More Proof" },
    { title: "Request for Vikram Sharma", detail: "Submitted on 28 Apr 2025", status: "Approved" }
  ],
  released: ["Bank Statements", "Property Documents", "Insurance Policy"]
};

export const dashboardIcons = { Search, Bell, LockKeyhole };
