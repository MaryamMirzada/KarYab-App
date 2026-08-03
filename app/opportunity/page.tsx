import OpportunityForm from "@/components/opportunity/OpportunityForm";


export default function AddOpportunityPage() {


  return (

    <main
      className="
        min-h-screen
        bg-slate-950
        px-6
        py-20
      "
    >


      <div
        className="
          mx-auto
          max-w-5xl
        "
      >


        <section
          className="
            mb-12
            rounded-3xl
            border
            border-white/10
            bg-gradient-to-r
            from-blue-600
            to-indigo-600
            p-10
            text-white
            shadow-2xl
          "
        >


          <h1
            className="
              text-4xl
              font-extrabold
              md:text-5xl
            "
          >
            Add New Opportunity
          </h1>



          <p
            className="
              mt-4
              max-w-3xl
              text-lg
              text-blue-100
            "
          >
            Share a job, internship, scholarship,
            training program, online course,
            or volunteer opportunity with the
            KaarYab community.
          </p>



          <p
            className="
              mt-4
              text-sm
              text-blue-200
            "
          >
            All submitted opportunities are stored
            securely in your browser for demo purposes.
          </p>


        </section>





        <section>

          <OpportunityForm />

        </section>



      </div>


    </main>

  );

}