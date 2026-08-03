"use client";

const categories = [
  "All",
  "Job",
  "Internship",
  "Scholarship",
  "Remote Work",
  "Training",
  "Volunteer",
  "Online Course",
];

type Props = {
  selected: string;
  setSelected: (value: string) => void;
};

export default function CategoryFilter({
  selected,
  setSelected,
}: Props) {

  return (
    <section
      className="
      mb-10
      rounded-3xl
      border
      border-slate-200
      bg-white
      p-6
      shadow-lg
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
          font-extrabold
          text-slate-900
          "
        >
          Category Filter
        </h2>


        <span
          className="
          rounded-full
          bg-blue-50
          px-4
          py-1.5
          text-sm
          font-semibold
          text-blue-600
          "
        >
          {categories.length} Categories
        </span>


      </div>




      <div
        className="
        flex
        flex-wrap
        gap-3
        "
      >

        {
          categories.map((category) => {

            const active =
              selected === category;


            return (

              <button

                key={category}

                type="button"

                onClick={() =>
                  setSelected(category)
                }

                className={`
                rounded-full
                border
                px-5
                py-2.5
                text-sm
                font-semibold
                transition-all
                duration-300

                ${active

                    ?

                    `
                  border-blue-600
                  bg-blue-600
                  text-white
                  shadow-lg
                  shadow-blue-200
                  scale-105
                  `

                    :

                    `
                  border-slate-200
                  bg-slate-50
                  text-slate-600
                  hover:border-blue-300
                  hover:bg-blue-50
                  hover:text-blue-600
                  `
                  }

                `}

              >

                {category}

              </button>

            )

          })
        }


      </div>


    </section>
  );
}