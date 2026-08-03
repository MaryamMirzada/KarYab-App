"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

import { useAuth } from "@/context/AuthContext";


export default function Navbar() {

  const { user, logout } = useAuth();

  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);



  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Opportunities",
      href: "/opportunities",
    },
    {
      name: "Saved",
      href: "/saved",
    },
    {
      name: "Dashboard",
      href: "/dashboard",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];



  const closeMenu = () => {
    setIsOpen(false);
  };



  return (

    <header
      className="
      sticky
      top-0
      z-50
      border-b
      border-blue-100
      bg-white/90
      backdrop-blur-xl
      shadow-sm
      "
    >


      <div
        className="
        mx-auto
        flex
        h-20
        max-w-7xl
        items-center
        justify-between
        px-5
        sm:px-6
        "
      >



        {/* Logo */}

        <Link
          href="/"
          onClick={closeMenu}
          className="
          flex
          items-center
          gap-3
          "
        >

          <Image

            src="/home/logo.png"

            alt="KaarYab Logo"

            width={45}

            height={45}

            className="
            rounded-xl
            object-contain
            "
          />



          <div
            className="
            text-2xl
            sm:text-3xl
            font-extrabold
            tracking-tight
            "
          >

            <span
              className="
              text-blue-600
              "
            >
              Kaar
            </span>


            <span
              className="
              text-slate-800
              "
            >
              Yab
            </span>


          </div>


        </Link>





        {/* Desktop Navigation */}

        <nav
          className="
          hidden
          items-center
          gap-7
          lg:flex
          "
        >

          {
            links.map((link) => {


              const active =
                pathname === link.href;


              return (

                <Link

                  key={link.href}

                  href={link.href}

                  className={`
                  relative
                  py-2
                  text-sm
                  font-semibold
                  transition-all

                  ${active
                      ?
                      "text-blue-600"
                      :
                      "text-slate-600 hover:text-blue-600"
                    }
                  `}
                >

                  {link.name}


                  {
                    active && (

                      <span
                        className="
                        absolute
                        bottom-0
                        left-0
                        h-[3px]
                        w-full
                        rounded-full
                        bg-blue-600
                        "
                      />

                    )
                  }


                </Link>

              )

            })
          }


        </nav>





        {/* Desktop Actions */}

        <div
          className="
          hidden
          items-center
          gap-3
          lg:flex
          "
        >

          {
            user ?

              (

                <>

                  <Link
                    href="/add-opportunity"
                    className="
                  rounded-xl
                  bg-blue-600
                  px-5
                  py-2.5
                  font-semibold
                  text-white
                  shadow-md
                  shadow-blue-200
                  transition
                  hover:-translate-y-0.5
                  hover:bg-blue-700
                  "
                  >
                    Post Opportunity
                  </Link>



                  <button

                    onClick={logout}

                    className="
                  rounded-xl
                  border
                  border-red-200
                  bg-red-50
                  px-5
                  py-2.5
                  font-semibold
                  text-red-600
                  transition
                  hover:bg-red-100
                  "
                  >

                    Logout

                  </button>


                </>


              )


              :


              (

                <>

                  <Link
                    href="/login"
                    className="
                  rounded-xl
                  border
                  border-blue-200
                  px-5
                  py-2.5
                  font-semibold
                  text-blue-600
                  transition
                  hover:bg-blue-50
                  "
                  >

                    Login

                  </Link>



                  <Link

                    href="/signup"

                    className="
                  rounded-xl
                  bg-blue-600
                  px-5
                  py-2.5
                  font-semibold
                  text-white
                  shadow-md
                  shadow-blue-200
                  transition
                  hover:bg-blue-700
                  "
                  >

                    Sign Up

                  </Link>


                </>

              )

          }


        </div>





        {/* Burger Button */}

        <button

          type="button"

          onClick={() => setIsOpen(!isOpen)}

          className="
          rounded-xl
          border
          border-blue-100
          bg-blue-50
          p-2.5
          text-blue-600
          transition
          hover:bg-blue-100
          lg:hidden
          "

        >

          {
            isOpen

              ?

              <X className="h-6 w-6" />

              :

              <Menu className="h-6 w-6" />

          }


        </button>


      </div>





      {/* Mobile Menu */}

      {
        isOpen && (

          <div
            className="
            border-t
            border-blue-100
            bg-white
            lg:hidden
            "
          >


            <div
              className="
              flex
              flex-col
              gap-3
              px-6
              py-6
              "
            >


              {
                links.map((link) => (

                  <Link

                    key={link.href}

                    href={link.href}

                    onClick={closeMenu}

                    className={`
                    rounded-xl
                    px-4
                    py-3
                    font-medium
                    transition

                    ${pathname === link.href

                        ?

                        "bg-blue-50 text-blue-600"

                        :

                        "text-slate-600 hover:bg-blue-50 hover:text-blue-600"

                      }

                    `}
                  >

                    {link.name}

                  </Link>

                ))
              }





              {
                user

                  ?

                  (

                    <button

                      onClick={() => {
                        logout();
                        closeMenu();
                      }}

                      className="
                    rounded-xl
                    border
                    border-red-200
                    bg-red-50
                    py-3
                    font-semibold
                    text-red-600
                    "
                    >

                      Logout

                    </button>

                  )


                  :


                  (

                    <Link

                      href="/login"

                      onClick={closeMenu}

                      className="
                    rounded-xl
                    bg-blue-600
                    py-3
                    text-center
                    font-semibold
                    text-white
                    "
                    >

                      Login

                    </Link>

                  )

              }



            </div>


          </div>

        )
      }



    </header>

  );
}