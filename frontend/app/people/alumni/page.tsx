import PageBanner from "@/components/ui/PageBanner";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Alumni" };

const notableAlumni = [
  {
    name: "Dr Sarah Jennings",
    role: "Senior Engineer, Google DeepMind",
    year: "2015",
    quote:
      "The rigorous training at Stellenbosch CS prepared me for the most challenging problems in AI.",
  },
  {
    name: "Mr Thabo Molefe",
    role: "CTO, AfriTech Solutions",
    year: "2012",
    quote:
      "The department gave me both the technical skills and the confidence to build a tech company from the ground up.",
  },
  {
    name: "Dr Anele Ngcobo",
    role: "Research Scientist, Microsoft Research",
    year: "2018",
    quote:
      "My postgraduate experience at SU was transformative – the research culture is truly world-class.",
  },
  {
    name: "Ms Lina de Villiers",
    role: "Data Science Lead, Discovery",
    year: "2016",
    quote:
      "Stellenbosch CS gave me a solid foundation in both theory and practice that I use every day.",
  },
];

export default function AlumniPage() {
  return (
    <>
      <PageBanner
        title="Alumni"
        description="Our graduates go on to distinguished careers in industry, academia, and entrepreneurship worldwide."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "People", href: "/people" },
          { name: "Alumni" },
        ]}
      />
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl font-bold text-maroon mb-4">
              Notable Alumni
            </h2>
            <p className="text-body-light leading-relaxed">
              Our alumni are making an impact across the globe, from leading
              tech companies to pioneering startups and world-renowned research
              labs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {notableAlumni.map((alumnus) => (
              <div
                key={alumnus.name}
                className="bg-white rounded-2xl border border-border p-6 card-hover"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-maroon/10 flex items-center justify-center">
                    <span className="text-lg font-bold text-maroon/40">
                      {alumnus.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-maroon">{alumnus.name}</h3>
                    <p className="text-sm text-gold-dark font-medium">
                      {alumnus.role}
                    </p>
                    <p className="text-xs text-body-light">
                      Class of {alumnus.year}
                    </p>
                  </div>
                </div>
                <blockquote className="text-sm text-body-light italic leading-relaxed border-l-2 border-gold/30 pl-4">
                  &ldquo;{alumnus.quote}&rdquo;
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
