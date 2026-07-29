import { motion } from "framer-motion";
import { facilities } from "@/lib/site-data";
import { SectionHeading } from "./SectionHeading";

export function Facilities() {
  return (
    <section
      id="facilities"
      className="py-20 md:py-28"
      style={{ background: "var(--mist)" }}
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="The clinic"
          title={
            <>
              Spaces designed for
              <span className="italic text-teal"> calm</span>, built for care.
            </>
          }
          description="Every square metre is planned around movement, light, and privacy — from the arrival lounge to the recovery suites."
        />

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {facilities.map((f, i) => (
            <motion.figure
              key={f.title + i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              className={`group relative overflow-hidden rounded-3xl ${
                i === 0 ? "col-span-2 row-span-2 aspect-square lg:aspect-auto" : "aspect-square"
              }`}
            >
              <img
                src={f.image}
                alt={f.title}
                loading="lazy"
                width={1200}
                height={1200}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 55%, color-mix(in oklab, var(--navy) 70%, transparent))",
                }}
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 font-display text-base text-white sm:p-6 sm:text-lg">
                {f.title}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
