"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/context/AuthContext";


export default function LoginPage() {


  const router = useRouter();

  const { login } = useAuth();



  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");



  function handleSubmit(
    e: React.FormEvent
  ) {

    e.preventDefault();

    setError("");


    const success =
      login(
        email.trim(),
        password.trim()
      );



    if (success) {

      router.push("/dashboard");

    } else {

      setError(
        "Invalid email or password"
      );

    }

  }



  return (

    <main

      className="
min-h-screen
flex
items-center
justify-center
bg-gradient-to-br
from-white
via-blue-50
to-slate-100
px-6
"

    >


      <form

        onSubmit={handleSubmit}


        className="
w-full
max-w-md
rounded-3xl
border
border-slate-200
bg-white/90
p-8
shadow-[0_20px_60px_rgba(37,99,235,0.12)]
backdrop-blur-xl
"

      >


        <h1

          className="
mb-8
text-center
text-4xl
font-extrabold
text-slate-900
"

        >

          Login

        </h1>



        {
          error &&

          <div

            className="
mb-5
rounded-xl
border
border-red-200
bg-red-50
p-3
text-center
text-sm
text-red-600
"

          >

            {error}

          </div>

        }




        <div

          className="
space-y-5
"

        >


          <input

            type="email"

            placeholder="Email"

            value={email}

            onChange={(e) =>
              setEmail(e.target.value)
            }

            required


            className="
w-full
rounded-xl
border
border-slate-200
bg-white
px-4
py-3
text-slate-900
outline-none
transition

placeholder:text-slate-400

focus:border-blue-500

focus:ring-4

focus:ring-blue-100

"

          />



          <input

            type="password"

            placeholder="Password"

            value={password}

            onChange={(e) =>
              setPassword(e.target.value)
            }

            required


            className="
w-full
rounded-xl
border
border-slate-200
bg-white
px-4
py-3
text-slate-900
outline-none
transition

placeholder:text-slate-400

focus:border-blue-500

focus:ring-4

focus:ring-blue-100

"

          />





          <button

            type="submit"

            className="
w-full
rounded-xl
bg-blue-600
py-3.5
font-semibold
text-white
transition-all
duration-300

hover:bg-blue-700

hover:shadow-lg

hover:shadow-blue-500/30

"

          >

            Login


          </button>


        </div>




        <p

          className="
mt-7
text-center
text-sm
text-slate-500
"

        >

          Don't have an account?


          <Link

            href="/signup"

            className="
ml-2
font-semibold
text-blue-600
hover:text-blue-700
hover:underline
"

          >

            Sign Up

          </Link>


        </p>



      </form>


    </main>


  );


}