// ─────────────────────────────────────────────────────────────
// Green Drift — Site Content
// Edit copy, stats, and links here. Components read from this file
// so you rarely need to touch component code just to change words.
// Anywhere you see PLACEHOLDER, replace with real content/assets —
// see CONTENT-AND-ASSETS-CHECKLIST.md in the project root.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Green Drift',
  tagline: 'Clean Moves. Better Days.',
  categoryLine: 'The EV Rental Platform Built for the Last Mile.',
  url: 'https://greendrift.example', // PLACEHOLDER — replace with real domain
};

export const nav = [
  { label: 'For Riders', href: '/riders' },
  { label: 'For Partners', href: '/partners' },
  { label: 'Advertise With Us', href: '/advertise' },
  { label: 'Hubs', href: '/hubs' },
  { label: 'About', href: '/about' },
];

export const heroSlides = [
  {
    eyebrow: 'CLEAN MOVES. BETTER DAYS.',
    headline: 'Rent an EV.\nStart Earning Today.',
    sub: 'No large upfront cost. Swap batteries in minutes. Built for riders who need to work, not wait.',
    cta: { label: 'Ride with Green Drift', href: '/riders' },
    image: '/images/hero-rider-sealink.jpg',
  },
  {
    eyebrow: 'FOR FRANCHISEE PARTNERS',
    headline: 'Own a Fleet.\nGet Paid Every Month.',
    sub: 'Start with 5 vehicles. One 3-year contract. A live dashboard that shows you everything.',
    cta: { label: 'Explore investment tiers', href: '/partners' },
    // PLACEHOLDER — a hub/fleet photo, rows of parked EVs, or a dashboard screenshot
    image: null,
  },
  {
    eyebrow: 'ADVERTISE WITH US',
    headline: 'Your Brand.\nMoving Through the City.',
    sub: 'Put your brand on a fleet that\'s on the road all day, every day, in the neighborhoods that matter to you.',
    cta: { label: 'See advertising options', href: '/advertise' },
    // PLACEHOLDER — a Green Drift EV wrapped in a brand livery/ad creative.
    // Note: avoid compositing real third-party brand logos into this shot without
    // that brand's permission — it reads as an implied partnership/endorsement.
    image: null,
  },
];

export const trustStrip = [
  { label: 'Riders on the road', value: 'PLACEHOLDER' }, // e.g. "20,000+"
  { label: 'Cities live', value: 'PLACEHOLDER' },
  { label: 'Deliveries completed', value: 'PLACEHOLDER' },
  { label: 'CO₂ saved', value: 'PLACEHOLDER' },
];

export const audiences = [
  {
    key: 'riders',
    eyebrow: 'FOR RIDERS',
    title: 'Ride more. Spend less. Worry less.',
    body:
      "Every rupee of fuel and repair cost comes straight out of your day's earnings. Rent a Green Drift EV instead — lower running cost, fast battery swaps, and support when you need it.",
    points: [
      'Sign up in the app, verify KYC digitally, ride the same day',
      'Swap your battery in minutes at a hub near you',
      'Transparent weekly and monthly plans — no hidden charges',
      'In-app support for breakdowns and roadside help',
    ],
    cta: { label: 'See rider plans', href: '/riders' },
  },
  {
    key: 'partners',
    eyebrow: 'FOR FRANCHISEE PARTNERS',
    title: 'Own a fleet. Get paid every month. See everything.',
    body:
      "Most EV franchise pitches sound the same: own the asset, get a fixed payout, trust us. Green Drift shows you — live utilization, live maintenance logs, live payout history.",
    points: [
      'Start with 5 vehicles, or scale to a full Hub',
      'One 3-year contract, one fixed monthly payout',
      'A live partner dashboard, not a promise',
      'Vehicles insured, maintained, and deployed for you',
    ],
    cta: { label: 'Explore investment tiers', href: '/partners' },
  },
  {
    key: 'advertise',
    eyebrow: 'ADVERTISE WITH US',
    title: 'Put your brand on the move.',
    body:
      'A Green Drift fleet is on the road all day, in the neighborhoods your customers already live in. Wrap the fleet, sponsor a hub, or run a city-level campaign.',
    points: [
      'Fleet-wrap and hub-branding options',
      'City and neighborhood-level targeting',
      'Reporting on reach — impressions, routes covered, active hours',
    ],
    cta: { label: 'Talk to our ad team', href: '/advertise' },
  },
];

