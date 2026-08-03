"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import {
  MapPin,
  Briefcase,
  Calendar,
  Building2,
  Pencil,
  Trash2,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";


import { opportunities as demoData } from "@/data/opportunities";

import {
  getStoredOpportunities,
  deleteOpportunity,
} from "@/lib/storage";


import { Opportunity } from "@/types/opportunity";



export default function OpportunityDetailsPage() {

  const params = useParams();

  const router = useRouter();

  const id = params.id as string;



  const [opportunity, setOpportunity] =
    useState<Opportunity | null>(null);


  const [loading, setLoading] =
    useState(true);



  useEffect(() => {


    const stored =
      getStoredOpportunities();


    const all = [
      ...demoData,
      ...stored,
    ];


    const found =
      all.find(
        (item) => item.id === id
      );


    setOpportunity(
      found ?? null
    );


    setLoading(false);



  }, [id]);




  function handleDelete() {


    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this opportunity?"
      );



    if (!confirmDelete)
      return;



    deleteOpportunity(id);


    router.push("/opportunities");


  }






  if (loading) {

    return (

      <main className="
flex
min-h-[60vh]
items-center
justify-center
">

        <p className="
text-xl
font-semibold
text-blue-600
">

          Loading opportunity...

        </p>


      </main>

    )

  }






  if (!opportunity) {

    return (

      <main

        className="
mx-auto
max-w-5xl
px-6
py-20
"

      >


        <h1

          className="
text-4xl
font-extrabold
text-slate-900
"

        >

          Opportunity not found

        </h1>



        <Link

          href="/opportunities"

          className="
mt-6
inline-flex
items-center
gap-2
text-blue-600
font-semibold
hover:underline
"

        >

          <ArrowLeft size={18} />

          Back to Opportunities

        </Link>


      </main>

    )

  }







  return (

    <main

      className="
mx-auto
max-w-6xl
px-6
py-16
"

    >


      <Link

        href="/opportunities"

        className="
mb-8
inline-flex
items-center
gap-2
font-semibold
text-blue-600
hover:underline
"

      >

        <ArrowLeft size={18} />

        Back to Opportunities

      </Link>






      <section

        className="
rounded-3xl
border
border-blue-100
bg-white
p-8
shadow-xl
"

      >





        <div

          className="
flex
flex-col
gap-8
md:flex-row
md:justify-between
"

        >



          <div>


            <span

              className="
inline-flex
rounded-full
bg-blue-50
px-4
py-2
text-sm
font-semibold
text-blue-600
"

            >

              {opportunity.category}

            </span>





            <h1

              className="
mt-5
text-4xl
font-extrabold
text-slate-900
"

            >

              {opportunity.title}

            </h1>




            <div

              className="
mt-4
flex
items-center
gap-2
text-slate-500
"

            >

              <Building2 size={20} />

              {opportunity.organization}

            </div>



          </div>







          <div

            className="
flex
gap-3
"

          >


            <Link

              href={`/edit/${opportunity.id}`}

              className="
flex
items-center
gap-2
rounded-xl
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
"

            >


              <Pencil size={18} />

              Edit

            </Link>





            <button

              onClick={handleDelete}

              className="
flex
items-center
gap-2
rounded-xl
bg-red-500
px-5
py-3
font-semibold
text-white
transition
hover:bg-red-600
"

            >


              <Trash2 size={18} />

              Delete

            </button>



          </div>



        </div>









        <div

          className="
mt-10
grid
gap-5
md:grid-cols-3
"

        >


          <Info

            icon={<MapPin />}

            label="Location"

            value={opportunity.location}

          />


          <Info

            icon={<Briefcase />}

            label="Type"

            value={opportunity.type}

          />


          <Info

            icon={<Calendar />}

            label="Deadline"

            value={
              new Date(
                opportunity.deadline
              ).toLocaleDateString(
                "en-US",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric"
                }
              )
            }

          />


        </div>









        <div

          className="
mt-10
rounded-3xl
bg-blue-50
p-8
"

        >


          <h2

            className="
text-2xl
font-bold
text-slate-900
"

          >

            Description

          </h2>



          <p

            className="
mt-4
leading-8
text-slate-600
"

          >

            {opportunity.description}

          </p>



        </div>










        <div

          className="
mt-10
"

        >


          <h2

            className="
mb-5
text-2xl
font-bold
text-slate-900
"

          >

            Requirements

          </h2>



          <div

            className="
space-y-3
"

          >


            {

              opportunity.requirements.map(

                (item, index) => (


                  <div

                    key={index}

                    className="
flex
items-center
gap-3
rounded-xl
bg-green-50
p-4
text-slate-700
"

                  >

                    <CheckCircle2

                      className="
text-green-600
"

                    />


                    {item}


                  </div>


                )

              )

            }


          </div>


        </div>







        <div

          className="
mt-10
"

        >


          <h2

            className="
mb-4
text-2xl
font-bold
"

          >

            Tags

          </h2>



          <div

            className="
flex
flex-wrap
gap-3
"

          >


            {

              opportunity.tags.map(

                (tag) => (


                  <span

                    key={tag}

                    className="
rounded-full
bg-blue-100
px-4
py-2
font-medium
text-blue-600
"

                  >

                    #{tag}

                  </span>


                )

              )

            }


          </div>


        </div>






        <a

          href={opportunity.applyLink}

          target="_blank"

          className="
mt-10
inline-flex
rounded-xl
bg-blue-600
px-8
py-4
font-bold
text-white
shadow-lg
shadow-blue-200
transition
hover:-translate-y-1
hover:bg-blue-700
"

        >

          Apply Now

        </a>




      </section>


    </main>


  )

}





function Info({

  icon,
  label,
  value,

}: {

  icon: React.ReactNode;

  label: string;

  value: string;

}) {


  return (

    <div

      className="
rounded-2xl
border
border-blue-100
bg-white
p-5
shadow-sm
"

    >


      <div

        className="
mb-3
flex
items-center
gap-3
text-blue-600
"

      >

        {icon}

        <span

          className="
font-semibold
"

        >

          {label}

        </span>


      </div>



      <p

        className="
text-slate-600
"

      >

        {value}

      </p>



    </div>


  )

}