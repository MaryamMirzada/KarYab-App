"use client";

import OpportunityCard from "@/components/opportunity/OpportunityCard";
import { opportunities } from "@/data/opportunities";
import { useLanguage } from "@/context/LanguageContext";
import { Sparkles } from "lucide-react";

const text = {
  en: {
    badge: "Featured",
    title: "Featured Opportunities",
    description:
      "Explore the latest featured opportunities for Afghan youth.",
    empty: "No featured opportunities available at the moment.",
  },
  fa: {
    badge: "ویژه",
    title: "فرصت‌های ویژه",
    description:
      "جدیدترین فرصت‌های ویژه برای جوانان افغانستان را مشاهده کنید.",
    empty: "در حال حاضر فرصت ویژه‌ای موجود نیست.",
  },
};

export default function FeaturedOpportunities() {
  const { language } = useLanguage();
  const t = text[language];

  const featured = opportunities.filter(
    (opportunity) => opportunity.featured
  );

  return (
    <section
      dir={language === "fa" ? "rtl" : "ltr"}
      className="relative overflow-hidden py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div
          className={`mb-16 ${language === "fa" ? "text-right" : "text-left"
            }`}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-[var(--primary-color)] backdrop-blur-md">
            <Sparkles className="h-4 w-4" />
            {t.badge}
          </span>

          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            {t.title}
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            {t.description}
          </p>

          <div className="mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-[var(--primary-color)] to-cyan-400"></div>
        </div>

        {/* Cards */}
        {featured.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {featured.map((opportunity) => (
              <div
                key={opportunity.id}
                className="group transition duration-500 hover:-translate-y-2"
              >
                <OpportunityCard opportunity={opportunity} />
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-white/20 bg-white/60 p-16 text-center shadow-xl backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/50">
            <p className="text-lg text-slate-600 dark:text-slate-300">
              {t.empty}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}