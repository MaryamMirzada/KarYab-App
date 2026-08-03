"use client";

import {
  CheckCircle2,
  Target,
  Users,
  Briefcase,
  GraduationCap,
  Code2,
} from "lucide-react";


export default function AboutPage() {


  const goals = [
    {
      text: "Help students find scholarships.",
      icon: <GraduationCap />,
      color: "bg-purple-100 text-purple-600"
    },

    {
      text: "Provide internship opportunities.",
      icon: <Briefcase />,
      color: "bg-blue-100 text-blue-600"
    },

    {
      text: "Support job seekers.",
      icon: <Users />,
      color: "bg-green-100 text-green-600"
    },

    {
      text: "Promote remote work opportunities.",
      icon: <Target />,
      color: "bg-orange-100 text-orange-600"
    },

    {
      text: "Encourage lifelong learning through training programs.",
      icon: <Code2 />,
      color: "bg-cyan-100 text-cyan-600"
    },
  ];



  const technologies = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Recharts",
    "React Hook Form",
    "Zod",
    "LocalStorage",
  ];



  return (

    <main
      className="
min-h-screen
bg-gradient-to-br
from-white
via-blue-50
to-slate-100
px-6
py-20
"
    >


      <div
        className="
mx-auto
max-w-6xl
"
      >


        {/* Page Header */}

        <section
          className="
mb-14
text-center
"
        >

          <h1
            className="
text-4xl
font-extrabold
tracking-tight
text-slate-900
md:text-5xl
"
          >

            About KaarYab Afghanistan

          </h1>


          <p
            className="
mx-auto
mt-5
max-w-3xl
text-lg
leading-8
text-slate-500
"
          >

            KaarYab Afghanistan is an opportunity finder platform designed
            to help Afghan youth discover jobs, internships, scholarships,
            training programs, remote work, and volunteer opportunities.

          </p>



          <div
            className="
mx-auto
mt-8
h-1
w-24
rounded-full
bg-blue-600
"
          />


        </section>

        {/* About Content */}


        <section
          className="
mt-10
rounded-3xl
border
border-slate-200
bg-white
p-10
shadow-xl
"
        >


          <p
            className="
text-lg
leading-8
text-slate-600
"
          >

            <strong className="text-blue-600">
              KaarYab Afghanistan
            </strong>

            {" "}
            connects talented young people with educational and professional opportunities that can improve their future.

          </p>




          {/* Goals */}


          <div
            className="
mt-12
"
          >


            <h2
              className="
mb-8
text-3xl
font-extrabold
text-slate-900
"
            >

              Our Goals

            </h2>



            <div
              className="
grid
gap-5
md:grid-cols-2
"
            >


              {
                goals.map((goal, index) => (


                  <div
                    key={index}

                    className="
group
flex
items-center
gap-5
rounded-2xl
border
border-slate-100
bg-slate-50
p-5
transition
hover:-translate-y-1
hover:shadow-lg
"
                  >


                    <div
                      className={`
flex
h-14
w-14
items-center
justify-center
rounded-2xl
${goal.color}
`}
                    >

                      {goal.icon}

                    </div>



                    <p
                      className="
font-medium
text-slate-700
"
                    >

                      {goal.text}

                    </p>



                  </div>


                ))
              }


            </div>


          </div>






          {/* Technologies */}


          <div
            className="
mt-14
"
          >


            <h2
              className="
mb-8
text-3xl
font-extrabold
text-slate-900
"
            >

              Technologies Used

            </h2>




            <div
              className="
flex
flex-wrap
gap-4
"
            >


              {
                technologies.map((tech) => (


                  <span

                    key={tech}

                    className="
rounded-full
border
border-blue-200
bg-blue-50
px-5
py-3
font-semibold
text-blue-600
transition
hover:bg-blue-600
hover:text-white
hover:scale-105
"

                  >

                    {tech}


                  </span>


                ))
              }


            </div>



          </div>



        </section>



      </div>


    </main>


  );

}