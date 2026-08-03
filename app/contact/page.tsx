"use client";

import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";


export default function ContactPage() {


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



        {/* Header */}

        <div
          className="
mb-14
text-center
"
        >


          <h1
            className="
text-5xl
font-extrabold
text-slate-900
"
          >
            Contact Us
          </h1>


          <p
            className="
mt-4
text-lg
text-slate-500
"
          >
            Have questions? We would love to hear from you.
          </p>


        </div>





        <div
          className="
grid
gap-10
lg:grid-cols-2
"
        >





          {/* Contact Information */}


          <section

            className="
rounded-3xl
border
border-slate-200
bg-white
p-8
shadow-xl
transition
hover:-translate-y-1
hover:shadow-2xl
"

          >


            <div
              className="
mb-8
flex
items-center
gap-3
"
            >


              <div
                className="
rounded-2xl
bg-blue-100
p-3
text-blue-600
"
              >

                <Send
                  className="h-6 w-6"
                />

              </div>



              <h2
                className="
text-2xl
font-bold
text-slate-900
"
              >
                Get in Touch
              </h2>


            </div>




            <div
              className="
space-y-6
"
            >



              <ContactItem

                icon={<Mail />}

                title="Email"

                value="info@kaaryab.af"

                color="blue"

              />



              <ContactItem

                icon={<Phone />}

                title="Phone"

                value="+93 700 000 000"

                color="green"

              />




              <ContactItem

                icon={<MapPin />}

                title="Location"

                value="Kabul, Afghanistan"

                color="orange"

              />



            </div>


          </section>







          {/* Contact Form */}


          <form

            className="
rounded-3xl
border
border-slate-200
bg-white
p-8
shadow-xl
transition
hover:-translate-y-1
hover:shadow-2xl
"

          >


            <h2

              className="
mb-8
text-2xl
font-bold
text-slate-900
"

            >
              Send Message
            </h2>




            <div
              className="
space-y-5
"
            >


              <input

                type="text"

                placeholder="Your Name"

                className="
w-full
rounded-xl
border
border-slate-300
bg-white
px-4
py-3
text-slate-900
placeholder:text-slate-400
outline-none
transition
focus:border-blue-500
focus:ring-4
focus:ring-blue-100
"

              />



              <input

                type="email"

                placeholder="Email Address"

                className="
w-full
rounded-xl
border
border-slate-300
bg-white
px-4
py-3
text-slate-900
placeholder:text-slate-400
outline-none
transition
focus:border-blue-500
focus:ring-4
focus:ring-blue-100
"

              />




              <input

                type="text"

                placeholder="Subject"

                className="
w-full
rounded-xl
border
border-slate-300
bg-white
px-4
py-3
text-slate-900
placeholder:text-slate-400
outline-none
transition
focus:border-blue-500
focus:ring-4
focus:ring-blue-100
"

              />





              <textarea

                rows={6}

                placeholder="Your Message"

                className="
w-full
rounded-xl
border
border-slate-300
bg-white
px-4
py-3
text-slate-900
placeholder:text-slate-400
outline-none
resize-none
transition
focus:border-blue-500
focus:ring-4
focus:ring-blue-100
"

              />





              <button

                type="submit"

                className="
flex
w-full
items-center
justify-center
gap-3
rounded-xl
bg-blue-600
py-4
text-lg
font-bold
text-white
transition-all
duration-300
hover:bg-blue-700
hover:shadow-lg
active:scale-95
"

              >

                <Send
                  className="h-5 w-5"
                />

                Send Message


              </button>


            </div>


          </form>





        </div>


      </div>


    </main>


  );

}







function ContactItem({

  icon,
  title,
  value,
  color,

}: {

  icon: React.ReactNode;

  title: string;

  value: string;

  color:
  "blue" |
  "green" |
  "orange";

}) {


  const colors = {

    blue:
      "bg-blue-100 text-blue-600",

    green:
      "bg-green-100 text-green-600",

    orange:
      "bg-orange-100 text-orange-600",

  };



  return (

    <div

      className="
flex
items-center
gap-5
rounded-2xl
border
border-slate-100
bg-slate-50
p-4
transition
hover:bg-blue-50
"

    >


      <div

        className={`
rounded-2xl
p-3
${colors[color]}
`}

      >

        {icon}

      </div>




      <div>

        <p

          className="
text-sm
font-medium
text-slate-500
"

        >
          {title}
        </p>


        <p

          className="
mt-1
font-bold
text-slate-900
"

        >
          {value}
        </p>


      </div>



    </div>

  );


}