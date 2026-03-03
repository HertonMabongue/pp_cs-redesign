"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Printer,
  Clock,
  Building2,
  ArrowRight,
} from "lucide-react";

const enquiryEmails = [
  { label: "Administrative enquiries", email: "secretary@cs.sun.ac.za" },
  { label: "Postgraduate enquiries", email: "postgrad@cs.sun.ac.za" },
  { label: "Undergraduate enquiries", email: "undergrad@cs.sun.ac.za" },
];

export default function ContactPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{ height: "55vh", minHeight: "380px" }}
      >
        <Image
          src="/assets/contact_hero.jpg"
          alt="Contact CS Stellenbosch"
          fill
          priority
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(30,8,18,0.92) 0%, rgba(97,34,59,0.5) 50%, rgba(0,0,0,0.15) 100%)",
          }}
        />
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="container-narrow mx-auto px-6 pb-14">
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
                <span style={{ color: "#caa258" }}>Contact</span>
              </nav>
              <h1
                className="text-4xl md:text-6xl font-black leading-tight mb-4"
                style={{
                  color: "#caa258",
                  fontFamily: "SU Raleway, sans-serif",
                }}
              >
                Contact Us
              </h1>
              <p
                className="text-base md:text-lg max-w-2xl"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                Reach out to the Computer Science Division at Stellenbosch
                University.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div style={{ background: "#faf8f5", paddingBottom: "0" }}>
        <div
          className="container-narrow mx-auto px-6"
          style={{ paddingTop: "4rem", paddingBottom: "4rem" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* ── LEFT COLUMN ── */}
            <div
              className="lg:col-span-3 flex flex-col"
              style={{ gap: "2.5rem" }}
            >
              {/* Quick contact row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    icon: Phone,
                    label: "Telephone",
                    value: "+27 21 808 4232",
                    href: "tel:+27218084232",
                  },
                  {
                    icon: Printer,
                    label: "Fax",
                    value: "+27 86 603 7130",
                    href: undefined,
                  },
                  {
                    icon: Clock,
                    label: "Office Hours",
                    value: "Mon – Fri: 08:00 – 16:30",
                    href: undefined,
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col rounded-2xl"
                    style={{
                      background: "white",
                      border: "1.5px solid rgba(97,34,59,0.10)",
                      padding: "1.25rem 1.4rem",
                    }}
                  >
                    <div
                      className="flex items-center justify-center rounded-xl mb-3 shrink-0"
                      style={{
                        width: "40px",
                        height: "40px",
                        background: "rgba(97,34,59,0.07)",
                      }}
                    >
                      <item.icon
                        className="w-5 h-5"
                        style={{ color: "#61223b" }}
                      />
                    </div>
                    <p
                      className="text-xs font-black uppercase tracking-widest mb-1"
                      style={{ color: "#caa258" }}
                    >
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-bold text-sm transition-colors hover:text-[#caa258]"
                        style={{ color: "#61223b" }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span
                        className="font-semibold text-sm"
                        style={{ color: "#4a4847" }}
                      >
                        {item.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Email enquiries */}
              <div
                className="rounded-2xl"
                style={{
                  background: "white",
                  border: "1.5px solid rgba(97,34,59,0.10)",
                  padding: "1.75rem",
                }}
              >
                <p
                  className="text-xs font-black uppercase tracking-widest mb-4"
                  style={{ color: "#caa258" }}
                >
                  Email Enquiries
                </p>
                <div className="flex flex-col" style={{ gap: "1rem" }}>
                  {enquiryEmails.map((e) => (
                    <div key={e.email} className="flex items-center gap-4">
                      <div
                        className="shrink-0 rounded-xl flex items-center justify-center"
                        style={{
                          width: "40px",
                          height: "40px",
                          background: "rgba(97,34,59,0.07)",
                        }}
                      >
                        <Mail
                          className="w-4 h-4"
                          style={{ color: "#61223b" }}
                        />
                      </div>
                      <div>
                        <p
                          className="text-xs font-semibold uppercase tracking-wide"
                          style={{ color: "#4a4847" }}
                        >
                          {e.label}
                        </p>
                        <a
                          href={`mailto:${e.email}`}
                          className="font-bold text-sm transition-colors hover:text-[#caa258]"
                          style={{ color: "#61223b" }}
                        >
                          {e.email}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Addresses */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div
                  className="rounded-2xl"
                  style={{
                    background: "white",
                    border: "1.5px solid rgba(97,34,59,0.10)",
                    padding: "1.5rem",
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin
                      className="w-4 h-4 shrink-0"
                      style={{ color: "#caa258" }}
                    />
                    <p
                      className="text-xs font-black uppercase tracking-widest"
                      style={{ color: "#caa258" }}
                    >
                      Physical Address
                    </p>
                  </div>
                  <p
                    className="text-sm leading-loose"
                    style={{ color: "#4a4847" }}
                  >
                    Computer Science Division
                    <br />
                    Stellenbosch University
                    <br />
                    Banghoek Road &amp; Joubert Street
                    <br />
                    Stellenbosch Central, 7600
                    <br />
                    South Africa
                  </p>
                  <a
                    href="https://maps.google.com/?q=Banghoek+Road+%26+Joubert+Street,+Stellenbosch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold mt-3 transition-colors hover:opacity-75"
                    style={{ color: "#61223b" }}
                  >
                    Open in Google Maps <ArrowRight className="w-3 h-3" />
                  </a>
                </div>

                <div
                  className="rounded-2xl"
                  style={{
                    background: "white",
                    border: "1.5px solid rgba(97,34,59,0.10)",
                    padding: "1.5rem",
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Building2
                      className="w-4 h-4 shrink-0"
                      style={{ color: "#caa258" }}
                    />
                    <p
                      className="text-xs font-black uppercase tracking-widest"
                      style={{ color: "#caa258" }}
                    >
                      Postal Address
                    </p>
                  </div>
                  <p
                    className="text-sm leading-loose"
                    style={{ color: "#4a4847" }}
                  >
                    Computer Science Division
                    <br />
                    Stellenbosch University
                    <br />
                    Private Bag X1
                    <br />
                    Stellenbosch, 7599
                    <br />
                    South Africa
                  </p>
                  <p
                    className="text-xs font-semibold mt-3"
                    style={{ color: "#a05020" }}
                  >
                    ⚠ The previous Matieland 7602 postal code is discontinued.
                  </p>
                </div>
              </div>

              {/* GPS */}
              <div
                className="rounded-2xl flex items-center gap-4"
                style={{
                  background: "white",
                  border: "1.5px solid rgba(97,34,59,0.10)",
                  padding: "1.25rem 1.5rem",
                }}
              >
                <div
                  className="shrink-0 rounded-xl flex items-center justify-center"
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "rgba(97,34,59,0.07)",
                  }}
                >
                  <MapPin className="w-4 h-4" style={{ color: "#61223b" }} />
                </div>
                <div>
                  <p
                    className="text-xs font-black uppercase tracking-widest mb-0.5"
                    style={{ color: "#caa258" }}
                  >
                    GPS Coordinates
                  </p>
                  <p className="text-sm font-mono" style={{ color: "#4a4847" }}>
                    33° 55′ 30.90″ S &nbsp;·&nbsp; 18° 51′ 55.10″ E
                  </p>
                </div>
              </div>

              {/* QR Code */}
              <div
                className="rounded-2xl flex flex-col sm:flex-row items-center gap-6"
                style={{
                  background: "white",
                  border: "1.5px solid rgba(97,34,59,0.10)",
                  padding: "1.75rem",
                }}
              >
                <div
                  className="shrink-0 rounded-2xl overflow-hidden"
                  style={{
                    border: "3px solid rgba(97,34,59,0.12)",
                    padding: "8px",
                    background: "white",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=https%3A%2F%2Fcs.sun.ac.za&color=61223b&bgcolor=ffffff"
                    alt="QR code for cs.sun.ac.za"
                    width={160}
                    height={160}
                    style={{ display: "block" }}
                  />
                </div>
                <div>
                  <p
                    className="text-xs font-black uppercase tracking-widest mb-2"
                    style={{ color: "#caa258" }}
                  >
                    Share our website
                  </p>
                  <p
                    className="font-black text-lg leading-snug mb-2"
                    style={{
                      color: "#61223b",
                      fontFamily: "SU Raleway, sans-serif",
                    }}
                  >
                    cs.sun.ac.za
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#4a4847" }}
                  >
                    Here is a QR code for our website. Feel free to print, copy,
                    and distribute liberally around town!
                  </p>
                </div>
              </div>
            </div>

            {/* ── RIGHT COLUMN: Map ── */}
            <div className="lg:col-span-2">
              <div
                className="rounded-2xl overflow-hidden shadow-md"
                style={{
                  border: "1.5px solid rgba(97,34,59,0.10)",
                  position: "sticky",
                  top: "100px",
                  height: "520px",
                }}
              >
                <iframe
                  title="Computer Science Division, Stellenbosch University"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d826.3!2d18.865306!3d-33.925250!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5e1c0a00001%3A0x0!2zMzPCsDU1JzMwLjkiUyAxOMKwNTEnNTUuMSJF!5e0!3m2!1sen!2sza!4v1700000000000!5m2!1sen!2sza"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── FOOTER CTA ── */}
      <div
        style={{
          background: "#61223b",
          padding: "4rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div className="container-narrow mx-auto">
          <h2
            className="text-2xl md:text-3xl font-black mb-4"
            style={{ color: "#caa258", fontFamily: "SU Raleway, sans-serif" }}
          >
            Interested in our programmes?
          </h2>
          <p
            className="text-base mb-8"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            Explore our teaching programmes and cutting-edge research.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/teaching"
              className="inline-flex items-center gap-2 font-bold rounded-xl transition-all duration-150 hover:opacity-85 hover:shadow-lg"
              style={{
                background: "#caa258",
                color: "#61223b",
                padding: "0.9rem 2rem",
                fontFamily: "SU Raleway, sans-serif",
              }}
            >
              Explore Programmes <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/research"
              className="inline-flex items-center gap-2 font-bold rounded-xl transition-all duration-150 hover:shadow-md"
              style={{
                background: "transparent",
                color: "white",
                border: "1.5px solid rgba(255,255,255,0.3)",
                padding: "0.9rem 2rem",
                fontFamily: "SU Raleway, sans-serif",
              }}
            >
              Our Research
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
