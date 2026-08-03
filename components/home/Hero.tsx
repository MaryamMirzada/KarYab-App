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
      className="relative flex min-h-screen items-center overflow-hidden bg-white"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:70px_70px] opacity-50" />

      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[150px]" />

      <div className="container mx-auto grid min-h-screen items-center gap-8 py-16 lg:grid-cols-[45%_55%] lg:py-0">
        {/* Text Section */}
        <div
          data-aos="fade-right"
          className={language === "fa" ? "text-right" : "text-left"}
        >
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            🚀 {t.badge}
          </div>

          {/* Title */}
          <h1 className="mt-6 text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            {t.title1}

            <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
              {t.title2}
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            {t.description}
          </p>

          {/* Buttons */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              href="/opportunities"
              className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-blue-700"
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
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition duration-300 hover:border-blue-600 hover:text-blue-600"
            >
              {t.post}
            </Link>
          </div>
        </div>

        {/* Image Section */}

        <div
          data-aos="fade-left"
          className="relative flex items-center justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl">

            {/* Image Glow */}
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-[90px]" />

            {/* Hero Image */}
            <Image
              src="/home/hero_img.png"
              alt="Hero"
              width={700}
              height={700}
              priority
              className="relative z-10 h-auto w-full object-contain drop-shadow-2xl"
            />


            {/* Jobs Card */}
            <div
              data-aos="fade-down"
              data-aos-delay="300"
              className="absolute left-0 top-8 z-20 hidden rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-xl backdrop-blur lg:block"
            >
              <div className="flex items-center gap-3">

                <div className="rounded-xl bg-blue-100 p-3">
                  <Briefcase
                    size={22}
                    className="text-blue-600"
                  />
                </div>

                <div>
                  <p className="font-bold text-slate-900">
                    12,000+
                  </p>

                  <span className="text-sm text-slate-500">
                    Jobs
                  </span>
                </div>

              </div>
            </div>



            {/* Scholarship Card */}
            <div
              data-aos="fade-left"
              data-aos-delay="500"
              className="absolute right-0 top-36 z-20 hidden rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-xl backdrop-blur lg:block"
            >
              <div className="flex items-center gap-3">

                <div className="rounded-xl bg-green-100 p-3">
                  <GraduationCap
                    size={22}
                    className="text-green-600"
                  />
                </div>

                <div>
                  <p className="font-bold text-slate-900">
                    850+
                  </p>

                  <span className="text-sm text-slate-500">
                    Scholarships
                  </span>
                </div>

              </div>
            </div>



            {/* Remote Card */}
            <div
              data-aos="fade-up"
              data-aos-delay="700"
              className="absolute bottom-10 left-10 z-20 hidden rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-xl backdrop-blur lg:block"
            >
              <div className="flex items-center gap-3">

                <div className="rounded-xl bg-purple-100 p-3">
                  <Laptop
                    size={22}
                    className="text-purple-600"
                  />
                </div>

                <div>
                  <p className="font-bold text-slate-900">
                    Remote
                  </p>

                  <span className="text-sm text-slate-500">
                    Worldwide
                  </span>
                </div>

              </div>
            </div>


          </div>
        </div>

      </div>
    </section>
  );
}