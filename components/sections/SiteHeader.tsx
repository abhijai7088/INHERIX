"use client";

import { ArrowRight, Mail, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { contactChannels } from "@/content/contactChannels";
import { navigation } from "@/content/navigation";

const primaryNavItems = new Set(["How It Works", "Security", "Dashboard Preview"]);
const secondaryNavItems = new Set(["About", "Contact"]);

function getDesktopNavClass(active: boolean, label: string) {
  if (active) return "font-black text-white";
  if (primaryNavItems.has(label)) return "font-extrabold text-[#f8fafc] hover:text-white";
  if (secondaryNavItems.has(label)) return "font-medium text-white/[0.48] hover:text-white/[0.72]";
  return "font-semibold text-white/[0.68] hover:text-white/[0.86]";
}

function getMobileNavClass(active: boolean, label: string) {
  if (active) return "bg-white/[0.08] font-black text-white";
  if (primaryNavItems.has(label)) return "font-extrabold text-white/[0.92] hover:bg-white/[0.05] hover:text-white";
  if (secondaryNavItems.has(label)) return "font-medium text-white/[0.52] hover:bg-white/[0.05] hover:text-white/[0.76]";
  return "font-semibold text-white/[0.72] hover:bg-white/[0.05] hover:text-white/[0.9]";
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const scrolledRef = useRef(false);
  const warmedRoutesRef = useRef(new Set<string>());
  const pathname = usePathname();
  const router = useRouter();

  const closeNavigation = () => {
    setOpen(false);
  };

  const warmRoute = (href: string) => {
    const route = href.split("#")[0] || href;
    if (!route || route === pathname || warmedRoutesRef.current.has(route)) return;
    warmedRoutesRef.current.add(route);
    router.prefetch(route);
  };

  const routeWarmProps = (href: string) => ({
    onFocus: () => warmRoute(href),
    onPointerEnter: () => warmRoute(href),
    onTouchStart: () => warmRoute(href)
  });

  useEffect(() => {
    const updateHeaderState = () => {
      const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const nextScrolled = window.scrollY > 18;
      if (nextScrolled !== scrolledRef.current) {
        scrolledRef.current = nextScrolled;
        setScrolled(nextScrolled);
      }
      progressRef.current?.style.setProperty("--scroll-progress", String(Math.min(window.scrollY / maxScroll, 1)));
      frameRef.current = null;
    };
    const onScroll = () => {
      if (frameRef.current !== null) return;
      frameRef.current = window.requestAnimationFrame(updateHeaderState);
    };
    updateHeaderState();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 overflow-hidden border-b backdrop-blur-2xl transition-[background-color,border-color,box-shadow] duration-200 ${
          scrolled
            ? "border-slate-400/15 bg-[#030712]/90 shadow-[0_14px_46px_rgba(0,0,0,0.24)]"
            : "border-slate-400/10 bg-[#030712]/75 shadow-[0_6px_24px_rgba(0,0,0,0.10)]"
        }`}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_0%,rgba(14,165,233,0.04),transparent_17rem),radial-gradient(circle_at_92%_0%,rgba(91,100,245,0.03),transparent_15rem)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.18] to-transparent" />
        <div
          ref={progressRef}
          className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-[var(--scroll-progress)] bg-gradient-to-r from-[#14b8a6]/55 via-[#3b82f6]/35 to-transparent transition-transform duration-150 [--scroll-progress:0]"
        />

        <Container className="relative flex min-h-[3.8rem] items-center justify-between gap-4">
          <Link href="/" prefetch {...routeWarmProps("/")} className="group flex min-w-fit items-center gap-3">
            <span className="premium-logo-shell relative grid h-9 w-9 place-items-center overflow-hidden rounded-[0.82rem] border border-cyan-200/20 bg-white shadow-[0_12px_28px_rgba(14,165,233,0.12)] transition duration-300 group-hover:-translate-y-0.5">
              <span className="pointer-events-none absolute inset-[-35%] animate-[spin_11s_linear_infinite] bg-[conic-gradient(from_120deg,transparent,rgba(14,165,233,0.30),transparent_36%)]" />
              <span className="relative grid h-[1.95rem] w-[1.95rem] place-items-center rounded-[0.68rem] bg-white">
                <Image src="/images/inherix-symbol.png" alt="INHERIX logo" width={32} height={32} className="h-7 w-7 object-contain" />
              </span>
            </span>
            <span>
              <span className="relative inline-flex items-start pr-4 text-[1.08rem] font-black leading-none">
                <span className="bg-gradient-to-r from-[#18b7ff] via-[#6a63ff] to-[#f02b8f] bg-clip-text text-transparent">
                INHERIX
                </span>
                <sup className="absolute -right-0.5 -top-1 text-[0.52rem] font-black leading-none tracking-normal text-[#d8c99b]">TM</sup>
              </span>
              <span className="mt-0.5 block text-[0.56rem] font-bold uppercase tracking-[0.20em] text-[#cbd5e1]">
                Digital Continuity
              </span>
            </span>
          </Link>

          <nav className="nav-shell hidden items-center rounded-[1rem] border border-white/[0.12] bg-[#07111f]/50 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.045),0_8px_24px_rgba(0,0,0,0.10)] backdrop-blur-2xl xl:flex">
            {navigation.map((item) => {
              const active = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
              return (
                <Link key={item.href} href={item.href} prefetch {...routeWarmProps(item.href)} className="relative whitespace-nowrap rounded-[0.72rem] px-3.5 py-2 text-[0.72rem] tracking-[0.01em] transition 2xl:px-4">
                  {active ? (
                    <span className="absolute inset-0 rounded-[0.72rem] border border-[rgba(216,201,155,0.20)] bg-white/[0.055] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" />
                  ) : null}
                  <span className={`relative ${getDesktopNavClass(active, item.label)}`}>
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden min-w-fit items-center gap-3 lg:flex">
            <a
              href={`mailto:${contactChannels.email}`}
              title={contactChannels.email}
              aria-label={`Email INHERIX at ${contactChannels.email}`}
              className="consultation-premium-button group inline-flex min-h-11 items-center justify-center gap-2 rounded-[0.72rem] px-3.5 py-2.5 text-[0.76rem] font-semibold tracking-[0.035em] text-white/[0.86] transition duration-200 hover:-translate-y-[1px] hover:text-white"
            >
              <Mail size={14} className="text-white/[0.78] transition group-hover:text-white" />
              <span>Email</span>
            </a>
            <Link href="/contact" prefetch {...routeWarmProps("/contact")} className="consultation-premium-button inline-flex min-h-11 items-center justify-center rounded-[0.72rem] px-6 py-2.5 text-[0.78rem] font-semibold tracking-[0.055em] text-[#f8fafc] transition duration-200 hover:-translate-y-[1px] hover:text-white">
              Book Consultation
            </Link>
            <Link href="/dashboard-preview" prefetch {...routeWarmProps("/dashboard-preview")} className="hotstar-gradient-button group inline-flex min-h-11 items-center gap-2 rounded-[0.78rem] px-5 py-2.5 text-[0.82rem] font-semibold text-white transition hover:brightness-110">
              Dashboard Preview
              <ArrowRight size={15} className="transition group-hover:translate-x-0.5" />
            </Link>
          </div>

          <button
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-white xl:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </Container>
      </header>

      {open ? (
          <div className="fixed inset-0 z-40 xl:hidden">
            <button aria-label="Close menu" className="absolute inset-0 bg-midnight/90 backdrop-blur-md" onClick={() => setOpen(false)} />
            <aside
              className="absolute right-0 top-0 flex h-full w-full max-w-sm animate-slide-panel-in flex-col border-l border-white/10 bg-ink shadow-soft"
            >
              <div className="flex items-center justify-between border-b border-white/10 p-5">
                <Link href="/" prefetch {...routeWarmProps("/")} onClick={closeNavigation} className="flex items-center gap-3">
                  <span className="premium-logo-shell grid h-10 w-10 place-items-center rounded-xl bg-white">
                    <Image src="/images/inherix-symbol.png" alt="INHERIX logo" width={34} height={34} className="h-8 w-8 object-contain" />
                  </span>
                  <span>
                    <span className="relative inline-flex items-start pr-4 font-black leading-none">
                      <span className="bg-gradient-to-r from-[#18b7ff] via-[#6a63ff] to-[#f02b8f] bg-clip-text text-transparent">
                      INHERIX
                      </span>
                      <sup className="absolute -right-0.5 -top-1 text-[0.5rem] font-black leading-none tracking-normal text-[#d8c99b]">TM</sup>
                    </span>
                    <span className="mt-1 block text-[0.58rem] font-bold uppercase tracking-[0.18em] text-[#cbd5e1]">
                      Digital Continuity
                    </span>
                  </span>
                </Link>
                <button onClick={() => setOpen(false)} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/80">
                  <X size={18} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto p-5">
                <a
                  href={`mailto:${contactChannels.email}`}
                  className="mb-4 flex items-center gap-3 rounded-[0.85rem] border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.045)] px-4 py-3 text-sm font-semibold text-white/[0.72]"
                >
                  <Mail size={16} className="text-white/[0.62]" />
                  <span className="min-w-0">
                    <span className="block text-[0.62rem] uppercase tracking-[0.16em] text-white/42">Official Communication</span>
                    <span className="block truncate">{contactChannels.email}</span>
                  </span>
                </a>
                <div className="grid gap-2">
                  {navigation.map((item) => {
                    const active = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        prefetch
                        {...routeWarmProps(item.href)}
                        onClick={closeNavigation}
                        className={`rounded-2xl px-4 py-3.5 text-sm transition ${getMobileNavClass(active, item.label)}`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </nav>

              <div className="grid gap-3 border-t border-white/10 bg-midnight/55 p-5">
                <Link href="/contact" prefetch {...routeWarmProps("/contact")} onClick={closeNavigation} className="consultation-premium-button rounded-[0.72rem] py-3 text-center text-sm font-semibold tracking-[0.055em] text-white/[0.92]">
                  Book Consultation
                </Link>
                <Link href="/dashboard-preview" prefetch {...routeWarmProps("/dashboard-preview")} onClick={closeNavigation} className="hotstar-gradient-button rounded-[0.78rem] py-3 text-center text-sm font-semibold text-white">
                  Dashboard Preview
                </Link>
              </div>
            </aside>
          </div>
        ) : null}
    </>
  );
}
