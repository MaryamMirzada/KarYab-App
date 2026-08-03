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

  const [openIndex, setOpenIndex] =
    useState<number | null>(0);


  return (

    <section
      className="
bg-white
py-16

sm:py-20
"
    >


      <div
        className="
mx-auto
max-w-7xl
px-5

sm:px-8

xl:px-0
"
      >


        <div
          className="
grid

gap-10


lg:grid-cols-12

lg:gap-14
"
        >


          {/* LEFT */}

          <div

            className="
lg:col-span-4

lg:sticky

lg:top-24

h-fit

text-center

lg:text-left
"

          >


            <span
              className="
inline-flex
rounded-full
bg-blue-100
px-4
py-2

text-xs

sm:text-sm

font-semibold

text-blue-600
"
            >

              FAQ

            </span>




            <h2
              className="
mt-5

text-3xl

font-bold

leading-tight

text-slate-900


sm:text-4xl
"
            >

              {faqContent.title}

            </h2>




            <p
              className="
mt-5

text-base

leading-7

text-slate-600


sm:text-lg

sm:leading-8
"
            >

              {faqContent.description}

            </p>






            <div

              className="
mt-8

rounded-3xl

border

border-blue-100

bg-blue-50

p-5


sm:p-6

"
            >


              <h4
                className="
font-semibold
text-slate-900
"
              >

                Still have questions?

              </h4>


              <p
                className="
mt-3

text-sm

leading-7

text-slate-600
"
              >

                If you couldn't find your answer, feel free to contact the KaarYab team.

              </p>



              <button

                className="
mt-5

rounded-xl

bg-blue-600

px-5

py-3

text-sm

font-semibold

text-white

transition

hover:bg-blue-700
"
              >

                Contact Us

              </button>



            </div>


          </div>







          {/* RIGHT */}

          <div

            className="
lg:col-span-8
"

          >


            <div
              className="
space-y-4

sm:space-y-5
"
            >


              {
                faqContent.faqs.map((faq, index) => {


                  const isOpen =
                    openIndex === index;


                  return (

                    <article

                      key={faq.question}

                      className={`

overflow-hidden

rounded-3xl

border

bg-white

transition-all

duration-300


${isOpen

                          ?

                          "border-blue-500 shadow-xl shadow-blue-100"

                          :

                          "border-slate-200 hover:border-blue-200 hover:shadow-lg"

                        }

`}

                    >


                      <button

                        onClick={() => setOpenIndex(
                          isOpen ? null : index
                        )}

                        className="
flex

w-full

items-center

justify-between

gap-4

p-5


sm:p-7

text-left

"

                      >


                        <span

                          className="
text-base

font-semibold

text-slate-900


sm:text-lg

"
                        >

                          {faq.question}

                        </span>




                        <div

                          className={`

flex

h-10

w-10

shrink-0

items-center

justify-center

rounded-full

transition-all


${isOpen

                              ?

                              "rotate-180 bg-blue-600 text-white"

                              :

                              "bg-blue-50 text-blue-600"

                            }

`}

                        >


                          <ChevronDown
                            className="h-5 w-5"
                          />


                        </div>



                      </button>





                      <div

                        className={`

grid

transition-all

duration-300


${isOpen

                            ?

                            "grid-rows-[1fr]"

                            :

                            "grid-rows-[0fr]"

                          }

`}

                      >


                        <div
                          className="
overflow-hidden
"
                        >


                          <p

                            className="
px-5

pb-5

leading-7

text-slate-600


sm:px-7

sm:pb-7

"

                          >

                            {faq.answer}

                          </p>


                        </div>


                      </div>


                    </article>


                  )


                })

              }



            </div>


          </div>



        </div>


      </div>


    </section>

  );


}