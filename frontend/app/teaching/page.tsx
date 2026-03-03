import PageBanner from "@/components/ui/PageBanner";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { programmes } from "@/data/programmes";
import {
  GraduationCap,
  BookOpen,
  Award,
  Microscope,
  ArrowRight,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teaching",
  description:
    "Academic programmes offered by the Computer Science Department at Stellenbosch University.",
};

const levelIcons = {
  undergraduate: <GraduationCap className="w-6 h-6" />,
  honours: <BookOpen className="w-6 h-6" />,
  masters: <Award className="w-6 h-6" />,
  phd: <Microscope className="w-6 h-6" />,
};

export default function TeachingPage() {
  return (
    <>
      <PageBanner
        title="Teaching & Programmes"
        description="Comprehensive computer science education from undergraduate to doctoral level, preparing students for industry and research careers."
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Teaching" }]}
      />

      {/* Programme overview */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <SectionHeading
            title="Our Programmes"
            subtitle="We offer a full range of programmes designed to equip students with the knowledge and skills needed for success in the computing field."
            centered
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programmes.map((prog) => (
              <div
                key={prog.id}
                className="bg-white rounded-2xl border border-border p-6 card-hover group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-maroon/5 flex items-center justify-center text-maroon group-hover:bg-maroon/10 transition-colors">
                    {levelIcons[prog.level]}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gold-dark uppercase tracking-wider">
                      {prog.level} · {prog.duration}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-maroon mb-2">
                  {prog.name}
                </h3>
                <p className="text-sm text-body-light leading-relaxed mb-4">
                  {prog.description}
                </p>
                <div className="mb-4">
                  <h4 className="text-xs font-bold text-maroon/70 uppercase tracking-wider mb-2">
                    Highlights
                  </h4>
                  <ul className="space-y-1">
                    {prog.highlights.slice(0, 3).map((h) => (
                      <li
                        key={h}
                        className="text-sm text-body-light flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-maroon/70 uppercase tracking-wider mb-2">
                    Career Paths
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {prog.careers.slice(0, 3).map((c) => (
                      <span
                        key={c}
                        className="px-2 py-0.5 bg-maroon/5 text-maroon text-xs font-medium rounded-full"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick navigation */}
      <section className="section-padding bg-bg-warm">
        <div className="container-narrow mx-auto">
          <SectionHeading
            title="Programme Information"
            subtitle="Detailed information for current and prospective students."
            centered
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card
              title="Undergraduate"
              description="BSc Computer Science and BSc Data Science programme details."
              href="/teaching/UG"
              icon={<GraduationCap className="w-6 h-6" />}
            />
            <Card
              title="Postgraduate"
              description="Honours, Masters, and PhD programme information."
              href="/teaching/PG"
              icon={<BookOpen className="w-6 h-6" />}
            />
            <Card
              title="Prospective UG"
              description="Information for prospective undergraduate students."
              href="/teaching/prospectiveUG"
              icon={<ArrowRight className="w-6 h-6" />}
            />
            <Card
              title="Prospective PG"
              description="Information for prospective postgraduate students."
              href="/teaching/prospectivePG"
              icon={<ArrowRight className="w-6 h-6" />}
            />
          </div>
        </div>
      </section>
    </>
  );
}
