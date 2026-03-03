"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function MastersPage() {
  return (
    <>
      {/* ── HERO (compact) ── */}
      <section
        className="relative overflow-hidden"
        style={{ height: "55vh", minHeight: "380px" }}
      >
        <Image
          src="/assets/master_hero.jpg"
          alt="PG students"
          fill
          priority
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(30,8,18,0.88) 0%, rgba(97,34,59,0.4) 55%, rgba(0,0,0,0.1) 100%)",
          }}
        />
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="container-narrow mx-auto px-6 pb-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
            >
              <nav
                className="flex items-center gap-2 text-sm font-bold mb-5"
                style={{
                  color: "rgba(255,255,255,0.7)",
                  textShadow: "0 1px 4px rgba(0,0,0,0.5)",
                }}
              >
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <span style={{ color: "rgba(202,162,88,0.7)" }}>/</span>
                <Link
                  href="/teaching"
                  className="hover:text-white transition-colors"
                >
                  Study
                </Link>
                <span style={{ color: "rgba(202,162,88,0.7)" }}>/</span>
                <Link
                  href="/teaching/PG"
                  className="hover:text-white transition-colors"
                >
                  Postgraduate
                </Link>
                <span style={{ color: "rgba(202,162,88,0.7)" }}>/</span>
                <span style={{ color: "#caa258" }}>Masters</span>
              </nav>
              <div className="flex items-center gap-4 mb-3"></div>
              <h1
                className="text-4xl md:text-6xl font-black text-white leading-tight"
                style={{
                  color: "#caa258",
                  fontFamily: "SU Raleway, sans-serif",
                }}
              >
                Masters in
                <br />
                <span style={{ color: "#caa258" }}>Computer Science</span>
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section
        id="masters-overview"
        className="bg-white"
        style={{
          paddingTop: "4rem",
          paddingBottom: "4rem",
          scrollMarginTop: "80px",
        }}
      >
        <div className="container-narrow mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span
                className="block font-bold uppercase tracking-widest mb-4"
                style={{ color: "#caa258", fontSize: "0.875rem" }}
              >
                Overview
              </span>
              <h2
                className="text-3xl md:text-4xl font-black mb-6"
                style={{
                  color: "#61223b",
                  fontFamily: "SU Raleway, sans-serif",
                }}
              >
                About the Programme
              </h2>
              <div
                className="flex flex-col text-base leading-relaxed"
                style={{ color: "#4a4847", gap: "1.25rem" }}
              >
                <p>
                  Our Masters degree is a{" "}
                  <strong style={{ color: "#61223b" }}>
                    two-year programme based on thesis work
                  </strong>
                  . The goal is to teach students how to evaluate and conduct
                  world-class research, and become a master in their field!
                  While the work is not required to be original cutting-edge
                  research, it often is. The reading, writing, and critical
                  thinking skills acquired during the Masters degree are also
                  much sought-after in industry, and most of our Masters
                  graduates who do not carry on with a Doctoral degree, go on to
                  have successful careers in the local industry and also abroad.
                </p>
                <p>
                  You need the agreement of a staff member that will supervise
                  your Masters thesis. Browse through our{" "}
                  <Link
                    href="/research"
                    className="font-semibold underline underline-offset-2 transition-colors hover:opacity-75"
                    style={{
                      color: "#caa258",
                      textDecorationColor: "rgba(202,162,88,0.5)",
                    }}
                  >
                    Research pages
                  </Link>{" "}
                  and read more about the kind of work we do. You can also look
                  at our staff&apos;s publications to get an idea of the kind of
                  topics they are interested in. If you have found an area of
                  our research that interests you, contact the responsible staff
                  member to discuss potential topics. It is not essential to
                  agree on a specific topic before you apply, but it is very
                  important to obtain the staff member&apos;s agreement to be
                  your supervisor. If at all possible, make an appointment for a
                  face-to-face meeting.
                </p>
                <p>
                  The admission requirements for a Masters in Computer Science
                  is an{" "}
                  <strong style={{ color: "#61223b" }}>
                    Honours degree in Computer Science
                  </strong>{" "}
                  or an approved equivalent qualification. Additional background
                  or supplementary studies may be required, as determined by
                  your supervisor(s) on a case-by-case basis. Further
                  information, including application procedures and a FAQ, is
                  available on our page for{" "}
                  <Link
                    href="/teaching/prospectivePG"
                    className="font-semibold underline underline-offset-2 transition-colors hover:opacity-75"
                    style={{
                      color: "#caa258",
                      textDecorationColor: "rgba(202,162,88,0.5)",
                    }}
                  >
                    Prospective postgraduate students
                  </Link>
                  .
                </p>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="relative rounded-2xl overflow-hidden"
              style={{ height: "460px" }}
            >
              <Image
                src="/assets/master_image.jpg"
                alt="students working"
                fill
                className="object-cover object-center"
              />
              <div
                className="absolute bottom-0 left-0 right-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(30,8,18,0.65) 0%, transparent 100%)",
                  padding: "1.5rem",
                }}
              ></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <section
        className="bg-[#faf8f5]"
        style={{ paddingTop: "0.9rem", paddingBottom: "2rem" }}
      >
        <div className="container-narrow mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/teaching/prospectivePG"
                className="inline-flex items-center gap-2 font-bold rounded-xl transition-all duration-150 hover:opacity-85 hover:shadow-lg"
                style={{
                  background: "#61223b",
                  color: "#caa258",
                  padding: "0.9rem 2rem",
                  fontFamily: "SU Raleway, sans-serif",
                }}
              >
                Prospective Postgraduate Students{" "}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/teaching/PG"
                className="inline-flex items-center gap-2 font-bold rounded-xl transition-all duration-150 hover:shadow-md"
                style={{
                  background: "white",
                  color: "#61223b",
                  border: "1.5px solid rgba(97,34,59,0.18)",
                  padding: "0.9rem 2rem",
                  fontFamily: "SU Raleway, sans-serif",
                }}
              >
                All Postgraduate Programmes
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
