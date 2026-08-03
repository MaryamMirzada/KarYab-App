"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { addOpportunity } from "@/lib/storage";

import {
  opportunitySchema,
  OpportunityFormData,
} from "@/lib/validation";


const text = {

  heading: "Post a New Opportunity",

  title: "Title",
  organization: "Organization",
  category: "Category",
  location: "Location",
  type: "Type",
  deadline: "Deadline",
  description: "Description",
  requirements: "Requirements",
  tags: "Tags",
  applyLink: "Apply Link",

  submit: "Add Opportunity",
  loading: "Saving...",

  success:
    "✅ Opportunity Added Successfully!",

  error:
    "Something went wrong. Try again.",


  selectCategory:
    "Select Category",

  selectType:
    "Select Type",


  categories: [
    "Job",
    "Internship",
    "Scholarship",
    "Remote Work",
    "Training",
    "Volunteer",
    "Online Course",
  ],


  types: [
    "Remote",
    "On-site",
    "Hybrid",
  ],


  placeholders: {

    title:
      "Frontend Developer Internship",

    organization:
      "Google",

    location:
      "Kabul / Remote",

    description:
      "Describe the opportunity...",


    requirements:
      "React, Next.js, Git",


    tags:
      "React, Next.js, Frontend",


    applyLink:
      "https://example.com/apply",

  }

};



export default function OpportunityForm() {


  const [success, setSuccess] = useState(false);

  const [error, setError] = useState(false);



  const {

    register,

    handleSubmit,

    reset,

    formState: {
      errors,
      isSubmitting,
    }

  } = useForm<OpportunityFormData>({

    resolver:
      zodResolver(opportunitySchema)

  });




  async function onSubmit(
    data: OpportunityFormData
  ) {


    try {


      const newOpportunity = {


        id:
          crypto.randomUUID(),


        title:
          data.title,


        organization:
          data.organization,


        category:
          data.category,


        location:
          data.location,


        type:
          data.type,


        deadline:
          data.deadline,


        description:
          data.description,


        requirements:
          data.requirements
            .split(",")
            .map(
              item => item.trim()
            ),


        tags:
          data.tags
            .split(",")
            .map(
              tag => tag.trim()
            ),


        applyLink:
          data.applyLink,


        featured: false,


      };



      addOpportunity(
        newOpportunity
      );



      setSuccess(true);

      setError(false);


      reset();



      setTimeout(() => {

        setSuccess(false);

      }, 3000);



    }
    catch {


      setError(true);

      setSuccess(false);


    }


  }





  return (

    <form

      onSubmit={
        handleSubmit(onSubmit)
      }

      className="
mx-auto
max-w-5xl
space-y-8
rounded-3xl
border
border-white/10
bg-slate-950
p-8
shadow-2xl
"

    >



      <div>

        <h1
          className="
text-3xl
font-bold
text-white
"
        >

          {text.heading}

        </h1>


        <p
          className="
mt-3
text-slate-400
"
        >
          Create and share new opportunities with KaarYab community.
        </p>


      </div>




      {
        success && (

          <div
            className="
rounded-xl
border
border-green-500/30
bg-green-500/10
p-4
text-green-400
"
          >
            {text.success}
          </div>

        )
      }




      {
        error && (

          <div
            className="
rounded-xl
border
border-red-500/30
bg-red-500/10
p-4
text-red-400
"
          >
            {text.error}
          </div>

        )

      }




      <div
        className="
grid
gap-6
md:grid-cols-2
"
      >


        {/* Title */}

        <input

          placeholder={text.placeholders.title}

          {...register("title")}

          className="
input-style
"

        />


        {/* Organization */}

        <input

          placeholder={text.placeholders.organization}

          {...register("organization")}

          className="
input-style
"

        />




        {/* Category */}

        <select

          {...register("category")}

          className="
input-style
"

        >

          <option value="">
            {text.selectCategory}
          </option>


          {
            text.categories.map(item => (

              <option
                key={item}
                value={item}
              >
                {item}
              </option>

            ))
          }


        </select>





        {/* Location */}

        <input

          placeholder={text.placeholders.location}

          {...register("location")}

          className="
input-style
"

        />




        {/* Type */}

        <select

          {...register("type")}

          className="
input-style
"

        >

          <option value="">
            {text.selectType}
          </option>


          {
            text.types.map(item => (

              <option
                key={item}
                value={item}
              >
                {item}
              </option>

            ))
          }


        </select>





        {/* Deadline */}

        <input

          type="date"

          {...register("deadline")}

          className="
input-style
"

        />



      </div>





      {/* Description */}

      <textarea

        rows={5}

        placeholder={
          text.placeholders.description
        }

        {...register("description")}

        className="
input-style
resize-none
"

      />





      {/* Requirements */}

      <textarea

        rows={4}

        placeholder={
          text.placeholders.requirements
        }

        {...register("requirements")}

        className="
input-style
resize-none
"

      />





      {/* Tags */}

      <input

        placeholder={
          text.placeholders.tags
        }

        {...register("tags")}

        className="
input-style
"

      />





      {/* Apply Link */}

      <input

        type="url"

        placeholder={
          text.placeholders.applyLink
        }

        {...register("applyLink")}

        className="
input-style
"

      />





      <button

        disabled={isSubmitting}

        type="submit"

        className="
w-full
rounded-xl
bg-[var(--primary-color)]
py-4
font-semibold
text-white
transition
hover:scale-[1.02]
hover:shadow-xl
disabled:opacity-50
"

      >

        {
          isSubmitting
            ?
            text.loading
            :
            text.submit
        }

      </button>




    </form>

  );


}