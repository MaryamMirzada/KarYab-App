
"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";

const footerText = {
  en: {
    title: "KaarYab Afghanistan",

    description:
      "Helping Afghan youth discover jobs, internships, scholarships, remote work, and learning opportunities.",

    copyright: "All rights reserved.",

    demo: "Demo Data • Built for educational purposes.",

    quickLinks: "Quick Links",

    contact: "Contact",

    links: {
      home: "Home",
      opportunities: "Opportunities",
      about: "About",
      contact: "Contact",
    },

    location: "Kabul, Afghanistan",
  },

  fa: {
    title: "کاریاب افغانستان",

    description:
      "کمک به جوانان افغانستان برای یافتن فرصت‌های شغلی، کارآموزی، بورسیه، دورکاری و فرصت‌های آموزشی.",

    copyright: "تمامی حقوق محفوظ است.",

    demo:
      "داده‌های نمایشی • این پروژه صرفاً برای اهداف آموزشی ساخته شده است.",

    quickLinks: "لینک‌های سریع",

    contact: "ارتباط با ما",

    links: {
      home: "خانه",
      opportunities: "فرصت‌ها",
      about: "درباره ما",
      contact: "تماس",
    },

    location: "کابل، افغانستان",
  },
};

export default function Footer() {
  const { language } = useLanguage();

  const t = footerText[language];

  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,.18),transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-14 lg:grid-cols-12">

          {/* Brand */}
          <div className="lg:col-span-5">

            <h2 className="text-3xl font-bold text-white">
              KaarYab
              <span className="text-[var(--primary-color)]">
                Afghanistan
              </span>
            </h2>

            <p className="mt-6 max-w-md leading-8 text-slate-400">
              Helping Afghan youth discover jobs, internships,
              scholarships, remote work and learning opportunities.
            </p>

            <button
              className="
          mt-8
          inline-flex
          items-center
          gap-3
          rounded-xl
          bg-[var(--primary-color)]
          px-6
          py-3
          font-medium
          transition
          hover:scale-105
        "
            >
              Explore Opportunities

              <ArrowRight className="h-5 w-5" />
            </button>

          </div>

          {/* Links */}
          <div className="lg:col-span-3">

            <h3 className="mb-6 text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-4">

              <li>
                <Link
                  href="/"
                  className="text-slate-400 transition hover:text-white"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/opportunities"
                  className="text-slate-400 transition hover:text-white"
                >
                  Opportunities
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="text-slate-400 transition hover:text-white"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-slate-400 transition hover:text-white"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div className="lg:col-span-4">

            <h3 className="mb-6 text-lg font-semibold">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-white/5 p-3">
                  <Mail className="h-5 w-5 text-[var(--primary-color)]" />
                </div>

                <span className="text-slate-400">
                  info@kaaryab.af
                </span>

              </div>

              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-white/5 p-3">
                  <Phone className="h-5 w-5 text-[var(--primary-color)]" />
                </div>

                <span className="text-slate-400">
                  +93 700 000 000
                </span>

              </div>

              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-white/5 p-3">
                  <MapPin className="h-5 w-5 text-[var(--primary-color)]" />
                </div>

                <span className="text-slate-400">
                  Kabul, Afghanistan
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 border-t border-white/10 pt-8">

          <div className="flex flex-col items-center justify-between gap-5 text-sm text-slate-500 md:flex-row">

            <p>
              © {year} KaarYab Afghanistan. All rights reserved.
            </p>

            <div className="flex gap-8">

              <Link
                href="/privacy"
                className="transition hover:text-white"
              >
                Privacy
              </Link>

              <Link
                href="/terms"
                className="transition hover:text-white"
              >
                Terms
              </Link>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}