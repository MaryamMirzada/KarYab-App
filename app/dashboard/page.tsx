"use client";

import { useEffect, useState } from "react";

import ProtectedRoute from "@/components/auth/ProtectedRoute";

import {
  Briefcase,
  Building2,
  GraduationCap,
  Globe,
  Clock,
  BookOpen,
} from "lucide-react";

import { getStoredOpportunities } from "@/lib/storage";
import { opportunities as demoData } from "@/data/opportunities";

import DashboardChart from "@/components/dashboard/DashboardChart";

import { Opportunity } from "@/types/opportunity";


export default function DashboardPage() {


  const [loading, setLoading] = useState(true);

  const [items, setItems] =
    useState<Opportunity[]>([]);



  useEffect(() => {


    const stored =
      getStoredOpportunities();


    const all = [
      ...demoData,
      ...stored,
    ];


    setItems(all);

    setLoading(false);


  }, []);




  const count = (category: string) => {


    return items.filter(
      item =>
        item.category === category
    ).length;


  };




  const expiring =
    items.filter(item => {


      const deadline =
        new Date(item.deadline);


      const today =
        new Date();


      const diff =
        (deadline.getTime() -
          today.getTime())
        /
        (1000 * 60 * 60 * 24);



      return diff <= 30 && diff >= 0;


    }).length;





  if (loading) {

    return (

      <div className="
        flex
        min-h-screen
        items-center
        justify-center
      ">

        <p className="
          text-xl
          font-semibold
          text-slate-600
        ">
          Loading Dashboard...
        </p>

      </div>

    );

  }





  const chartData = [

    {
      name: "Jobs",
      value: count("Job"),
      color: "#2563eb"
    },

    {
      name: "Scholarships",
      value: count("Scholarship"),
      color: "#9333ea"
    },


    {
      name: "Internships",
      value: count("Internship"),
      color: "#16a34a"
    },


    {
      name: "Remote",
      value: count("Remote Work"),
      color: "#f97316"
    },


    {
      name: "Training",
      value: count("Training"),
      color: "#06b6d4"
    },


  ];





  return (

    <ProtectedRoute>


      <main
        className="
min-h-screen
bg-gradient-to-br
from-white
via-blue-50
to-slate-100
px-6
py-12
"
      >


        <div
          className="
mx-auto
max-w-7xl
"
        >



          {/* Header */}

          <div className="mb-10">

            <h1
              className="
text-4xl
font-extrabold
text-slate-900
"
            >
              Dashboard
            </h1>


            <p
              className="
mt-3
text-slate-500
"
            >
              Manage opportunities and track platform activity.
            </p>


          </div>





          {/* Cards */}


          <div
            className="
grid
gap-6
sm:grid-cols-2
lg:grid-cols-3
xl:grid-cols-6
"
          >


            <Card
              icon={<Briefcase />}
              value={items.length}
              label="Total"
              color="blue"
            />


            <Card
              icon={<Building2 />}
              value={count("Job")}
              label="Jobs"
              color="green"
            />



            <Card
              icon={<GraduationCap />}
              value={count("Scholarship")}
              label="Scholarships"
              color="purple"
            />



            <Card
              icon={<Globe />}
              value={count("Remote Work")}
              label="Remote"
              color="orange"
            />



            <Card
              icon={<BookOpen />}
              value={count("Training")}
              label="Training"
              color="cyan"
            />



            <Card
              icon={<Clock />}
              value={expiring}
              label="Expiring"
              color="red"
            />



          </div>





          {/* Chart + Recent */}


          <div
            className="
mt-10
grid
gap-8
lg:grid-cols-3
"
          >



            {/* Chart */}


            <div
              className="
rounded-3xl
border
border-slate-200
bg-white
p-8
shadow-xl
"
            >


              <div
                className="
mb-8
flex
items-center
justify-between
"
              >


                <div>


                  <h2
                    className="
text-xl
font-extrabold
text-slate-900
"
                  >
                    Opportunity Overview
                  </h2>


                  <p
                    className="
mt-2
text-sm
text-slate-500
"
                  >
                    Distribution of opportunities by category
                  </p>


                </div>



                <div
                  className="
rounded-2xl
bg-blue-50
px-4
py-2
text-sm
font-bold
text-blue-600
"
                >
                  {items.length} Total
                </div>


              </div>




              <div
                className="
flex
flex-col
items-center
gap-8
"
              >


                <DashboardChart
                  data={chartData}
                />





                <div
                  className="
grid
w-full
grid-cols-2
gap-3
"
                >


                  {
                    chartData.map(item => (


                      <div

                        key={item.name}

                        className="
flex
items-center
gap-3
rounded-xl
bg-slate-50
p-3
transition
hover:bg-slate-100
"

                      >


                        <span

                          className="
h-3
w-3
rounded-full
"

                          style={{
                            backgroundColor: item.color
                          }}

                        ></span>



                        <div>

                          <p
                            className="
text-sm
font-semibold
text-slate-700
"
                          >
                            {item.name}
                          </p>


                          <p
                            className="
text-xs
text-slate-500
"
                          >
                            {item.value} Opportunities
                          </p>


                        </div>


                      </div>


                    ))
                  }



                </div>


              </div>


            </div>

            {/* Recent */}
            <section
              className="
lg:col-span-2
rounded-3xl
border
border-slate-200
bg-white
p-8
shadow-xl
"
            >


              <div
                className="
mb-6
flex
items-center
justify-between
"
              >


                <h2
                  className="
text-2xl
font-bold
text-slate-900
"
                >
                  Recent Opportunities
                </h2>


                <span
                  className="
rounded-full
bg-slate-100
px-4
py-1
text-sm
font-bold
text-slate-600
"
                >
                  {items.length}
                </span>


              </div>




              <div className="space-y-4">


                {
                  items
                    .slice(-5)
                    .reverse()
                    .map(item => {


                      const colors: any = {

                        "Job":
                          "bg-blue-100 text-blue-600 border-blue-200",

                        "Scholarship":
                          "bg-purple-100 text-purple-600 border-purple-200",

                        "Internship":
                          "bg-green-100 text-green-600 border-green-200",

                        "Remote Work":
                          "bg-orange-100 text-orange-600 border-orange-200",

                        "Training":
                          "bg-cyan-100 text-cyan-600 border-cyan-200",

                        "Volunteer":
                          "bg-pink-100 text-pink-600 border-pink-200",

                        "Online Course":
                          "bg-yellow-100 text-yellow-600 border-yellow-200",

                      };



                      const iconColor =
                        colors[item.category] ||
                        "bg-blue-100 text-blue-600 border-blue-200";



                      return (

                        <div

                          key={item.id}

                          className="
group
flex
items-center
justify-between
rounded-2xl
border
border-slate-100
bg-gradient-to-r
from-white
to-slate-50
p-5
transition-all
duration-300
hover:-translate-y-1
hover:shadow-lg
"

                        >


                          <div>


                            <h3
                              className="
font-bold
text-slate-900
"
                            >
                              {item.title}
                            </h3>



                            <p
                              className="
mt-1
text-sm
text-slate-500
"
                            >
                              {item.organization}
                            </p>



                            <span

                              className={`
mt-3
inline-flex
rounded-full
border
px-3
py-1
text-xs
font-semibold
${iconColor}
`}

                            >
                              {item.category}
                            </span>


                          </div>





                          <div

                            className={`
flex
h-12
w-12
items-center
justify-center
rounded-2xl
border
transition
group-hover:scale-110
${iconColor}
`}

                          >


                            <Briefcase
                              className="h-5 w-5"
                            />


                          </div>



                        </div>


                      );


                    })
                }



              </div>


            </section>



          </div>



        </div>


      </main>


    </ProtectedRoute>

  );

}





function Card({

  icon,
  value,
  label,
  color,

}: {

  icon: React.ReactNode;

  value: number;

  label: string;

  color:
  "blue" |
  "green" |
  "purple" |
  "orange" |
  "cyan" |
  "red";

}) {


  const colors = {


    blue:
      "bg-blue-100 text-blue-600",

    green:
      "bg-green-100 text-green-600",

    purple:
      "bg-purple-100 text-purple-600",

    orange:
      "bg-orange-100 text-orange-600",

    cyan:
      "bg-cyan-100 text-cyan-600",

    red:
      "bg-red-100 text-red-600",

  };




  return (

    <div

      className="
group
rounded-3xl
border
border-slate-200
bg-white
p-6
shadow-sm
transition
duration-300
hover:-translate-y-2
hover:shadow-xl
"

    >


      <div

        className={`
mb-5
flex
h-14
w-14
items-center
justify-center
rounded-2xl
${colors[color]}
transition
group-hover:scale-110
`}
      >


        {icon}


      </div>



      <h3
        className="
text-3xl
font-extrabold
text-slate-900
"
      >
        {value}
      </h3>



      <p
        className="
mt-2
text-sm
font-medium
text-slate-500
"
      >
        {label}
      </p>


    </div>


  );


}