"use client";

import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { SectionItem } from "@/content/site";
import { motion } from "framer-motion";
import {
  Activity,
  BadgeCheck,
  BookOpenCheck,
  Building2,
  CircleCheck,
  ClipboardCheck,
  FileLock2,
  Fingerprint,
  FolderArchive,
  GanttChartSquare,
  KeyRound,
  Landmark,
  Layers3,
  LockKeyhole,
  Network,
  Scale,
  ShieldCheck,
  UserCheck,
  UsersRound
} from "lucide-react";

const iconMap: Record<string, any> = {
  Activity,
  BadgeCheck,
  BookOpenCheck,
  Building2,
  CircleCheck,
  ClipboardCheck,
  FileLock2,
  Fingerprint,
  FolderArchive,
  GanttChartSquare,
  KeyRound,
  Landmark,
  Layers3,
  LockKeyhole,
  Network,
  Scale,
  ShieldCheck,
  UserCheck,
  UsersRound
};

type FeatureGridProps = {
  eyebrow?: string;
  title: string;
  text: string;
  items: SectionItem[];
};

export function FeatureGrid({ eyebrow, title, text, items }: FeatureGridProps) {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-line to-transparent" />
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-28"
          >
            <SectionHeader eyebrow={eyebrow} title={title} text={text} />
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2">
          {items.map((item, index) => {
            const Icon = item.icon ? iconMap[item.icon] : null;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group min-h-56 transition duration-300 hover:-translate-y-1 hover:border-violet/25 hover:shadow-soft h-full flex flex-col justify-between">
                  <div>
                    {Icon ? (
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet/10 text-violet transition-colors duration-300 group-hover:bg-ink group-hover:text-white shadow-sm">
                        <Icon size={24} />
                      </div>
                    ) : null}
                    <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-graphite">{item.text}</p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
}
