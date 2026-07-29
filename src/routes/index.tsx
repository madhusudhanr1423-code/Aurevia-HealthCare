import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Trust } from "@/components/site/Trust";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Doctors } from "@/components/site/Doctors";
import { Testimonials } from "@/components/site/Testimonials";
import { Facilities } from "@/components/site/Facilities";
import { Booking } from "@/components/site/Booking";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aurevia Health — Private multi-specialty clinic, Marylebone" },
      {
        name: "description",
        content:
          "Aurevia Health is a consultant-led private clinic in Marylebone offering eight specialties, in-house diagnostics, and unhurried, personal care.",
      },
      { property: "og:title", content: "Aurevia Health — Considered, consultant-led private care" },
      {
        property: "og:description",
        content:
          "Eight specialties, in-house diagnostics, and a single point of contact — a quieter way to receive private medical care.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Aurevia Health — Private multi-specialty clinic" },
      {
        name: "twitter:description",
        content:
          "Consultant-led private care in Marylebone. Eight specialties, in-house diagnostics, unhurried appointments.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Trust />
      <Services />
      <WhyUs />
      <Doctors />
      <Testimonials />
      <Facilities />
      <Booking />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
