// Page copy in English, typed against lib/copy.ts: a missing or extra key
// fails the build. American English, translated for meaning rather than word
// for word, under the same content rules as the Romanian copy.

import type { Copy } from "./copy";
import { PRICE_FROM } from "./content";
import { RATING_SUMMARY } from "./content.en";
import { DRIVE_AIRPORT, DRIVE_SIBIU } from "./retreat.en";
import { SITE_NAME } from "./site";

const TAGLINE = "Mountain guesthouse";

export const COPY: Copy = {
  site: {
    tagline: TAGLINE,
    description:
      "Pensiunea Amonte is a mountain retreat in Valea Avrigului, at the foot of the Făgăraș Mountains, 40 minutes from Sibiu. 10 rooms and studios, a hot tub and sauna, a panoramic terrace and a meeting room for groups.",
    defaultTitle: `${SITE_NAME} - ${TAGLINE} in Valea Avrigului`,
    inLanguage: "en-US",
    paymentAccepted: "Cash, debit and credit cards",
  },

  common: {
    home: "Home",
  },

  home: {
    meta: {
      description:
        "Mountain guesthouse in Valea Avrigului, 40 minutes from Sibiu: 10 rooms with balconies, a hot tub and sauna, and a terrace facing the Făgăraș Mountains.",
    },
    hero: {
      h1: "Mountain guesthouse in Valea Avrigului, near Sibiu",
      alt: "Pensiunea Amonte, exterior view",
      label: "[ PHOTO - guesthouse exterior ]",
      title: "Where the quiet recharges you",
      lead: "Pensiunea Amonte welcomes you with warmth and fresh mountain air: a retreat at the foot of the Făgăraș Mountains, away from the noise and close to nature.",
      primary: "Check availability",
      secondary: "See the rooms",
    },
    about: {
      eyebrow: "About us",
      title: "A mountain retreat, built for slowing down.",
      p1: "Set at the foot of the Făgăraș Mountains in Valea Avrigului, Pensiunea Amonte pairs a refined setting with genuine hospitality. Modern rooms with mountain views, a living room with a fireplace and a panoramic terrace.",
      p2: "Unwind in the spa area with its hot tub and sauna, and in the kind of quiet you only find in the mountains, just 40 minutes from Sibiu.",
      more: "Read more about us",
      salon: { alt: "The guesthouse lounge", label: "[ interior / lounge ]" },
      fireplace: { alt: "Fireplace", label: "[ fireplace ]" },
      bar: { alt: "Bar and lounge", label: "[ bar / lounge ]" },
    },
    facts: {
      eyebrow: "At a glance",
      title: "Practical details",
      items: [
        { label: "Accommodation", value: "10 units: 8 double rooms and 2 family studios" },
        { label: "Capacity", value: "Up to 24 guests" },
        { label: "Rates", value: `From ${PRICE_FROM} RON a night, breakfast included` },
        { label: "Check-in / check-out", value: `From 3 p.m. / by noon` },
        { label: "Distances", value: `Sibiu: ${DRIVE_SIBIU}, 35 km. Sibiu Airport: ${DRIVE_AIRPORT}, 42 km` },
        { label: "Relaxation", value: "Hot tub and sauna (for a fee), living room with fireplace, panoramic terrace" },
        { label: "Groups", value: "Whole-property rental, with a group meeting room" },
        { label: "Reviews", value: `${RATING_SUMMARY.value} out of 5, from ${RATING_SUMMARY.count} Google reviews` },
      ],
    },
    audiences: {
      eyebrow: "Who Amonte is for",
      title: "Three ways to enjoy the mountains",
    },
    rooms: {
      eyebrow: "Accommodation",
      title: "Rooms & rates",
      allRooms: "See all rooms",
      allRates: "See all rates",
    },
    services: {
      eyebrow: "What you'll find here",
      title: "Services & amenities",
      lead: "Everything is designed to make you feel at home, only with a better view.",
      all: "See all services",
    },
    gallery: {
      eyebrow: "Gallery",
      title: "Moments at Amonte",
      all: "See the full gallery",
    },
    activities: {
      eyebrow: "Around the guesthouse",
      title: "Surroundings & activities",
      lead: "From ridge hikes to evenings by the fire, the mountains always have a plan for you.",
      all: "See all activities",
    },
    reviews: {
      eyebrow: "What our guests say",
      title: "Reviews",
      summary: (value: string, count: number) =>
        `${value} out of 5 ⭐, based on ${count} Google reviews`,
    },
    booking: {
      eyebrow: "Booking",
      title: "Check availability",
      lead: "Message us on WhatsApp and we'll get back to you quickly with availability and details for your dates.",
      note: "The fastest way is a WhatsApp message. We reply as soon as we can.",
      cta: "Check availability",
      fallback: "email",
      fallbackLabel: "Or send us an email →",
    },
    contact: {
      eyebrow: "Getting here",
      title: "See you in the mountains",
      address: "Address",
      phone: "Phone",
      email: "Email",
    },
  },

  about: {
    meta: {
      title: "About us, a boutique guesthouse in Valea Avrigului",
      description:
        "Boutique guesthouse in Valea Avrigului, at the foot of the Făgăraș Mountains: 10 units for 24 guests, hot tub, sauna and a group meeting room, 40 minutes from Sibiu.",
    },
    schemaName: "About Pensiunea Amonte, boutique accommodation in Valea Avrigului",
    eyebrow: "About us",
    title: "About Pensiunea Amonte",
    answer:
      "Pensiunea Amonte is a boutique mountain guesthouse in Valea Avrigului, Sibiu County, at the foot of the Făgăraș Mountains and about 40 minutes from Sibiu. We have 10 rooms and studios for up to 24 guests in an intimate setting, with a hot tub, a sauna, a fireplace, a panoramic terrace, a bar and direct access to nature. The whole property can be booked for groups, retreats and private events.",
    operator: {
      eyebrow: "Who we are",
      title: "A mountain retreat, built for slowing down.",
      before: "Amonte is operated by",
      name: "Hostillo SRL",
      after:
        ", a Romanian hospitality management company that takes over and fully runs boutique guesthouses, with a focus on genuine hospitality and quality experiences. The guesthouse has been open since 2024, and Hostillo has managed it since May 2026.",
      p2: "We're built around a simple idea: a small, well-kept place where every guest is treated like an invited friend, not a room number.",
    },
    features: {
      eyebrow: "What we do best",
      title: "Hospitality on a human scale",
    },
    hostsPhoto: { alt: "The Pensiunea Amonte team", label: "[ the Amonte team ]" },
    stay: {
      eyebrow: "The experience",
      title: "What a stay at Amonte looks like",
      p1: "Arrivals are unhurried. The 8 double rooms and 2 family studios are designed for couples and families who want real comfort. Evenings are spent by the fireplace in the living room, or outside at the campfire under a starry sky.",
      p2: "For those who come to get moving, Valea Avrigului is the starting point for hikes to Cabana Bârcaciu, Negoiu and Suru. For those who come to rest, the terrace, the sauna and the hot tub are enough to make you never want to leave.",
    },
    food: {
      eyebrow: "Food & drink",
      title: "Food and bar",
      before:
        "At Amonte, good food and drink are part of the experience. Breakfast is included in the rate. The bar serves drinks and craft cocktails, including",
      name: "Amonte Spirit",
      after: ", the house signature cocktail, made with fir syrup.",
    },
    events: {
      eyebrow: "Events",
      title: "Private and corporate events",
      body: "Amonte can be booked in full and becomes a private setting for corporate retreats, team building, quiet work sessions and family events. Room for 24 guests, the shared spaces and the mountain atmosphere make the guesthouse a good fit for groups who want privacy and a place of their own.",
    },
    location: {
      eyebrow: "Getting here",
      title: "Location",
      nearby: [
        { name: "Brambura Park", rest: " and the deer farm (Poiana Neamțului): about 10 minutes" },
        { name: "Brukenthal Palace", rest: ", Avrig: nearby" },
        { name: "The Clay Castle, Valea Zânelor", rest: ", Porumbacu de Sus: a few minutes from Avrig" },
        { name: "Casa Vikingilor", rest: " and Povestea Calendarului: in the area" },
        { name: "Făgăraș mountain trails", rest: ": Cabana Bârcaciu, Negoiu and Suru, starting from Valea Avrigului" },
        { name: "Outdoor activities", rest: ": horseback riding, ATV rides, forest walks" },
        { name: "Sibiu", rest: " (historic center): 40 minutes by car, and the airport 50" },
        { name: "Transfăgărășan", rest: " road and Bâlea Waterfall: about an hour, seasonal" },
      ],
    },
    facilities: {
      eyebrow: "What you'll find here",
      title: "Amenities",
    },
    faq: {
      eyebrow: "Frequently asked questions",
      title: "Quick answers",
    },
    fireSafety:
      "Pensiunea Amonte holds a fire safety permit issued by ISU Sibiu (no. 556/25/SU-SB of September 24, 2025).",
    cta: {
      eyebrow: "Booking",
      title: "Ready to come to Amonte?",
      lead: "Message us on WhatsApp and we'll get back to you quickly with availability and details for your dates.",
      button: "Check availability",
    },
  },

  rooms: {
    meta: {
      title: "Rooms",
      description:
        "Rooms at Pensiunea Amonte near Sibiu: Deluxe and mountain view doubles, doubles with a balcony and family studios, all with breakfast included.",
    },
    eyebrow: "Accommodation",
    title: "Our rooms",
    lead: "Generous spaces, warm wood and views of the Făgăraș Mountains. Access to the hot tub & sauna and a panoramic terrace.",
    cta: "Check availability",
    rates: "See detailed rates →",
  },

  rates: {
    meta: {
      title: "Room rates",
      description:
        "Rates at Pensiunea Amonte, Valea Avrigului: double rooms from 550 RON a night and the family studio from 800 RON, with breakfast included.",
    },
    eyebrow: "Accommodation",
    title: "Rates",
    lead: "Ask about availability for your dates on WhatsApp and we'll send you a personalized offer.",
    note: "For groups, longer stays or special dates, write to us and we'll put an offer together.",
    cta: "Check availability",
  },

  activities: {
    meta: {
      title: "Things to do nearby",
      description:
        "Near Pensiunea Amonte: hiking in the Făgăraș Mountains, Brambura Park, Brukenthal Palace, e-bikes, horseback riding and ATVs, a deer farm, Beach Club Avrig.",
    },
    eyebrow: "Around the guesthouse",
    title: "Things to do nearby",
    lead: "From ridge hikes to evenings by the fire, the mountains always have a plan for you.",
    cta: "Book your mountain stay",
  },

  gallery: {
    meta: {
      title: "Gallery",
      description:
        "Photo gallery of Pensiunea Amonte: the exterior, hot tub & sauna, rooms, views of the Făgăraș Mountains and evenings by the campfire.",
    },
    eyebrow: "Gallery",
    title: "Moments at Amonte",
    cta: "Check availability",
  },

  services: {
    meta: {
      title: "Services & amenities",
      description:
        "Services at Pensiunea Amonte: breakfast included, hot tub and sauna, bar, living room with fireplace, panoramic terrace, campfire, free Wi-Fi and parking.",
    },
    eyebrow: "What you'll find here",
    title: "Services & amenities",
    lead: "Everything is designed to make you feel at home, only with a better view.",
    groups:
      "For teams and groups, the whole guesthouse can be rented, with a meeting room and every space reserved just for you.",
    groupsLink: "See the terms for groups",
    detailsEyebrow: "Details",
    detailsTitle: "Everything you need to know",
    whatsapp: "Message us for details",
    rooms: "Discover the rooms →",
  },

  events: {
    meta: {
      title: "Events at Amonte, near Sibiu",
      description:
        "Pensiunea Amonte, near Sibiu, is rented in full to one group at a time: 24 guests and meals at the guesthouse. Corporate retreats and private events.",
    },
    crumb: "Events",
    eyebrow: "Events",
    title: "Events at Amonte",
    lead: "The guesthouse is rented in full, to one group at a time, with no other guests on the property. It sleeps 24, and meals are prepared on site for the whole group.",
    rating: (value: string, count: number) => `${value} out of 5 on Google, from ${count} reviews`,
    video: {
      eyebrow: "A first look",
      title: "The place, in brief",
      note: "The video only plays when you start it, never automatically.",
    },
    reviews: {
      eyebrow: "Reviews",
      title: "What groups who stayed here say",
    },
    cta: {
      eyebrow: "Let's talk",
      title: "Tell us what kind of event you have in mind",
      lead: "How many of you, and when. We'll build the rest together.",
      message: "Hello! I'd like information about hosting an event at Pensiunea Amonte.",
      button: "Message us on WhatsApp",
    },
  },

  privateEvents: {
    meta: {
      title: "Private events near Sibiu",
      description:
        "Christenings, civil weddings, small weddings and birthdays near Sibiu, fully organized: up to 60 guests, rooms for 24, meals cooked on site.",
    },
    hero: {
      eyebrow: `Valea Avrigului · ${DRIVE_SIBIU} from Sibiu`,
      title: "Private events in Valea Avrigului, near Sibiu",
      lead: "Christenings, civil weddings, small weddings and birthdays, with the whole guesthouse just for you. We take care of the organizing, you enjoy the party.",
      alt: "The Pensiunea Amonte lounge, set up for an event",
    },
    detailsAnchor: "details",
    formAnchor: "request-form",
    answer: {
      eyebrow: "At a glance",
      title: "Your event, in the mountains",
      form: "Fill in the form",
      whatsapp: "Message us on WhatsApp",
    },
    organize: {
      eyebrow: "Full service",
      title: "You celebrate, we handle the rest",
      lead: "Together with our partners, we take care of the organizing from start to finish. Tell us what you'd like, and you're left with only the best part: the party.",
    },
    types: {
      eyebrow: "What we host",
      title: "Four kinds of events",
      lead: "There are no fixed packages: we build every event around what you want.",
    },
    facts: { eyebrow: "Details", title: "Practical details" },
    gallery: { eyebrow: "Gallery", title: "The spaces for your event" },
    steps: {
      eyebrow: "Booking",
      title: "How to book",
      lead: "Every event has its own details, so we invite you to see the place first and put the offer together after.",
    },
    form: {
      eyebrow: "Request",
      title: "Tell us about your event",
      lead: "Fill in the form and we'll get in touch to arrange a visit to the guesthouse.",
    },
    faq: { eyebrow: "Frequently asked questions", title: "What hosts ask us" },
    cta: {
      eyebrow: "Let's talk",
      title: "Tell us what you're celebrating",
      lead: "The type of event, the date and how many guests. We'll build the rest together.",
      button: "Message us on WhatsApp",
    },
  },

  corporate: {
    meta: {
      title: "Team building and corporate retreat venue near Sibiu",
      description:
        "Exclusive use for teams of up to 24 near Sibiu, Romania. Meeting room, group meals, hot tub and sauna. Complete offer within 24 hours.",
    },
    crumb: "Retreats and team building",
    hero: {
      alt: "Pensiunea Amonte from the outside, at the foot of the Făgăraș Mountains",
      label: "[ PHOTO: exterior at golden hour or the terrace with a group, landscape ]",
      eyebrow: `Valea Avrigului · ${DRIVE_SIBIU} from Sibiu`,
      title: "An exclusive team building and corporate retreat venue near Sibiu",
      lead: "Rent the whole guesthouse for your team: 10 rooms and studios, up to 24 people, a meeting room, a hot tub and sauna, a terrace and a campfire. You'll get the complete offer within 24 business hours.",
      whatsapp: "Request an offer on WhatsApp",
      form: "Fill in the offer request",
      rating: (value: string, count: number) =>
        `${value} out of 5 on Google, from ${count} reviews · Confirmed bookings guaranteed`,
    },
    about: {
      eyebrow: "About us",
      title: "People, not just a venue",
      lead: `We're a small, hands-on team that runs Pensiunea Amonte directly, in Valea Avrigului, ${DRIVE_SIBIU} from Sibiu, and we stay on site for your entire stay. You deal with the same team from the first message to departure.`,
    },
    workspaces: {
      eyebrow: "Workspaces",
      title: "Where you'll work",
    },
    leisure: {
      eyebrow: "Between sessions",
      title: "What to do between sessions",
      bruno: "Bruno, the house's Bernese Mountain Dog, is the mascot here. Guests' pets stay at home.",
    },
    fnb: {
      eyebrow: "Meals",
      title: "Meals for the team",
      lead: "We cook the meals ourselves, at the guesthouse, from fresh local produce, for the whole group, so everyone sits down to eat together.",
      note: "Meal prices are included in the offer we send for your dates.",
      alt: "The large table in the Pensiunea Amonte living room, where the whole group sits together",
    },
    rooms: {
      eyebrow: "Accommodation",
      title: "How the 24 beds are split",
      lead: "So you know right away whether the whole team fits.",
      unit: (perUnit: string, beds: string, total: string) =>
        `Sleeps ${perUnit}, with ${beds}. ${total} guests in total.`,
      total: (count: string, total: string) =>
        `Total: ${count} rooms and studios, ${total} guests.`,
      cta: "Request an offer for your team",
    },
    agenda: {
      eyebrow: "Sample agenda",
      title: "Two days at Amonte, for example",
      note: "The schedule is yours. We take care of the rest.",
    },
    pricing: {
      eyebrow: "Pricing",
      title: "What it costs, roughly",
      note: "The final offer depends on the number of people and the dates. You'll get it itemized, within 24 business hours.",
    },
    process: {
      title: "4 simple steps",
    },
    reviews: {
      eyebrow: "Reviews",
      title: "What teams who stayed here say",
    },
    faq: {
      eyebrow: "Frequently asked questions",
      title: "What teams ask us",
    },
    form: {
      eyebrow: "Offer request",
      title: "Request the complete offer",
      lead: "It takes two minutes to fill in, and you'll get the offer within 24 business hours.",
    },
    location: {
      eyebrow: "Location and access",
      title: "Getting here",
      maps: "Open in Google Maps →",
    },
    final: {
      eyebrow: "Availability",
      title: "Tell us how many people and when. We'll handle the rest.",
      whatsapp: "Request an offer on WhatsApp",
      form: "Fill in the form",
    },
  },

  book: {
    meta: {
      title: "Book now",
      description:
        "Check availability and book your stay at Pensiunea Amonte in Valea Avrigului, 40 minutes from Sibiu. Hot tub & sauna, panoramic terrace.",
    },
    title: "Book your mountain getaway",
    lead: "Choose your dates and we'll get back to you with availability as soon as possible.",
    photos: ["The guesthouse from outside", "A room with a balcony", "Pensiunea Amonte", "Double room", "Hot tub & sauna"],
    groups: "Booking for a group or a team?",
    groupsLink: "See the dedicated page",
    contact: {
      title: "Or contact us directly",
      lead: "If you have special requests or would rather talk the details over by phone.",
      fallback: "email",
      formLabel: "Contact form",
    },
  },
};
