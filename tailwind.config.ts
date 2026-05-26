import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        // Base
        ink: "#080c16",
        navy: "#0f172a",
        midnight: "#020617",
        graphite: "#334155",
        slate: { 400: "#94a3b8", 500: "#64748b", 600: "#475569" },
        mist: "#f8fafc",
        line: "#e2e8f0",
        // Brand accents (calmer, institutional)
        teal: "#0d9488",
        "teal-light": "#1f9d91",
        violet: "#6366f1",
        "violet-light": "#3b82f6",
        "violet-dark": "#0a1b35",
        amber: "#14b8a6",
        // Status
        emerald: "#059669",
        rose: "#e11d48",
        orange: "#ea580c"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "Syne", "system-ui", "sans-serif"]
      },
      fontSize: {
        "8xl": ["6rem", { lineHeight: "1", letterSpacing: "0" }],
        "9xl": ["8rem", { lineHeight: "1", letterSpacing: "0" }]
      },
      letterSpacing: {
        tighter: "0",
        tight: "0"
      },
      boxShadow: {
        soft: "0 24px 70px rgba(8, 17, 31, 0.10)",
        panel: "0 14px 42px rgba(8, 17, 31, 0.08)",
        glow: "0 0 60px rgba(99, 102, 241, 0.35), 0 0 20px rgba(99, 102, 241, 0.2)",
        "glow-teal": "0 0 60px rgba(20, 184, 166, 0.35), 0 0 20px rgba(20, 184, 166, 0.2)",
        "glow-sm": "0 0 30px rgba(99, 102, 241, 0.25)",
        "card-hover": "0 32px 80px rgba(8, 17, 31, 0.18), 0 8px 24px rgba(8, 17, 31, 0.12)",
        "inner-glow": "inset 0 1px 0 rgba(255,255,255,0.1)"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-mesh": "radial-gradient(circle at 20% 20%, rgba(99,102,241,0.32) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(20,184,166,0.24) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(59,130,246,0.10) 0%, transparent 70%)",
        "grid-dark": "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "grid-light": "linear-gradient(rgba(10,27,53,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(10,27,53,0.04) 1px, transparent 1px)"
      },
      backdropBlur: {
        xs: "2px"
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem"
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
        "slide-right": "slideRight 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-reverse": "floatReverse 7s ease-in-out infinite",
        sheen: "sheen 8s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        pulse: "pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "border-glow": "borderGlow 2s ease-in-out infinite",
        "gradient-shift": "gradientShift 6s ease infinite",
        grain: "grain 0.5s steps(1) infinite"
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.92)" },
          "100%": { opacity: "1", transform: "scale(1)" }
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" }
        },
        floatReverse: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(10px)" }
        },
        sheen: {
          "0%, 58%": { transform: "translateX(-130%)" },
          "72%, 100%": { transform: "translateX(130%)" }
        },
        borderGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(99,102,241,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(20,184,166,0.5)" }
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" }
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-2%, -2%)" },
          "20%": { transform: "translate(2%, 2%)" },
          "30%": { transform: "translate(-1%, 1%)" },
          "40%": { transform: "translate(1%, -1%)" },
          "50%": { transform: "translate(-2%, 1%)" },
          "60%": { transform: "translate(2%, -2%)" },
          "70%": { transform: "translate(-1%, -1%)" },
          "80%": { transform: "translate(1%, 2%)" },
          "90%": { transform: "translate(-2%, 2%)" }
        }
      },
      transitionDuration: {
        "400": "400ms"
      }
    }
  },
  plugins: []
};

export default config;
