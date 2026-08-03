"use client";

import Link from "next/link";

import {
  Bookmark,
  Building,
  MapPinned,
  Clock3,
  BadgeCheck,
  Pencil,
  Trash2,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import { Opportunity } from "@/types/opportunity";
import { useSaved } from "@/context/SavedContext";
import { useLanguage } from "@/context/LanguageContext";
import { deleteOpportunity } from "@/lib/storage";

type Props = {
  opportunity: Opportunity;
  onDelete?: (id: string) => void;
};

const text = {
  en: {
    view: "View Details",
    deleteConfirm:
      "Are you sure you want to delete this opportunity?",
    save: "Save",
    saved: "Saved",
    edit: "Edit",
    delete: "Delete",

    categories: {
      Job: "💼 Job",
      Internship: "🎓 Internship",
      Scholarship: "🏆 Scholarship",
      "Remote Work": "🌍 Remote",
      Training: "📚 Training",
      Volunteer: "🤝 Volunteer",
      "Online Course": "💻 Course",
    },

    types: {
      Remote: "Remote",
      "On-site": "On-site",
      Hybrid: "Hybrid",
    },
  },

  fa: {
    view: "مشاهده جزئیات",

    deleteConfirm:
      "آیا مطمئن هستید که می‌خواهید این فرصت حذف شود؟",

    save: "ذخیره",

    saved: "ذخیره شده",

    edit: "ویرایش",

    delete: "حذف",

    categories: {
      Job: "💼 وظیفه",
      Internship: "🎓 کارآموزی",
      Scholarship: "🏆 بورسیه",
      "Remote Work": "🌍 دورکاری",
      Training: "📚 آموزش",
      Volunteer: "🤝 داوطلبی",
      "Online Course": "💻 دوره آنلاین",
    },

    types: {
      Remote: "دورکاری",
      "On-site": "حضوری",
      Hybrid: "ترکیبی",
    },
  },
};

export default function OpportunityCard({
  opportunity,
  onDelete,
}: Props) {  const { toggleSaved, isSaved } = useSaved();
  const { language } = useLanguage();

  const t = text[language];

  const title =
    language === "fa" && opportunity.titleFa
      ? opportunity.titleFa
      : opportunity.title;

  const organization =
    language === "fa" && opportunity.organizationFa
      ? opportunity.organizationFa
      : opportunity.organization;

  const location =
    language === "fa" && opportunity.locationFa
      ? opportunity.locationFa
      : opportunity.location;

  const description =
    language === "fa" && opportunity.descriptionFa
      ? opportunity.descriptionFa
      : opportunity.description;

  const category =
    t.categories[
      opportunity.category as keyof typeof t.categories
    ] || opportunity.category;

  const type =
    t.types[
      opportunity.type as keyof typeof t.types
    ] || opportunity.type;

  const formattedDate = new Date(
    opportunity.deadline
  ).toLocaleDateString(
    language === "fa" ? "fa-IR" : "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );

  function handleDelete() {
    const result = window.confirm(t.deleteConfirm);

    if (!result) return;

    deleteOpportunity(opportunity.id);

    onDelete?.(opportunity.id);
  }

  return (
    <article
      dir={language === "fa" ? "rtl" : "ltr"}
      className="
        group
        relative
        overflow-hidden
        rounded-[30px]
        border
        border-slate-200
        bg-white
        shadow-lg
        transition-all
        duration-500
        hover:-translate-y-3
        hover:shadow-[0_25px_70px_rgba(0,0,0,.18)]
        dark:border-slate-700
        dark:bg-slate-900
      "
    >

      {/* Left Gradient Line */}

      <div
        className="
          absolute
          left-0
          top-0
          h-full
          w-1.5
          bg-gradient-to-b
          from-cyan-400
          via-blue-500
          to-indigo-600
        "
      />

      {/* Header */}

      <div
        className="
          relative
          overflow-hidden
          bg-gradient-to-br
          from-sky-500
          via-blue-600
          to-indigo-700
          px-6
          pt-6
          pb-5
        "
      >

        {/* Glow */}

        <div
          className="
            absolute
            inset-0
            opacity-20
            bg-[radial-gradient(circle_at_top_right,white,transparent_65%)]
          "
        />

        <div className="relative flex items-start justify-between">{/* Category */}
          <div className="flex flex-col gap-3">

            <span
              className="
      inline-flex
      w-fit
      items-center
      gap-2
      rounded-full
      bg-white/20
      px-4
      py-2
      text-xs
      font-semibold
      text-white
      backdrop-blur-md
    "
            >
              <Sparkles size={14} />
              {category}
            </span>

            <h2
              className="
      max-w-[260px]
      text-2xl
      font-extrabold
      leading-tight
      tracking-tight
      text-white
    "
            >
              {title}
            </h2>

          </div>

          {/* Save */}
          <button
            type="button"
            aria-label={
              isSaved(opportunity.id)
                ? t.saved
                : t.save
            }
            onClick={() => toggleSaved(opportunity.id)}
            className="
    flex
    h-12
    w-12
    items-center
    justify-center
    rounded-2xl
    bg-white/20
    text-white
    backdrop-blur-md
    transition-all
    duration-300
    hover:scale-110
    hover:bg-white
    hover:text-blue-600
  "
          >
            <Bookmark
              size={21}
              className={
                isSaved(opportunity.id)
                  ? "fill-white"
                  : ""
              }
            />
          </button>

        </div>

      </div>

      {/* Content */}

      <div className="space-y-5 p-6">

        {/* Organization */}

        <div
          className="
      flex
      items-center
      gap-3
      rounded-2xl
      border
      border-slate-200
      bg-slate-50
      p-4
      dark:border-slate-700
      dark:bg-slate-800
    "
        >

          <div
            className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-xl
        bg-blue-100
        text-blue-600
      "
          >
            <Building size={20} />
          </div>

          <div>

            <p className="text-xs text-slate-500">
              Organization
            </p>

            <p className="font-semibold dark:text-white">
              {organization}
            </p>

          </div>

        </div>

        {/* Location */}

        <div
          className="
      flex
      items-center
      gap-3
      rounded-2xl
      border
      border-slate-200
      bg-slate-50
      p-4
      dark:border-slate-700
      dark:bg-slate-800
    "
        >

          <div
            className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-xl
        bg-cyan-100
        text-cyan-600
      "
          >
            <MapPinned size={20} />
          </div>

          <div>

            <p className="text-xs text-slate-500">
              Location
            </p>

            <p className="font-semibold dark:text-white">
              {location}
            </p>

          </div>

        </div>

        {/* Type + Deadline */}

        <div className="grid grid-cols-2 gap-4">

          <div
            className="
        rounded-2xl
        border
        border-slate-200
        bg-slate-50
        p-4
        dark:border-slate-700
        dark:bg-slate-800
      "
          >

            <BadgeCheck
              size={20}
              className="mb-2 text-green-600"
            />

            <p className="text-xs text-slate-500">
              Type
            </p>

            <p className="font-semibold dark:text-white">
              {type}
            </p>

          </div>

          <div
            className="
        rounded-2xl
        border
        border-slate-200
        bg-slate-50
        p-4
        dark:border-slate-700
        dark:bg-slate-800
      "
          >

            <Clock3
              size={20}
              className="mb-2 text-orange-500"
            />

            <p className="text-xs text-slate-500">
              Deadline
            </p>

            <p className="font-semibold dark:text-white">
              {formattedDate}
            </p>

          </div>

        </div>      {/* Description */}

        <div
          className="
          rounded-3xl
          border
          border-slate-200
          bg-gradient-to-br
          from-slate-50
          to-white
          p-5
          dark:border-slate-700
          dark:from-slate-800
          dark:to-slate-900
        "
        >
          <p
            className="
            line-clamp-4
            leading-7
            text-sm
            text-slate-600
            dark:text-slate-300
          "
          >
            {description}
          </p>
        </div>

        {/* Tags */}

        {opportunity.tags?.length > 0 && (

          <div
            className="
            flex
            flex-wrap
            gap-3
          "
          >

            {opportunity.tags.map((tag) => (

              <span
                key={tag}
                className="
                rounded-full
                border
                border-blue-200
                bg-gradient-to-r
                from-sky-50
                to-cyan-50
                px-4
                py-2
                text-xs
                font-semibold
                text-sky-700
                transition-all
                duration-300
                hover:scale-105
                hover:border-blue-500
                hover:bg-blue-600
                hover:text-white
                dark:border-slate-600
                dark:bg-slate-800
                dark:text-slate-300
              "
              >
                #{tag}
              </span>

            ))}

          </div>

        )}

        {/* Divider */}

        <div
          className="
          h-px
          bg-gradient-to-r
          from-transparent
          via-slate-300
          to-transparent
          dark:via-slate-700
        "
        />

        {/* Actions */}

        <div
          className="
          flex
          items-center
          gap-3
          pt-2
        "
        >

          {/* View */}

          <Link
            href={`/opportunities/${opportunity.id}`}
            className="
            flex-1
            flex
            items-center
            justify-center
            gap-2
            rounded-2xl
            bg-gradient-to-r
            from-sky-600
            via-blue-600
            to-indigo-700
            py-3.5
            text-sm
            font-bold
            text-white
            transition-all
            duration-300
            hover:scale-[1.03]
            hover:shadow-xl
          "
          >
            {t.view}

            <ArrowUpRight size={18} />
          </Link>

          {/* Edit */}

          <Link
            href={`/edit/${opportunity.id}`}
            aria-label={t.edit}
            className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            border
            border-amber-300
            bg-amber-50
            text-amber-600
            transition-all
            duration-300
            hover:scale-110
            hover:bg-amber-500
            hover:text-white
          "
          >
            <Pencil size={19} />
          </Link>

          {/* Delete */}

          <button
            type="button"
            aria-label={t.delete}
            onClick={handleDelete}
            className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            bg-red-500
            text-white
            transition-all
            duration-300
            hover:scale-110
            hover:bg-red-600
            hover:shadow-lg
          "
          >
            <Trash2 size={19} />
          </button>

        </div>

        {/* Bottom Glow */}
        <div
          className="
          pointer-events-none
          absolute
          -bottom-24
          left-1/2
          h-48
          w-48
          -translate-x-1/2
          rounded-full
          bg-blue-500/10
          blur-3xl
          transition-all
          duration-500
          group-hover:bg-blue-500/20
        "
        />

      </div>

    </article>
  );
}