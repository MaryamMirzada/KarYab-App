"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqContent = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to the most common questions about using KaarYab, submitting opportunities, and accessing jobs, scholarships, internships, and fellowships.",

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
    },
  ],
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-start gap-14 lg:grid-cols-12">

          {/* Left */}
          <div className="sticky top-24 lg:col-span-4 text-left">
            <span className="inline-flex rounded-full bg-[var(--primary-color)]/10 px-4 py-2 text-sm font-semibold text-[var(--primary-color)]">
              FAQ
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
              {faqContent.title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              {faqContent.description}
            </p>

            <div className="mt-10 rounded-3xl border border-[var(--primary-color)]/20 bg-[var(--primary-color)]/5 p-6">
              <h4 className="font-semibold text-slate-900 dark:text-white">
                Still have questions?
              </h4>

              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                If you couldn't find your answer, feel free to contact the KaarYab team.
              </p>

              <button className="mt-6 rounded-xl bg-[var(--primary-color)] px-5 py-3 text-white transition hover:opacity-90">
                Contact Us
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-8">
            <div className="space-y-5">
              {faqContent.faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <article
                    key={faq.question}
                    className={`overflow-hidden rounded-3xl border bg-white transition-all duration-300 dark:border-slate-700 dark:bg-slate-800 ${isOpen
                        ? "border-[var(--primary-color)] shadow-xl"
                        : "border-slate-200 hover:border-[var(--primary-color)]/30 hover:shadow-lg"
                      }`}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between p-7 text-left"
                    >
                      <span className="text-lg font-semibold text-slate-900 dark:text-white">
                        {faq.question}
                      </span>

                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 ${isOpen
                            ? "rotate-180 bg-[var(--primary-color)] text-white"
                            : "bg-[var(--primary-color)]/10 text-[var(--primary-color)]"
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
                        <p className="px-7 pb-7 leading-8 text-slate-600 dark:text-slate-300">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}