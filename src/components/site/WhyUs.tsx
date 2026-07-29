import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { whyUs } from "@/lib/site-data";
import { SectionHeading } from "./SectionHeading";

export function WhyUs() {
  return (
    <section
      aria-label="Why choose Aurevia Health"
      className="relative overflow-hidden py-20 md:py-28"
      style={{ background: "var(--mist)" }}
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Why Aurevia"
          title={
            <>
              A private clinic that puts
              <span className="italic text-teal"> quiet expertise </span>
              first.
            </>
          }
          description="No queues, no shift-swaps, no repeated paperwork. Just senior clinicians, considered spaces, and a team that knows your name before you arrive."
        />

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((w, i) => {
            const Icon = (Icons[w.icon as keyof typeof Icons] ??
              Icons.CheckCircle) as React.ComponentType<{
              className?: string;
            }>;
            return (
              <motion.li
                key={w.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group surface-card p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant md:p-7"
              >
                <div
                  className="grid h-12 w-12 place-items-center rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                  style={{
                    background:
                      "linear-gradient(135deg, color-mix(in oklab, var(--teal) 20%, transparent), color-mix(in oklab, var(--sky) 60%, transparent))",
                    color: "var(--navy)",
                  }}
                >
                 <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="mt-5 font-display text-lg text-navy">
                  {w.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {w.body}
                </p>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
