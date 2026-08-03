"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { useAuth } from "@/context/AuthContext";


export default function Navbar() {

  const { user, logout } = useAuth();

  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);


  const links = [
    { name: "Home", href: "/" },
    { name: "Opportunities", href: "/opportunities" },
    { name: "Saved", href: "/saved" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
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
        border-white/10
        bg-slate-950/90
        backdrop-blur-xl
        shadow-lg
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
          px-6
          lg:px-8
        "
      >


        {/* Logo */}

        <Link
          href="/"
          onClick={closeMenu}
          className="
            flex
            items-center
            text-3xl
            font-extrabold
            tracking-tight
          "
        >

          <span className="text-[var(--primary-color)]">
            Kaar
          </span>

          <span className="text-white">
            Yab
          </span>

        </Link>



        {/* Desktop Navigation */}

        <nav
          className="
            hidden
            items-center
            gap-8
            md:flex
          "
        >

          {links.map((link) => {

            const active = pathname === link.href;


            return (

              <Link
                key={link.href}
                href={link.href}
                className={`
                  relative
                  py-2
                  text-sm
                  font-medium
                  transition-all
                  duration-300

                  ${active
                    ?
                    "text-[var(--primary-color)]"
                    :
                    "text-slate-300 hover:text-white"
                  }
                `}
              >

                {link.name}


                {active && (

                  <span
                    className="
                      absolute
                      -bottom-1
                      left-0
                      h-[2px]
                      w-full
                      rounded-full
                      bg-[var(--primary-color)]
                    "
                  />

                )}

              </Link>

            );

          })}

        </nav>




        {/* Desktop Actions */}

        <div
          className="
            hidden
            items-center
            gap-4
            md:flex
          "
        >

          {user ? (

            <>

              <Link
                href="/add-opportunity"
                className="
                  rounded-xl
                  bg-[var(--primary-color)]
                  px-5
                  py-2.5
                  font-semibold
                  text-white
                  transition
                  hover:scale-105
                "
              >
                Post Opportunity
              </Link>


              <button
                onClick={logout}
                className="
                  rounded-xl
                  border
                  border-red-500/40
                  bg-red-500/10
                  px-5
                  py-2.5
                  font-semibold
                  text-red-400
                  transition
                  hover:bg-red-500/20
                "
              >
                Logout
              </button>

            </>

          ) : (

            <>

              <Link
                href="/login"
                className="
                  rounded-xl
                  border
                  border-white/20
                  bg-white/5
                  px-5
                  py-2.5
                  font-semibold
                  text-white
                  transition
                  hover:border-[var(--primary-color)]
                "
              >
                Login
              </Link>


              <Link
                href="/signup"
                className="
                  rounded-xl
                  bg-[var(--primary-color)]
                  px-5
                  py-2.5
                  font-semibold
                  text-white
                  transition
                  hover:scale-105
                "
              >
                Sign Up
              </Link>

            </>

          )}

        </div>




        {/* Mobile Button */}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="
            rounded-xl
            border
            border-white/10
            bg-white/5
            p-2.5
            text-white
            md:hidden
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
              border-white/10
              bg-slate-950
              md:hidden
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

              {links.map((link) => (

                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="
                    rounded-xl
                    px-4
                    py-3
                    text-slate-300
                    transition
                    hover:bg-white/5
                    hover:text-white
                  "
                >
                  {link.name}

                </Link>

              ))}


              {
                user ? (

                  <button
                    onClick={() => {
                      logout();
                      closeMenu();
                    }}
                    className="
                      rounded-xl
                      border
                      border-red-500/40
                      py-3
                      text-red-400
                    "
                  >
                    Logout
                  </button>

                ) : (

                  <Link
                    href="/login"
                    onClick={closeMenu}
                    className="
                      rounded-xl
                      bg-[var(--primary-color)]
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