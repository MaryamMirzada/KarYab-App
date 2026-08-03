"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const faqContent = {
  en: {
    title: "Frequently Asked Questions",
    faqs: [
      {
        question: "Is KaarYab free to use?",
        answer:
          "Yes. KaarYab is completely free for job seekers and students.",
      },
      {
        question: "Can I submit opportunities?",
        answer:
          "Yes. Organizations and individuals can submit opportunities using the Add Opportunity page.",
      },
      {
        question: "How often are new opportunities updated?",
        answer:
          "We update KaarYab regularly with new jobs, scholarships, internships, fellowships, and other opportunities from trusted organizations.",
      }
    ],
  },

  fa: {
    title: "سوالات متداول",
    faqs: [
      {
        question: "آیا استفاده از کاریاب رایگان است؟",
        answer:
          "بله. کاریاب برای جویندگان کار و دانشجویان کاملاً رایگان است.",
      },
      {
        question: "آیا می‌توانم فرصت‌های جدید ثبت کنم؟",
        answer:
          "بله. سازمان‌ها و افراد می‌توانند از طریق صفحه «ثبت فرصت» فرصت‌های جدید را ارسال کنند.",
      },
      {
        question: "آیا کاریاب از فرصت‌های کار از راه دور پشتیبانی می‌کند؟",
        answer:
          "بله، شما می‌توانید فرصت‌های شغلی آنلاین و دورکاری از سازمان‌های بین‌المللی را پیدا کنید.",
      },
    ],
  },
};

export default function FAQ() {
  const { language } = useLanguage();
  const t = faqContent[language];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto grid max-w-7xl items-start gap-16 px-6 lg:grid-cols-[350px_1fr]">
      <div
        className={`sticky top-24 ${language === "fa" ? "text-right" : "text-left"
          }`}
      >
        <span className="inline-flex rounded-full bg-[var(--primary-color)]/10 px-4 py-2 text-sm font-semibold text-[var(--primary-color)]">
          FAQ
        </span>

        <h2 className="mt-5 text-4xl font-bold text-slate-900 dark:text-white">
          {t.title}
        </h2>

        <p className="mt-6 leading-8 text-slate-600 dark:text-slate-300">
          {language === "fa"
            ? "پاسخ رایج‌ترین سوالات درباره استفاده از کاریاب و نحوه دسترسی به فرصت‌ها."
            : "Find answers to the most common questions about using KaarYab."}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {t.faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <article
              key={faq.question}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className={`flex w-full items-center justify-between p-6 font-semibold ${language === "fa" ? "text-right" : "text-left"
                  }`}
              >
                <span>{faq.question}</span>

                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary-color)]/10 transition-all duration-300 ${isOpen
                      ? "rotate-180 bg-[var(--primary-color)] text-white"
                      : "text-[var(--primary-color)]"
                    }`}
                >
                  <ChevronDown className="h-5 w-5" />
                </div>
              </button>

              <div
                className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
              >
                <div className="overflow-hidden">
                  <p
                    className={`px-6 pb-6 leading-8 text-slate-600 dark:text-slate-300 ${language === "fa" ? "text-right" : "text-left"
                      }`}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
      </div>
  );
}