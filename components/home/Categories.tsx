"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  Briefcase,
  GraduationCap,
  Laptop,
  HeartHandshake,
  BookOpen,
  Users,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    heading: "Browse Opportunities",
    description:
      "Choose a category and discover thousands of opportunities tailored for Afghan youth.",
    categories: [
      {
        title: "Jobs",
        slug: "Job",
        count: "12,400+",
        icon: Briefcase,
        bg: "from-blue-50 to-blue-100",
        iconBg: "bg-blue-600",
      },
      {
        title: "Internships",
        slug: "Internship",
        count: "850+",
        icon: GraduationCap,
        bg: "from-green-50 to-green-100",
        iconBg: "bg-green-600",
      },
      {
        title: "Scholarships",
        slug: "Scholarship",
        count: "420+",
        icon: BookOpen,
        bg: "from-purple-50 to-purple-100",
        iconBg: "bg-purple-600",
      },
      {
        title: "Remote Work",
        slug: "Remote Work",
        count: "1,500+",
        icon: Laptop,
        bg: "from-orange-50 to-orange-100",
        iconBg: "bg-orange-600",
      },
      {
        title: "Training",
        slug: "Training",
        count: "760+",
        icon: Users,
        bg: "from-pink-50 to-pink-100",
        iconBg: "bg-pink-600",
      },
      {
        title: "Volunteer",
        slug: "Volunteer",
        count: "300+",
        icon: HeartHandshake,
        bg: "from-red-50 to-red-100",
        iconBg: "bg-red-600",
      },
    ],
  },

  fa: {
    heading: "دسته‌بندی فرصت‌ها",
    description:
      "دسته موردنظر خود را انتخاب کنید و هزاران فرصت مناسب را پیدا کنید.",
    categories: [
      {
        title: "وظایف",
        slug: "Job",
        count: "۱۲٬۴۰۰+",
        icon: Briefcase,
        bg: "from-blue-50 to-blue-100",
        iconBg: "bg-blue-600",
      },
      {
        title: "کارآموزی",
        slug: "Internship",
        count: "۸۵۰+",
        icon: GraduationCap,
        bg: "from-green-50 to-green-100",
        iconBg: "bg-green-600",
      },
      {
        title: "بورسیه",
        slug: "Scholarship",
        count: "۴۲۰+",
        icon: BookOpen,
        bg: "from-purple-50 to-purple-100",
        iconBg: "bg-purple-600",
      },
      {
        title: "کار از راه دور",
        slug: "Remote Work",
        count: "۱۵۰۰+",
        icon: Laptop,
        bg: "from-orange-50 to-orange-100",
        iconBg: "bg-orange-600",
      },
      {
        title: "آموزش",
        slug: "Training",
        count: "۷۶۰+",
        icon: Users,
        bg: "from-pink-50 to-pink-100",
        iconBg: "bg-pink-600",
      },
      {
        title: "داوطلبی",
        slug: "Volunteer",
        count: "۳۰۰+",
        icon: HeartHandshake,
        bg: "from-red-50 to-red-100",
        iconBg: "bg-red-600",
      },
    ],
  },
};

export default function Categories() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      dir={language === "fa" ? "rtl" : "ltr"}
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
            Categories
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-5xl">
            {t.heading}
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            {t.description}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {t.categories.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.slug}
                href={`/opportunities?category=${encodeURIComponent(item.slug)}`}
                className={`group relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br ${item.bg} p-8 transition duration-500 hover:-translate-y-2 hover:border-blue-400 hover:shadow-2xl`}
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${item.iconBg} text-white shadow-lg`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-slate-500">
                  {item.count} Opportunities
                </p>

                <div className="mt-8 flex items-center font-semibold text-blue-600">
                  {language === "fa" ? "مشاهده" : "Explore"}

                  {language === "fa" ? (
                    <ArrowLeft className="ml-2 transition group-hover:-translate-x-1" />
                  ) : (
                    <ArrowRight className="ml-2 transition group-hover:translate-x-1" />
                  )}
                </div>

                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/30 blur-3xl transition group-hover:scale-125" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}