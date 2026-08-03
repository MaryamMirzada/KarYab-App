"use client";

import { Search, X } from "lucide-react";


type Props = {

  search: string;

  setSearch: (value: string) => void;

};



export default function SearchFilter({

  search,

  setSearch,

}: Props) {



  return (


    <section

      aria-label="Search opportunities"

      className="
mb-10
"

    >



      <div

        className="
relative
"

      >


        {/* Search Icon */}

        <Search

          size={22}

          className="
absolute
left-5
top-1/2
-translate-y-1/2
text-blue-500
"

        />




        <input


          type="search"


          value={search}


          onChange={(e) =>
            setSearch(e.target.value)
          }


          placeholder="Search by title or organization..."


          autoComplete="off"



          className="

w-full

rounded-2xl

border

border-blue-100

bg-white

py-4

pl-14

pr-14

text-base

font-medium

text-slate-800

shadow-sm

outline-none

transition-all

duration-300


placeholder:text-slate-400


hover:border-blue-300


focus:border-blue-500

focus:ring-4

focus:ring-blue-100

"




        />






        {


          search && (


            <button


              type="button"


              onClick={() =>
                setSearch("")
              }



              className="

absolute

right-4

top-1/2

-translate-y-1/2


flex

h-9

w-9

items-center

justify-center


rounded-full


bg-slate-100


text-slate-500


transition


hover:bg-red-50


hover:text-red-500


"


            >


              <X size={18} />


            </button>


          )


        }





      </div>




    </section>


  );


}