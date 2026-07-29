export type Service = {
  title: string;
  description: string;
  icon: string;
};

export const services: Service[] = [
  { title: "General Medicine", description: "Comprehensive primary care led by consultant physicians for every stage of life.", icon: "Stethoscope" },
  { title: "Cardiology", description: "Advanced diagnostics and interventional care for heart and vascular health.", icon: "HeartPulse" },
  { title: "Orthopaedics", description: "Joint, spine, and sports injury recovery guided by fellowship-trained surgeons.", icon: "Bone" },
  { title: "Dental Care", description: "Precision cosmetic and restorative dentistry in a calm, considered setting.", icon: "Smile" },
  { title: "Dermatology", description: "Medical and aesthetic skin care built around long-term skin health.", icon: "Sparkles" },
  { title: "Neurology", description: "Specialist care for headache, movement, memory, and complex neurological cases.", icon: "Brain" },
  { title: "Paediatrics", description: "Gentle, evidence-led care for infants, children, and adolescents.", icon: "Baby" },
  { title: "Diagnostics", description: "In-house imaging and laboratory services with same-day reporting.", icon: "Activity" },
];

export const stats = [
  { value: 28, suffix: "+", label: "Years of clinical care" },
  { value: 120, suffix: "k", label: "Patients treated" },
  { value: 46, suffix: "", label: "Consultant specialists" },
  { value: 19, suffix: "", label: "International awards" },
];

export const whyUs = [
  { title: "Consultant-led experience", body: "Every appointment is led by a senior consultant — never a locum or trainee.", icon: "Award" },
  { title: "Advanced equipment", body: "3T MRI, low-dose CT, and 4D echocardiography under one quiet, considered roof.", icon: "Microscope" },
  { title: "24/7 clinical support", body: "A dedicated care line staffed by qualified nurses, day and night.", icon: "Clock" },
  { title: "Certified specialists", body: "Royal College and international board-certified across every department.", icon: "BadgeCheck" },
  { title: "Personalised pathways", body: "Care plans built around your goals, lifestyle, and preferences — never templates.", icon: "HeartHandshake" },
  { title: "Discretion by design", body: "Private entrances, single-occupancy suites, and end-to-end confidentiality.", icon: "ShieldCheck" },
];

export const doctors = [
  {
    name: "Dr. Amelia Okafor",
    role: "Consultant Cardiologist",
    experience: "18 years",
    languages: "English, French, Yoruba",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Dr. Jonas Lindqvist",
    role: "Consultant Neurologist",
    experience: "22 years",
    languages: "English, Swedish, German",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Dr. Priya Raman",
    role: "Consultant Dermatologist",
    experience: "14 years",
    languages: "English, Hindi, Tamil",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Dr. Marcus Bellini",
    role: "Consultant Orthopaedic Surgeon",
    experience: "20 years",
    languages: "English, Italian, Spanish",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=900&q=80",
  },
];

export const testimonials = [
  {
    quote:
      "Aurevia turned a difficult diagnosis into a calm, coordinated plan. Every specialist we saw felt genuinely invested in my recovery.",
    name: "Eleanor Whitfield",
    location: "Kensington, London",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
  },
  {
    quote:
      "From reception to consultation, the experience is unhurried and precise. It is the first clinic that has felt built for the patient.",
    name: "Rohan Mehta",
    location: "Zurich, Switzerland",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    quote:
      "I brought my son here for a persistent condition and left with a plan the whole family could follow. Warm, expert, quietly excellent.",
    name: "Sofia Alvarez",
    location: "Madrid, Spain",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  },
];

export const facilities = [
  { title: "Patient longue", image: "/H4.jpg" },
  { title: "Diagnostic imaging", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80" },
  { title: "Recovery lounge", image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80" },
  { title: "Operating theatres", image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80" },
  { title: "Reception & lobby", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80" },
  { title: "Wellness garden", image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80" },
  {title: "Green treatment chair", image: "/H1.jpg" },
  {title: "Surgical suite", image: "/H2.jpg" },
  {title: "Healthcare reception", image: "/H3.jpg" },
];

export const faqs = [
  {
    q: "Do I need a referral to book an appointment?",
    a: "No referral is required. You can book directly with any of our consultants. If you have prior notes or scans, our team will incorporate them into your consultation.",
  },
  {
    q: "Do you work with private medical insurers?",
    a: "Yes. We are recognised by all major UK and international insurers. Our patient services team will handle pre-authorisation on your behalf before your first visit.",
  },
  {
    q: "How quickly can I be seen?",
    a: "Most consultants offer appointments within 48 hours. Same-day appointments are available for urgent cases through our clinical care line.",
  },
  {
    q: "Are diagnostics available on-site?",
    a: "Our in-house imaging and laboratory services provide same-day reporting for the majority of scans and tests, so care plans begin without delay.",
  },
  {
    q: "Is parking available at the clinic?",
    a: "Complimentary valet parking is provided for all patients and visitors, with step-free access from the private entrance to every department.",
  },
];

export const departments = [
  "General Medicine",
  "Cardiology",
  "Orthopaedics",
  "Dental Care",
  "Dermatology",
  "Neurology",
  "Paediatrics",
  "Diagnostics",
];

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Doctors", href: "#doctors" },
  { label: "Facilities", href: "#facilities" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];
