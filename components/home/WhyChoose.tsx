"use client";

import {
  ShieldCheck,
  Search,
  Globe,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Easy Search",
    description:
      "Quickly search jobs, internships, scholarships and remote opportunities in seconds.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Opportunities",
    description:
      "Every opportunity is collected from trusted organizations and verified sources.",
  },
  {
    icon: Globe,
    title: "Access Anywhere",
    description:
      "Discover opportunities from anywhere in Afghanistan and around the world.",
  },
];

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 py-24 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,.12),transparent_45%)]" />

      <div className="container mx-auto px-6">

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            WHY CHOOSE US
          </span>

          <h2 className="mt-6 text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Why Choose KaarYab?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            We help Afghan youth discover jobs, scholarships,
            internships and remote opportunities in one trusted platform.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {features.map((feature) => {

            const Icon = feature.icon;

            return (

              <article
                key={feature.title}
                className="
group
relative
overflow-hidden
rounded-3xl
border
border-slate-200
bg-white/80
p-8
backdrop-blur-xl
transition-all
duration-500
hover:-translate-y-3
hover:border-blue-300
hover:shadow-[0_30px_80px_rgba(37,99,235,.15)]
dark:border-slate-700
dark:bg-slate-900/70
">

                <div className="
absolute
left-0
top-0
h-1.5
w-full
bg-gradient-to-r
from-sky-400
via-blue-600
to-indigo-600
"/>

                <div className="
mb-7
flex
h-16
w-16
items-center
justify-center
rounded-2xl
bg-gradient-to-br
from-sky-500
to-blue-700
text-white
shadow-xl
transition-all
duration-500
group-hover:scale-110
group-hover:rotate-6
">

                  <Icon size={30} />

                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {feature.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
                  {feature.description}
                </p>

                <div className="
mt-8
flex
items-center
gap-2
font-semibold
text-blue-600
opacity-0
transition-all
duration-300
group-hover:opacity-100
">

                  Learn More

                  <ArrowRight size={18} />

                </div>

              </article>

            )

          })}

        </div>
      </div>

    </section>
  );
}