import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { CalendarCheck, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { departments } from "@/lib/site-data";
import { SectionHeading } from "./SectionHeading";

const schema = z.object({
  name: z.string().trim().min(2, "Please share your name").max(80),
  phone: z.string().trim().min(6, "Please enter a valid phone number").max(30),
  email: z.string().trim().email("Please enter a valid email").max(120),
  department: z.string().min(1, "Choose a department"),
  date: z.string().min(1, "Choose a preferred date"),
  time: z.string().min(1, "Choose a preferred time"),
  message: z.string().max(500).optional(),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

export function Booking() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const res = schema.safeParse(data);
    if (!res.success) {
      const errs: Errors = {};
      for (const issue of res.error.issues) {
        const k = issue.path[0] as keyof Errors;
        if (!errs[k]) errs[k] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const fieldBase =
    "mt-1.5 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-navy placeholder:text-muted-foreground/70 transition focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/25";

  return (
    <section id="book" className="py-20 md:py-28">
      <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Book an appointment"
            title={
              <>
                Reserve a
                <span className="italic text-teal"> considered </span>
                consultation.
              </>
            }
            description="Share a few details and our patient services team will confirm within four working hours — with a preferred consultant, time, and any preparation notes."
          />
          <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
            {[
              "Consultant-led appointments within 48 hours",
              "Recognised by all major private insurers",
              "In-clinic and video consultations available",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" aria-hidden />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="surface-card lg:col-span-7 p-6 sm:p-8 md:p-10"
        >
          {submitted ? (
            <div className="flex flex-col items-center gap-4 py-10 text-center">
              <div className="grid h-14 w-14 place-items-center rounded-full bg-mist text-teal">
                <CheckCircle2 className="h-7 w-7" aria-hidden />
              </div>
              <h3 className="font-display text-2xl text-navy">
                Your request is with us
              </h3>
              <p className="max-w-md text-sm text-muted-foreground">
                A member of the patient services team will confirm your
                appointment within four working hours.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="name" className="text-sm font-medium text-navy">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  className={fieldBase}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "err-name" : undefined}
                  placeholder="Eleanor Whitfield"
                />
                {errors.name && (
                  <p id="err-name" className="mt-1 text-xs text-destructive">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="phone" className="text-sm font-medium text-navy">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className={fieldBase}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "err-phone" : undefined}
                  placeholder="+44 20 7000 0000"
                />
                {errors.phone && (
                  <p id="err-phone" className="mt-1 text-xs text-destructive">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="email" className="text-sm font-medium text-navy">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className={fieldBase}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "err-email" : undefined}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p id="err-email" className="mt-1 text-xs text-destructive">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="department" className="text-sm font-medium text-navy">
                  Department
                </label>
                <select
                  id="department"
                  name="department"
                  className={fieldBase}
                  defaultValue=""
                  aria-invalid={!!errors.department}
                >
                  <option value="" disabled>
                    Select a specialty
                  </option>
                  {departments.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
                {errors.department && (
                  <p className="mt-1 text-xs text-destructive">{errors.department}</p>
                )}
              </div>

              <div>
                <label htmlFor="date" className="text-sm font-medium text-navy">
                  Preferred date
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  className={fieldBase}
                  aria-invalid={!!errors.date}
                />
                {errors.date && (
                  <p className="mt-1 text-xs text-destructive">{errors.date}</p>
                )}
              </div>

              <div>
                <label htmlFor="time" className="text-sm font-medium text-navy">
                  Preferred time
                </label>
                <input
                  id="time"
                  name="time"
                  type="time"
                  className={fieldBase}
                  aria-invalid={!!errors.time}
                />
                {errors.time && (
                  <p className="mt-1 text-xs text-destructive">{errors.time}</p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="text-sm font-medium text-navy">
                  Message <span className="text-muted-foreground">(optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className={fieldBase}
                  placeholder="Anything we should know before your visit?"
                />
              </div>

              <div className="sm:col-span-2 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-muted-foreground">
                  By submitting, you agree to our privacy policy. We never share
                  clinical information.
                </p>
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  <CalendarCheck className="h-4 w-4" aria-hidden />
                  Request appointment
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
