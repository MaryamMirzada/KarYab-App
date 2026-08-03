"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  Laptop,
} from "lucide-react";

export default function Hero() {

  return (

    <section
      className="
relative
overflow-hidden
bg-white
"
    >


      <div
        className="
absolute
left-1/2
top-0
h-[350px]
w-[350px]
-translate-x-1/2
rounded-full
bg-blue-500/20
blur-[120px]

sm:h-[450px]
sm:w-[450px]
"
      />




      <div
        className="
container
mx-auto
grid
items-center

gap-10

px-5

py-16

sm:px-8

lg:grid-cols-2

lg:gap-12

xl:px-0

lg:min-h-screen
"
      >



        {/* TEXT */}

        <div
          data-aos="fade-right"

          className="
text-center

lg:text-left
"
        >



          <div
            className="
inline-flex
items-center
rounded-full
border
border-blue-100
bg-blue-50
px-4
py-2

text-xs

sm:text-sm

font-medium
text-blue-700
"
          >

            🚀 Afghanistan's Largest Opportunity Platform

          </div>




          <h1
            className="
mt-6

text-4xl

font-black

leading-tight

text-slate-900


sm:text-5xl


md:text-6xl


lg:text-5xl


xl:text-7xl
"
          >

            Build

            <span
              className="
block
bg-gradient-to-r
from-blue-600
via-cyan-500
to-indigo-600
bg-clip-text
text-transparent
"
            >

              Your Future

            </span>

          </h1>




          <p
            className="
mx-auto

mt-6

max-w-xl

text-base

leading-7

text-slate-600


sm:text-lg


lg:mx-0
"
          >

            Find jobs, scholarships, internships, remote work,
            online courses and career opportunities in one trusted platform.

          </p>




          <div
            className="
mt-8

flex

flex-wrap

justify-center

gap-4


lg:justify-start
"
          >


            <Link
              href="/opportunities"

              className="
group
inline-flex
items-center
gap-2
rounded-xl
bg-blue-600

px-5

py-3

text-sm

font-semibold

text-white

shadow-lg

shadow-blue-200

transition

hover:-translate-y-1

hover:bg-blue-700


sm:px-6

sm:text-base
"
            >

              Explore Opportunities


              <ArrowRight
                size={18}
                className="
transition
group-hover:translate-x-1
"
              />


            </Link>



            <Link
              href="/add-opportunity"

              className="
rounded-xl
border
border-slate-300

px-5

py-3

text-sm

font-semibold

text-slate-700

transition

hover:border-blue-600

hover:text-blue-600


sm:px-6

sm:text-base
"
            >

              Post Opportunity

            </Link>


          </div>


        </div>







        {/* IMAGE */}


        <div

          data-aos="fade-left"

          className="
relative

flex

justify-center

lg:justify-end
"

        >


          <div
            className="
relative

w-full

max-w-sm


sm:max-w-md


md:max-w-lg


lg:max-w-xl
"
          >



            <div
              className="
absolute
inset-0
rounded-full
bg-blue-500/20
blur-[80px]
"
            />



            <Image

              src="/home/hero_img.png"

              alt="Hero"

              width={700}

              height={700}

              priority

              className="
relative
z-10
w-full
object-contain
drop-shadow-2xl
"

            />





            {/* CARDS ONLY DESKTOP */}



            <div
              className="
absolute
left-0
top-10
z-20

hidden

rounded-2xl
border
border-slate-200
bg-white/95
p-3
shadow-xl
backdrop-blur


xl:block
"
            >


              <div
                className="
flex
items-center
gap-3
"
              >

                <div
                  className="
rounded-xl
bg-blue-100
p-3
"
                >

                  <Briefcase
                    size={22}
                    className="text-blue-600"
                  />

                </div>


                <div>

                  <p
                    className="
font-bold
text-slate-900
"
                  >
                    12,000+
                  </p>


                  <span
                    className="
text-sm
text-slate-500
"
                  >
                    Jobs
                  </span>


                </div>


              </div>


            </div>





            <div
              className="
absolute
right-0
top-36
z-20

hidden

rounded-2xl
border
border-slate-200
bg-white/95
p-3
shadow-xl
backdrop-blur


xl:block
"
            >


              <div
                className="
flex
items-center
gap-3
"
              >


                <div
                  className="
rounded-xl
bg-green-100
p-3
"
                >

                  <GraduationCap
                    size={22}
                    className="text-green-600"
                  />

                </div>



                <div>

                  <p
                    className="
font-bold
text-slate-900
"
                  >
                    850+
                  </p>


                  <span
                    className="
text-sm
text-slate-500
"
                  >
                    Scholarships
                  </span>


                </div>


              </div>


            </div>





            <div
              className="
absolute
bottom-10
left-10
z-20

hidden

rounded-2xl
border
border-slate-200
bg-white/95
p-3
shadow-xl
backdrop-blur


xl:block
"
            >


              <div
                className="
flex
items-center
gap-3
"
              >


                <div
                  className="
rounded-xl
bg-purple-100
p-3
"
                >

                  <Laptop
                    size={22}
                    className="text-purple-600"
                  />

                </div>



                <div>

                  <p
                    className="
font-bold
text-slate-900
"
                  >
                    Remote
                  </p>


                  <span
                    className="
text-sm
text-slate-500
"
                  >
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