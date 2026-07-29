import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { useState } from "react";
import { testimonials } from "@/lib/site-data";
import { SectionHeading } from "./SectionHeading";

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];

  const go = (dir: 1 | -1) =>
    setI((p) => (p + dir + testimonials.length) % testimonials.length);

  return (
    <section
      id="testimonials"
      aria-label="Patient stories"
      className="py-20 md:py-28"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Patient stories"
          title={
            <>
              Told in their own
              <span className="italic text-teal"> words</span>.
            </>
          }
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={t.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="flex items-center gap-1" aria-label={`Rated ${t.rating} out of 5`}>
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-teal text-teal" aria-hidden />
                  ))}
                </div>
                <p className="mt-6 font-display text-2xl leading-snug text-navy sm:text-3xl md:text-4xl">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-8 flex items-center gap-4">
                  <img
                    src={t.image}
                    alt={`Portrait of ${t.name}`}
                    loading="lazy"
                    width={80}
                    height={80}
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <div className="min-w-0">
                    <p className="truncate font-medium text-navy">{t.name}</p>
                    <p className="truncate text-sm text-muted-foreground">
                      {t.location}
                    </p>
                  </div>
                </footer>
              </motion.blockquote>
            </AnimatePresence>

            <div className="mt-10 flex items-center gap-3">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="grid h-11 w-11 place-items-center rounded-full border border-border bg-background text-navy transition duration-300 hover:bg-mist focus-visible:bg-mist focus-visible:ring-2 focus-visible:ring-teal"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="grid h-11 w-11 place-items-center rounded-full border border-border bg-background text-navy transition duration-300 hover:bg-mist focus-visible:bg-mist focus-visible:ring-2 focus-visible:ring-teal"
              >
                <ArrowRight className="h-4 w-4" aria-hidden />
              </button>
              <span className="ml-2 text-sm tabular-nums text-muted-foreground">
                {String(i + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-elegant">
              <AnimatePresence mode="wait">
                <motion.img
                  key={t.image}
                  src={t.image.replace("w=400", "w=900")}
                  alt=""
                  aria-hidden
                  loading="lazy"
                  width={900}
                  height={1125}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 , ease: "easeOut"}}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
