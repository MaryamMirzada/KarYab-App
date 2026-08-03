"use client";

import {
    useState
} from "react";

import {
    useRouter
} from "next/navigation";

import {
    Link
} from "lucide-react";

import {
    useAuth
} from "@/context/AuthContext";



export default function SignupPage() {


    const router = useRouter();

    const { signup } = useAuth();



    const [name, setName] =
        useState("");

    const [email, setEmail] =
        useState("");

    const [password, setPassword] =
        useState("");





    function handleSubmit(
        e: React.FormEvent
    ) {

        e.preventDefault();


        signup(
            name.trim(),
            email.trim(),
            password.trim()
        );


        router.push("/dashboard");


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

                    Create Account

                </h1>




                <div

                    className="
space-y-5
"

                >


                    <input


                        placeholder="Full Name"


                        value={name}


                        onChange={(e) =>
                            setName(e.target.value)
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


                        placeholder="Email"


                        type="email"


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


                        placeholder="Password"


                        type="password"


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


                        Sign Up


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

                    Already have an account?


                    <a

                        href="/login"

                        className="
ml-2
font-semibold
text-blue-600
hover:text-blue-700
hover:underline
"

                    >

                        Login

                    </a>


                </p>



            </form>


        </main>


    );


}