"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  Briefcase,
  GraduationCap,
  Laptop,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

const heroText = {
  en: {
    badge: "Afghanistan's Largest Opportunity Platform",
    title1: "Build",
    title2: "Your Future",
    description:
      "Find jobs, scholarships, internships, remote work, online courses and career opportunities in one trusted platform.",
    explore: "Explore Opportunities",
    post: "Post Opportunity",
  },

  fa: {
    badge: "بزرگ‌ترین پلتفرم فرصت‌های افغانستان",
    title1: "آینده‌ات را",
    title2: "بساز",
    description:
      "فرصت‌های شغلی، بورسیه، کارآموزی، کار از راه دور و آموزش‌های آنلاین را در یک پلتفرم مطمئن پیدا کنید.",
    explore: "مشاهده فرصت‌ها",
    post: "ثبت فرصت",
  },
};

export default function Hero() {
  const { language } = useLanguage();

  const t = heroText[language];

  return (
    <section
      dir={language === "fa" ? "rtl" : "ltr"}
      className="relative overflow-hidden bg-white"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 py-24 lg:grid-cols-2">
        {/* Left */}

        <div className={language === "fa" ? "text-right" : "text-left"}>
          <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            🚀 {t.badge}
          </div>

          <h1 className="mt-8 text-5xl font-black leading-tight text-slate-900 lg:text-7xl">
            {t.title1}

            <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
              {t.title2}
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
            {t.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/opportunities"
              className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-blue-700"
            >
              {t.explore}

              {language === "fa" ? (
                <ArrowLeft
                  size={18}
                  className="transition group-hover:-translate-x-1"
                />
              ) : (
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              )}
            </Link>

            <Link
              href="/add-opportunity"
              className="rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
            >
              {t.post}
            </Link>
          </div>
        </div>

        {/* Right */}

        <div className="relative flex justify-center">
          {/* Floating Cards */}

          <div className="absolute left-0 top-8 hidden rounded-2xl border bg-white p-4 shadow-xl lg:block">
            <div className="flex items-center gap-3">
              <Briefcase className="text-blue-600" />

              <div>
                <p className="font-semibold">12,000+</p>

                <span className="text-sm text-slate-500">Jobs</span>
              </div>
            </div>
          </div>

          <div className="absolute right-0 top-40 hidden rounded-2xl border bg-white p-4 shadow-xl lg:block">
            <div className="flex items-center gap-3">
              <GraduationCap className="text-green-600" />

              <div>
                <p className="font-semibold">850+</p>

                <span className="text-sm text-slate-500">Scholarships</span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 left-12 hidden rounded-2xl border bg-white p-4 shadow-xl lg:block">
            <div className="flex items-center gap-3">
              <Laptop className="text-purple-600" />

              <div>
                <p className="font-semibold">Remote Work</p>

                <span className="text-sm text-slate-500">
                  Worldwide
                </span>
              </div>
            </div>
          </div>

          {/* Image */}

          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl" />

            <Image
              src="/images/hero.svg"
              alt="Hero"
              width={650}
              height={650}
              priority
              className="relative z-10 w-full max-w-xl drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}