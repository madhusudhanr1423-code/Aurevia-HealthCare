import { motion } from "framer-motion";
import { ArrowRight, Play, ShieldCheck, Star } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div
          className="absolute -top-32 -right-24 h-[520px] w-[520px] rounded-full opacity-70 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in oklab, var(--teal) 35%, transparent), transparent)",
          }}
        />
        <div
          className="absolute -bottom-40 -left-32 h-[480px] w-[480px] rounded-full opacity-60 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in oklab, var(--sky) 90%, transparent), transparent)",
          }}
        />
      </div>

      <div className="container-page grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-teal" />
            Multi-specialty private clinic
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="heading-xl mt-5"
          >
            Quiet, considered care
            <br className="hidden sm:block" />{" "}
            <span className="italic text-teal">from first visit</span> onward.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Aurevia Health is a consultant-led private clinic bringing together
            eight specialties, in-house diagnostics, and a single point of
            contact — so your care feels unhurried, coordinated, and entirely
            your own.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#book" className="btn-primary">
              Book an appointment
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#services" className="btn-ghost">
              <Play className="h-4 w-4" aria-hidden="true" />
              Explore specialties
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex items-center gap-4 text-sm text-muted-foreground"
          >
            <ShieldCheck className="h-5 w-5 text-teal" aria-hidden="true" />
            Regulated by the Care Quality Commission — rated Outstanding, 2024.
          </motion.div>
        </div>

        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-elegant sm:aspect-[5/6]">
              <img
                src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=1400&q=80"
                alt="Consultant physician reviewing a treatment plan with a patient in a calm, sunlit consultation room"
                loading="eager"
                width={1400}
                height={1700}
                className="h-full w-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 55%, color-mix(in oklab, var(--navy) 55%, transparent))",
                }}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="surface-card absolute -bottom-6 left-4 flex w-[min(280px,80%)] items-center gap-3 p-4 sm:-left-6"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-mist">
                <Star className="h-5 w-5 text-teal" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Patient rating
                </p>
                <p className="truncate text-sm font-medium text-navy">
                  4.9 / 5 · 3,200+ reviews
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="surface-card absolute -top-4 right-2 hidden w-[240px] p-4 sm:block sm:-right-6"
            >
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Next available
              </p>
              <p className="mt-1 font-display text-lg text-navy">Tomorrow, 09:20</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Cardiology · Dr. Okafor
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
