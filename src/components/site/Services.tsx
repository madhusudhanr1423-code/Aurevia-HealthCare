import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/site-data";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Our specialties"
            title={
              <>
                Eight specialties. One
                <span className="italic text-teal"> continuous</span> care team.
              </>
            }
            description="Every department shares the same records, the same standards, and the same patient services team — so referrals happen in the corridor, not the calendar."
          />
          <a href="#doctors" className="btn-ghost self-start md:self-end">
            Meet the consultants
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = (Icons[s.icon as keyof typeof Icons] ??
              Icons.Stethoscope) as React.ComponentType<{
              className?: string;
              "aria-hidden"?: boolean;
            }>;
            return (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              >
                <a
                  href="#book"
                 className="group flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-6 transition duration-500 hover:-translate-y-2 hover:border-teal/40 hover:shadow-elegant focus-visible:border-teal focus-visible:shadow-elegant"
                >
                  <div>
                    <div
                      className="grid h-12 w-12 place-items-center rounded-2xl text-teal transition group-hover:scale-110 group-hover:rotate-3"
                      style={{ background: "var(--mist)" }}
                    >
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <h3 className="mt-6 font-display text-xl text-navy">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {s.description}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-navy">
                    Book consultation
                    <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </a>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