export const howItWorksRider = [
  { step: '01', title: 'Complete your KYC', body: 'Aadhaar, PAN, and bank details — done in the app.' },
  { step: '02', title: 'Choose your EV', body: 'Pick a plan and a vehicle class that fits how you ride.' },
  { step: '03', title: 'Start earning', body: 'Activate your account and start your first ride the same day.' },
];

export const howItWorksPartner = [
  { step: '01', title: 'Choose your tier', body: 'Starter (5 vehicles), Growth, or full Hub-level investment.' },
  { step: '02', title: 'Sign a 3-year contract', body: 'Vehicles registered in your name. Terms laid out in plain language.' },
  { step: '03', title: 'Track your payout, live', body: 'Utilization, maintenance, and payout history — all in your dashboard.' },
];

export const departments = [
  { idx: '01', title: 'Fleet Management Software', body: 'The system tracking every vehicle, every rider, and every payout.' },
  { idx: '02', title: 'GPS & Telematics', body: 'Real-time location, battery health, and theft protection on every vehicle.' },
  { idx: '03', title: 'Battery Swap Network', body: 'Swap stations at every hub — riders swap in minutes, not hours.' },
  { idx: '04', title: 'Rider & Partner Apps', body: 'One app for riders to ride, one dashboard for partners to see everything.' },
  { idx: '05', title: 'Hub Operations', body: 'Dedicated hubs serving riders and last-mile delivery companies directly.' },
  { idx: '06', title: 'Advertising Network', body: 'Turning an always-moving fleet into always-on brand reach.' },
];

export const testimonials = [
  // PLACEHOLDER — replace with real Green Drift rider testimonials (name, quote, monthly earning if they consent to share, optional video link)
  {
    name: 'PLACEHOLDER NAME',
    quote: 'PLACEHOLDER — a rider quote about earnings, freedom, or reliability, in their own words.',
    videoUrl: '',
  },
  {
    name: 'PLACEHOLDER NAME',
    quote: 'PLACEHOLDER — a second rider quote.',
    videoUrl: '',
  },
  {
    name: 'PLACEHOLDER NAME',
    quote: 'PLACEHOLDER — a third rider quote.',
    videoUrl: '',
  },
];

export const partnerLogos = [
  // PLACEHOLDER — delivery/aggregator or investor logos you have permission to display
  'PLACEHOLDER', 'PLACEHOLDER', 'PLACEHOLDER', 'PLACEHOLDER', 'PLACEHOLDER',
];

export const roadmap = [
  { phase: 'Phase 0 · Mo 0–6', title: 'Foundation', body: 'Core rider app and partner dashboard live. First hub live.' },
  { phase: 'Phase 1 · Year 1', title: 'Regional Proof', body: 'Starter partner tier opens publicly. Battery swap network live in pilot city.' },
  { phase: 'Phase 2 · Year 2', title: 'Multi-City', body: '4–6 city presence. Hub-level investment tier opens.' },
  { phase: 'Phase 3 · Year 3', title: 'National Scale', body: '15+ cities live. Enterprise fleet-supply contracts scale.' },
  { phase: 'By 2029', title: 'Pan-India Hubs', body: 'Every major city and tier-2 logistics hub served by a Green Drift Hub.', final: true },
];

export const contact = {
  email: 'hello@greendrift.example', // PLACEHOLDER
  cities: ['Mumbai'], // PLACEHOLDER — add cities as hubs go live
};
