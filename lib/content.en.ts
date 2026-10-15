// English content: the counterpart of every language-dependent export in
// lib/content.ts. Each export is typed against the Romanian one, so a missing
// field fails the build, and lib/i18n/index.ts checks that none is missing.
//
// Translated for meaning, in American English, not word for word. Every
// content rule in CLAUDE.md applies here as well (no dashes as punctuation, no
// invented numbers, the riverside is "across the road"). Place names and the
// address stay in Romanian (Valea Avrigului, not "Avrig Valley").
//
// Reviews: the ones written in English are quoted as written; the Romanian
// ones are translated faithfully and carry `translated: true`, which shows a
// "Translated from Romanian" label under them.

import type {
  ABOUT_FEATURES as RO_ABOUT_FEATURES,
  CANCELLATION as RO_CANCELLATION,
  HOSTS as RO_HOSTS,
} from "./content";
import {
  CHECK_IN,
  CHECK_OUT,
  CONTACT,
  groupReviews,
  whatsappUrl,
  type Activity,
  type Amenity,
  type Audience,
  type EventCard,
  type Faq,
  type GalleryItem,
  type NavLink,
  type Review,
  type Room,
  type ServiceDetail,
  type Stat,
} from "./content";
import { href, roomHref } from "./i18n/config";

export const WHATSAPP_URL = whatsappUrl(
  "Hello! I'd like to check availability for a stay at Pensiunea Amonte.",
);


export const STATS: Stat[] = [
  { value: "10", label: "Rooms and studios" },
  { value: "24", label: "Guests" },
  { value: "40 min", label: "From Sibiu" },
];

export const ROOMS: Room[] = [
  {
    slug: "camera-dubla-deluxe",
    name: "Deluxe Double Room",
    spec: "2 guests · spacious · mountain view",
    metaDesc: "Deluxe double room at Pensiunea Amonte in Valea Avrigului, near Sibiu: spacious, with a private balcony, mountain views and breakfast included.",
    desc: "A spacious, elegant room with mountain views and premium touches. Perfect for a getaway for two.",
    longDesc:
      "A premium room with noticeably more space, a large wardrobe and elegant furniture. The view of the Făgăraș Mountains rounds off the stay.",
    price: "650",
    features: [
      "2 guests", "2 rooms of this type",
      "Breakfast included", "Private balcony",
      "Spacious room",
      "Large wardrobe",
      "Mountain view",
      "Heated floors",
    ],
    photo: "/camera-deluxe/pat-tip-1.jpeg",
    cardPhotos: ["/camera-deluxe/1-din-2.jpg", "/camera-deluxe/2-din-2.jpeg"],
    photos: [
      "/camera-deluxe/1-din-2.jpg",
      "/camera-deluxe/2-din-2.jpeg",
      "/camera-deluxe/pat-tip-1.jpeg",
      "/camera-deluxe/baie.jpeg",
    ],
    photoLabel: "[ deluxe double room ]",
  },
  {
    slug: "camera-dubla-vedere-munte",
    name: "Mountain View Double Room",
    spec: "2 guests · private balcony · mountain view",
    metaDesc: "Double room facing the Făgăraș Mountains at Pensiunea Amonte, near Sibiu: a private balcony, heated floors and breakfast included.",
    desc: "A modern room with a private balcony, mountain views and breakfast included. Ideal for a relaxing stay for two.",
    longDesc:
      "A bright, modern room with a private balcony and an open view of the Făgăraș Mountains. Made for couples who want to unwind, with breakfast included and access to all the shared spaces.",
    price: "600",
    features: [
      "2 guests", "4 rooms of this type",
      "Breakfast included",
      "Private balcony",
      "Mountain view",
      "Heated floors",
    ],
    photo: "/camera-dubla-folder/poza-pat-si-camera.jpeg",
    cardPhotos: ["/camera-dubla-folder/poza-pat-si-camera.jpeg", "/camera-dubla-folder/birou-cu-priveliste.jpeg"],
    photos: [
      "/camera-dubla-folder/poza-pat-si-camera.jpeg",
      "/camera-dubla-folder/birou-cu-priveliste.jpeg",
      "/camera-dubla-folder/pat-tip-2.jpeg",
      "/camera-dubla-folder/raft_haine.jpg",
      "/camera-dubla-folder/baie.jpeg",
    ],
    photoLabel: "[ double room ]",
  },
  {
    slug: "studio-de-familie",
    name: "Family Studio",
    spec: "4 guests · double bed + sofa bed",
    metaDesc: "Family studio for 4 at Pensiunea Amonte, near Sibiu: a double bed and a sofa bed, a private balcony and breakfast included.",
    desc: "Spacious and comfortable, a good fit for families and small groups.",
    longDesc:
      "A spacious, comfortable studio with a double bed and a sofa bed, suited to families and small groups of up to 4. Access to all the shared spaces.",
    price: "from 800",
    features: [
      "4 guests", "2 studios of this type", "Breakfast included", "Private balcony",
      "Double bed + sofa bed",
      "Good for families",
      "Heated floors",
    ],
    photo: "/apartament/pat_dormitor.JPG",
    cardPhotos: ["/apartament/canapea_extensibila_living.jpg", "/apartament/chicineta_living.jpg"],
    photos: [
      "/apartament/1-din-2.jpg",
      "/apartament/2-din-2.jpg",
      "/apartament/pat_dormitor.JPG",
      "/apartament/canapea_extensibila_living.jpg",
      "/apartament/chicineta_living.jpg",
      "/apartament/balcon_apartament.JPG",
      "/apartament/baie.JPG",
      "/apartament/detalii_baie_rituals.jpg",
      "/apartament/detalii_hol_bec.jpg",
    ],
    photoLabel: "[ family studio ]",
  },
  {
    // "Cameră cu Balcon" in Romanian; the English name follows it (Flo's choice).
    slug: "camera-cu-balcon",
    name: "Double Room with Balcony",
    spec: "2 guests · private balcony · forest view",
    metaDesc: "Double room with a balcony and forest view at Pensiunea Amonte, Valea Avrigului, near Sibiu: quiet, heated floors, breakfast included.",
    desc: "A bright room with a private balcony facing the forest. Ideal for a quiet stay surrounded by nature.",
    longDesc:
      "This modern room has a private balcony with a calming view of the forest. It is designed for comfort, with breakfast included and access to all of the guesthouse's facilities.",
    price: "550",
    features: [
      "2 guests", "2 rooms of this type",
      "Breakfast included",
      "Private balcony",
      "Forest view",
      "Heated floors",
    ],
    photo: "/camera-balcon/poza-pat.jpeg",
    cardPhotos: ["/camera-balcon/poza-din-pat-catre-birou.jpeg", "/camera-balcon/priveliste.jpeg"],
    photos: [
      "/camera-balcon/poza-jumate-pat-si-bec-noptiera.jpeg",
      "/camera-balcon/poza-din-pat-catre-birou.jpeg",
      "/camera-balcon/poza-pat.jpeg",
      "/camera-balcon/balcon1.jpeg",
      "/camera-balcon/priveliste.jpeg",
      "/camera-balcon/balcon2.jpeg",
      "/camera-balcon/baie.jpeg",
      "/camera-balcon/detalii.jpeg",
    ],
    photoLabel: "[ double room with balcony ]",
  },
];

// Feeds amenityFeature in the English JSON-LD, like its Romanian counterpart.
export const AMENITIES: Amenity[] = [
  { icon: "🧖", label: "Hot tub & sauna", photo: "/jacuzzi-sauna.jpeg", photoLabel: "[ hot tub & sauna ]" },
  { icon: "🔥", label: "Living room with fireplace", photo: "/semineu.jpeg", photoLabel: "[ living room / fireplace ]" },
  { icon: "🏔️", label: "Panoramic terrace", photo: "/priveliste-fagaras.jpg", photoLabel: "[ panoramic terrace ]" },
  { icon: "🪵", label: "Campfire", photo: "/firepit.jpeg", photoLabel: "[ campfire ]" },
  { icon: "🍳", label: "Breakfast", photo: "/servicii-facilitati/mic-dejun.jpg", photoLabel: "[ breakfast ]" },
  { icon: "🍽️", label: "Dinner on request", photo: "/servicii-facilitati/mancare-coaste-porc-iberic.jpeg", photoLabel: "[ dinner on request ]" },
  { icon: "🍸", label: "Bar & lounge", photo: "/servicii-facilitati/bar-lounge.jpeg", photoLabel: "[ bar & lounge ]" },
  { icon: "🎯", label: "Group meeting room", photo: "/servicii-facilitati/sala-pentru-grupuri.jpg", photoLabel: "[ group meeting room ]" },
  { icon: "⚽", label: "Small soccer field", photo: "/servicii-facilitati/teren-fotbal.jpeg", photoLabel: "[ soccer field ]" },
  { icon: "🏓", label: "Ping-pong table", photo: "/servicii-facilitati/ping-pong.jpeg", photoLabel: "[ ping-pong ]" },
  { icon: "🏔️", label: "Whole-property booking available", photo: "/servicii-facilitati/rezervare-integrala.jpeg", photoLabel: "[ whole-property booking ]" },
];

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    id: "inclus",
    icon: "✓",
    title: "What a stay at Amonte includes",
    items: [
      "Accommodation in double rooms and family studios",
      "Breakfast included, served daily",
      "Access to all the shared spaces",
      "A welcoming living room with a fireplace",
      "Panoramic terrace",
      "Free Wi-Fi",
      "Free parking, indoor and outdoor",
      "Mountain views and natural quiet",
    ],
    note: null,
  },
  {
    id: "spa",
    icon: "🧖",
    title: "Spa area: hot tub & sauna",
    items: [
      "Sauna: 2-3 sessions a day, by appointment",
      "Hot tub: open until 10 p.m.",
      "Shared access, in a relaxed and orderly setting",
    ],
    note: "The spa area is available for a fee, subject to availability. Book it at reception.",
  },
  {
    id: "masa",
    icon: "🍳",
    title: "Meals & breakfast",
    items: [
      "Breakfast included, served daily",
      "Dinner on request, available on weekends, from a short menu of 2-3 dishes a day",
    ],
    note: "Dinner is meant to be a relaxed affair, not a classic restaurant experience.",
  },
  {
    id: "bar",
    icon: "🍸",
    title: "Bar & shared spaces",
    items: [
      "Bar open daily until midnight",
      "Shared spaces made for quiet evenings, conversation and unwinding",
    ],
    note: null,
  },
  {
    id: "exterior",
    icon: "🪵",
    title: "Outdoor spaces",
    items: [
      "Panoramic terrace facing the Făgăraș Mountains",
      "A spacious yard",
      "An outdoor campfire spot",
    ],
    note: null,
  },
  {
    id: "ebike",
    icon: "🚲",
    title: "E-bikes",
    items: [
      "5 e-bikes available to rent",
      "Ideal for exploring the area and for easy trails",
    ],
    note: "Availability and details are confirmed at reception or on request.",
  },
];

export const ACTIVITIES: Activity[] = [
  {
    name: "Hiking in the Făgăraș Mountains",
    desc: "Mountain trails to Cabana Bârcaciu, Negoiu and Suru, starting right from Valea Avrigului.",
    dist: "in the area",
    photoLabel: "[ Făgăraș trails ]",
    photo: "/trasee-fagaras.jpg",
  },
  {
    name: "Brambura Park",
    desc: "An adventure park with activities for the whole family.",
    dist: "~10 min",
    photoLabel: "[ Brambura Park ]",
    photo: "/brambura.jpeg",
  },
  {
    name: "Brukenthal Palace",
    desc: "The Brukenthal summer residence and its gardens, in Avrig.",
    dist: "nearby",
    photoLabel: "[ Brukenthal Palace ]",
    photo: "/palatul-bruk.jpg",
  },
  {
    name: "E-bike rentals",
    desc: "E-bikes to rent for mountain trails and rides around the area.",
    dist: "nearby",
    photoLabel: "[ e-bike rentals ]",
    photo: "/ebike.jpeg",
  },
  {
    name: "Horseback riding & ATVs",
    desc: "Outdoor experiences, depending on the season.",
    dist: "seasonal",
    photoLabel: "[ ATV / horseback riding ]",
    photos: ["/calarie.jpeg", "/atv.jpeg"],
  },
  {
    name: "Deer farm",
    desc: "A deer farm at Poiana Neamțului, a visit for the whole family.",
    dist: "~10 min",
    photoLabel: "[ deer farm ]",
    photo: "/ferma-de-cerbi.jpeg",
  },
  {
    name: "Casa Vikingilor",
    desc: "The Viking House, a one-of-a-kind local attraction inspired by Norse culture.",
    dist: "nearby",
    photoLabel: "[ Casa Vikingilor ]",
    photo: "/casa-vikingilor.jpeg",
  },
  {
    name: "Povestea Calendarului",
    desc: "A cultural and art space devoted to the traditional calendar.",
    dist: "nearby",
    photoLabel: "[ Povestea Calendarului ]",
    photo: "/povestea-calendarului.jpeg",
  },
  {
    name: "Corabia Piraților",
    desc: "A beach club in Avrig with a beach and a pirate ship, for kids and families.",
    dist: "nearby",
    photoLabel: "[ Corabia Piraților ]",
    photo: "/Corabia-piratilor.jpeg",
  },
];

export const GALLERY: GalleryItem[] = [
  { photo: "/poza_hero.jpg", label: "Pensiunea Amonte", span: 2 },
  { photo: "/exterior-pensiune.jpeg", label: "The guesthouse from outside", span: 2 },
  { photo: "/jacuzzi-sauna.jpeg", label: "Hot tub & sauna", span: 1 },
  { photo: "/camera-deluxe/pat-tip-1.jpeg", label: "Deluxe room, bedroom", span: 2 },
  { photo: "/camera-dubla-folder/poza-pat-si-camera.jpeg", label: "Double room, bedroom", span: 1 },
  { photo: "/camera-dubla-folder/birou-cu-priveliste.jpeg", label: "Desk with a view", span: 1 },
  { photo: "/camera-dubla-folder/baie.jpeg", label: "Double room, bathroom", span: 1 },
  { photo: "/camera-balcon/poza-pat.jpeg", label: "Room with balcony, bedroom", span: 1 },
  { photo: "/camera-balcon/balcon1.jpeg", label: "Room with balcony, private balcony", span: 1 },
  { photo: "/camera-balcon/priveliste.jpeg", label: "View of the forest", span: 1 },
  { photo: "/camera-deluxe/1-din-2.jpg", label: "Deluxe room, details", span: 1 },
  { photo: "/apartament/pat_dormitor.JPG", label: "Family studio, bedroom", span: 1 },
  { photo: "/apartament/canapea_extensibila_living.jpg", label: "Family studio, living area", span: 2 },
  { photo: "/apartament/chicineta_living.jpg", label: "Family studio, kitchenette", span: 1 },
  { photo: "/apartament/balcon_apartament.JPG", label: "Family studio, private balcony", span: 1 },
  { photo: "/apartament/detalii_baie_rituals.jpg", label: "Rituals toiletries in the bathroom", span: 1 },
  { photo: "/interior-living.jpeg", label: "Living room", span: 2 },
  { photo: "/salon.jpeg", label: "The guesthouse lounge", span: 2 },
  { photo: "/semineu.jpeg", label: "A warm fireplace", span: 1 },
  { photo: "/detaliu-lemn.jpeg", label: "Rustic wood detail", span: 1 },
  { photo: "/priveliste-fagaras.jpg", label: "View of the Făgăraș Mountains", span: 2 },
  { photo: "/firepit.jpeg", label: "Campfire on the terrace, in the evening", span: 1 },
  { photo: "/bruno.jpeg", label: "Bruno", span: 1 },
  { photo: "/ebike.jpeg", label: "E-bike trails", span: 1 },
  { photo: "/trasee-fagaras.jpg", label: "Trails in the Făgăraș Mountains", span: 1 },
];

export const RATING_SUMMARY = { value: "4.9", count: 114 };

export const REVIEWS: Review[] = [
  {
    stars: "★★★★★",
    text: "We had an excellent experience at Pensiunea Amonte. The location is superb, perfect for relaxing and for enjoying the quiet and the scenery. The staff were incredibly friendly.",
    name: "Mihaela Marcuț",
    meta: "Google · a month ago",
    initial: "M",
    translated: true,
  },
  {
    stars: "★★★★★",
    text: "It was a pleasant experience. The staff is very kind, respectful, very focused on the customer's needs. They attend to every request and they create a great atmosphere for everyone.",
    name: "Cosmin Voicu",
    meta: "Google · 7 months ago",
    initial: "C",
  },
  {
    stars: "★★★★★",
    text: "This was a true surprise. It exceeded our expectation. It's situated a 4 minutes drive away from Brambura Park. We've spent a night in august and we found a beautiful and modern place. We had a huge studio with the biggest balcony ever.",
    name: "cosminp20",
    meta: "Tripadvisor · 10 months ago",
    initial: "C",
  },
  {
    stars: "★★★★★",
    text: "Excellent! A really great place, where everything went beyond our expectations. We came with a larger group and rented the whole guesthouse, the best choice we could have made. Everything was top-notch: the facilities, the design, the attention to detail.",
    name: "Adrian Migiu",
    meta: "Google · a month ago",
    initial: "A",
    translated: true,
  },
  {
    stars: "★★★★★",
    text: "We spent a wonderful weekend here with our team. Everything was impeccable, from the organization to the staff, who were extremely kind and attentive to us. The guesthouse itself is superb: everything is new, clean, elegant and well thought out. We had a great time and will gladly come back. We recommend Pensiunea Amonte to anyone who wants to enjoy a beautiful, quiet place that is perfect for relaxing or for team events.",
    name: "Cristina Sosoi",
    meta: "Google · 10 months ago",
    initial: "C",
    translated: true,
  },
  {
    stars: "★★★★★",
    text: "Excellent accommodation. Stayed there for 3 nights during an exhausting e-bike race and could find the best condition to properly relax and recover. If you leave your balcony door open you will hear the river gently flowing.",
    name: "Reini Stadler",
    meta: "Google · 8 months ago",
    initial: "R",
  },
  {
    stars: "★★★★★",
    text: "A 2-day team building that felt more like a well-organized vacation than a “team activity.” The hosts were quick, involved and had a sense of hospitality you rarely come across. The food was very good, the rooms impeccable, and every request was handled without stress or delay. The location is exactly right: nature, quiet and a setting that takes you completely out of your daily routine. They also have a small but elegant spa, perfect for unwinding after the “effort” of socializing with your colleagues. And Bruno, the guesthouse's Bernese Mountain Dog, is clearly the soul of the place: friendly, calm and impossible to ignore. All in all: the kind of place you come to with your colleagues and leave wondering why you didn't come sooner.",
    name: "Dan Velcu",
    meta: "Google · a month ago",
    initial: "D",
    translated: true,
  },
  {
    stars: "★★★★★",
    text: "Great and beautiful new property with a very comfortable stay. Amazing place near the Avrig River, great ambiance. Wonderful views of the mountains.",
    name: "Olga Voskoboinikov",
    meta: "Google · a year ago",
    initial: "O",
  },
  {
    stars: "★★★★★",
    text: "An oasis of calm where you can come on your own or with the kids. Excellent service, new rooms, tasty food, and the sauna completely disconnects you from the stress of the week. We'll gladly come back, especially for Brunooo!",
    name: "Simona-Isabela Hritac",
    meta: "Google · a month ago",
    initial: "S",
    translated: true,
  },
  {
    stars: "★★★★★",
    text: "We had a wonderful stay at this beautiful guesthouse. The surrounding nature is absolutely amazing, and the peaceful atmosphere made it the perfect place to relax. The staff were very kind and attentive, and we felt truly welcomed as a family with one child. We will definitely come back!",
    name: "Jinga Arnold",
    meta: "Google · a month ago",
    initial: "J",
  },
  {
    stars: "★★★★★",
    text: "10 out of 10! The ideal place for a successful team building: I can say it was an impeccable experience from start to finish! The staff: absolutely outstanding! Extremely friendly, responsive people, attentive to all of our group's needs. They made sure we had everything we needed. The food: delicious, varied and fresh. Congratulations to the cooks, the whole team was impressed! The atmosphere: good music rounded off our evenings of relaxing and fun. The accommodation: the rooms are very clean, well kept and airy, exactly what you need after a day full of activities. The highlight? The superb view of the mountains, which takes your breath away and recharges you instantly. I wholeheartedly recommend this place for any corporate event or team getaway! We'll definitely be back.",
    name: "Filip Mihaela",
    meta: "Google · a month ago",
    initial: "F",
    translated: true,
  },
  {
    stars: "★★★★★",
    text: "A dream mini-vacation at the foot of the mountains! Ten-star hosts, ten-star service, ten-star cleanliness! We'll definitely be back!",
    name: "Mariana Cordoș",
    meta: "Google · a month ago",
    initial: "M",
    translated: true,
  },
];

export const GROUP_REVIEWS = groupReviews(REVIEWS);

export const PRIVATE_EVENTS_WHATSAPP = whatsappUrl(
  "Hello, I'd like information about a private event at Pensiunea Amonte",
);

export const NAV_LINKS: readonly NavLink[] = [
  { href: href("en", "about"), label: "About" },
  { href: href("en", "rooms"), label: "Rooms" },
  { href: href("en", "gallery"), label: "Gallery" },
  { href: href("en", "activities"), label: "Things to do" },
  { href: href("en", "services"), label: "Services" },
  {
    href: href("en", "events"),
    label: "Events",
    children: [
      { href: href("en", "corporate"), label: "Retreats and team building" },
      {
        href: PRIVATE_EVENTS_WHATSAPP,
        label: "Private events",
        whatsapp: true,
        // Same page_source as on the Romanian site: one funnel, two languages.
        pageSource: "evenimente-private-cta",
      },
    ],
  },
];

export const AUDIENCES: Audience[] = [
  {
    title: "A getaway for two",
    tagline: "Quiet, a view and time just for the two of you",
    body: "Rooms with private balconies and mountain views, a hot tub and sauna (for a fee), evenings by the fireplace. A place where you can both slow down, far from the noise.",
    highlights: ["Mountain view room", "Hot tub & sauna (for a fee)", "Living room with fireplace"],
    ctaLabel: "See the rooms",
    ctaHref: roomHref("en", "camera-dubla-deluxe"),
  },
  {
    title: "A family vacation",
    tagline: "Space, nature and quiet for the whole family",
    body: "Spacious studios, a safe yard and activities close by: the deer farm, Brambura Park, walks in nature. An oasis of calm where you can bring the kids and actually relax.",
    highlights: ["Family studios", "Activities for kids nearby", "Yard & nature"],
    ctaLabel: "See things to do",
    ctaHref: href("en", "activities"),
  },
  {
    title: "A group or a team",
    tagline: "Book the whole guesthouse, a place that is yours alone",
    body: "Amonte can be rented in full for up to 24 people, with a dedicated meeting room for groups. Ideal for team building, retreats or trips with friends: nature, a spa and comfort, without sharing the space with anyone.",
    highlights: ["Whole-property rental (up to 24 people)", "Group meeting room", "Spa & terrace"],
    ctaLabel: "Request a group offer",
    ctaHref: href("en", "corporate"),
    ctaPrimary: true,
  },
];

export const HOSTS: typeof RO_HOSTS = {
  eyebrow: "Your hosts",
  title: "People, not just a guesthouse",
  photo: null,
  body: [
    "At Amonte, the people make the difference. We're a young, committed team that cares about every detail, from spotless rooms to a good cup of coffee in the morning. We like to stay close to our guests and make sure they have everything they need throughout their stay.",
    "You'll always find us on hand for a trail recommendation, a tip about the area or simply a story by the fire in the evening. And Bruno, our Bernese Mountain Dog, is always the first to greet our guests.",
  ],
};

export const CANCELLATION: typeof RO_CANCELLATION = {
  eyebrow: "Cancellation policy",
  promiseTitle: "Your confirmed booking is guaranteed.",
  promiseSub: "We never cancel a confirmed booking at Amonte. Your place stays yours.",
  details: [
    "A booking is confirmed with a 30% deposit (or an amount we agree on together).",
    "Cancel at least 7 days before arrival: the deposit is refunded in full.",
    "Cancel less than 7 days before arrival: the deposit is kept.",
    "No-show: the deposit is kept.",
    "For whole-property rentals (groups), free cancellation runs until 28 days before arrival, since the entire property is reserved.",
    "Changing your dates is possible, subject to availability. Message us on WhatsApp and we'll find a solution.",
  ],
  note: "The policy above applies to direct bookings (WhatsApp, phone, website). Bookings made through Booking.com, Airbnb or other online booking platforms follow that platform's cancellation policy, as shown at the time of booking.",
  faqs: [
    {
      q: "What is your cancellation policy?",
      a: "A confirmed booking is guaranteed on our side. If you cancel at least 7 days before arrival (or 28 days for groups renting the whole property), the 30% deposit is refunded in full. After that, the deposit is kept. The policy applies only to direct bookings (WhatsApp, phone, website).",
    },
    {
      q: "Can I change my booking?",
      a: "Yes, subject to availability. Message us on WhatsApp and we'll find a solution together.",
    },
  ],
};

// ── /en/about-us ── FAQ (1:1 with the FAQPage JSON-LD), features, facilities ──

export const ABOUT_FAQ_BASE: Faq[] = [
  {
    q: "Where is Pensiunea Amonte?",
    a: "At Valea Avrigului nr. 642, in Sibiu County, at the foot of the Făgăraș Mountains, about 40 minutes from Sibiu.",
  },
  {
    q: "How many guests can you host?",
    a: "We have 10 units, 8 double rooms and 2 family studios, for up to 24 guests in total.",
  },
  {
    q: "Do you allow pets?",
    a: "No, we don't accept guests' pets. The only four-legged resident is Bruno, the house mascot, a Bernese Mountain Dog.",
  },
  {
    q: "What is there to help you relax?",
    a: "Amonte has a hot tub, a sauna, a living room with a fireplace, a panoramic terrace, a campfire and a bar. Across the road, on the riverbank, there is also an area where guests can relax outdoors.",
  },
  {
    q: "Can a group book the entire guesthouse?",
    a: "Yes. Amonte can be booked in full for up to 24 people, which suits family stays, retreats or corporate trips, with a dedicated meeting room for groups.",
  },
  {
    q: "What sights and activities are nearby?",
    a: "Trails start right from Valea Avrigului toward Cabana Bârcaciu, Negoiu and Suru, with routes for every level. Brambura Park and the deer farm at Poiana Neamțului are about 10 minutes away. Brukenthal Palace (Avrig), the Clay Castle (Porumbacu de Sus), Casa Vikingilor and Povestea Calendarului are all close to the guesthouse.",
  },
  {
    q: "How far are you from Sibiu and the Transfăgărășan?",
    a: "Sibiu is about 40 minutes away by car, 35 km. The Transfăgărășan road and Bâlea Waterfall are about an hour away and open seasonally.",
  },
  {
    q: "What are the check-in and check-out times?",
    a: `Check-in from 3 p.m. (${CHECK_IN}). Check-out by noon (${CHECK_OUT}).`,
  },
  {
    q: "How do I book?",
    a: `Directly, on WhatsApp at ${CONTACT.phoneMobile}.`,
  },
  ...CANCELLATION.faqs,
];

// Questions about meals and the bar, shown when SHOW_FB_AND_EVENTS is on.
export const ABOUT_FAQ_FB: Faq[] = [
  {
    q: "Is breakfast served?",
    a: "Yes, breakfast is included in the rate.",
  },
  {
    q: "Do you have a bar?",
    a: "Yes. The Amonte bar serves drinks and craft cocktails, including Amonte Spirit, a signature cocktail made with fir syrup.",
  },
  {
    q: "Can I host a private or corporate event at Amonte?",
    a: "Yes. Amonte can be booked in full and offers a private setting for corporate retreats, team building, work sessions and family events, for up to 24 people.",
  },
];

export const ABOUT_FEATURES: typeof RO_ABOUT_FEATURES = [
  {
    icon: "🏠",
    title: "Boutique, not a hotel",
    body: "With just 10 units and room for 24 guests, we know our guests by name, fit each stay to their pace and keep the quiet a mountain place should have.",
  },
  {
    icon: "🛁",
    title: "Rest and spa",
    body: "A hot tub, a sauna, a living room with a fireplace and a terrace facing the Făgăraș Mountains, all made for switching off. After a day in the mountains, coming back to Amonte is the quiet part of the day.",
  },
  {
    icon: "🏔️",
    title: "Nature on the doorstep",
    body: "We sit at the foot of the highest range in the Romanian Carpathians. From here you can set out for Cabana Bârcaciu, Negoiu and Suru, on trails for every level.",
  },
  {
    icon: "🤝",
    title: "Retreats & corporate",
    body: "Because the whole property can be booked, Amonte becomes a private space for corporate retreats, team building, work sessions or family events.",
  },
  {
    icon: "🐾",
    title: "Bruno, our four-legged host",
    body: "The house mascot is Bruno, a Bernese Mountain Dog who greets our guests. We don't accept other pets, though, so everyone can enjoy the quiet.",
  },
  {
    icon: "🌄",
    title: "40 minutes from Sibiu",
    body: "Brambura Park and the deer farm at Poiana Neamțului are about 10 minutes away, and Sibiu's medieval center is about 40 minutes by car.",
  },
];

export const ABOUT_FACILITIES: string[] = [
  "10 units: 8 double rooms + 2 family studios",
  "Capacity of 24 guests",
  "Heated floors",
  "Hot tub",
  "Sauna",
  "Living room with fireplace",
  "Panoramic terrace",
  "Campfire",
  "Bar and lounge",
  "Meeting room for groups and companies",
  "Small soccer field",
  "Ping-pong table",
  "Free Wi-Fi",
  "Free parking, indoor and outdoor",
  "Whole-property booking available",
];

// Shown only when SHOW_FB_AND_EVENTS is on (see the page).
export const ABOUT_FACILITIES_FB: string[] = ["Breakfast included"];

// Note on the room pages, under the price.
export const ROOM_SPA_NOTE = "Spa area (hot tub & sauna) on request.";

// ── /en/events ── the two directions: corporate and private ──
export const EVENT_CARDS: EventCard[] = [
  {
    eyebrow: "Corporate",
    title: "Retreats and team building",
    body: "An exclusive team getaway with a meeting room, a flexible agenda and all the logistics sorted before you arrive.",
    points: ["Group meeting room", "Complete offer within 24 business hours", "Invoiced to your company"],
    photo: "/retreat/sala-evenimente.jpg",
    photoLabel: "[ PHOTO: meeting room set up boardroom or U-style, with the team at the table ]",
    alt: "The group meeting room at Pensiunea Amonte, with chairs set up for a presentation",
    href: href("en", "corporate"),
    cta: "See the page for teams",
    whatsapp: false,
  },
  {
    eyebrow: "Private",
    title: "Private events",
    body: "Birthdays, christenings, family parties or getaways with friends, with the whole property reserved just for you.",
    points: ["Accommodation for up to 24 guests", "Meals prepared at the guesthouse", "One group at a time"],
    photo: "/salon.jpeg",
    photoLabel: "[ PHOTO: lounge set up for a private event ]",
    alt: "The Pensiunea Amonte lounge, set up for a private event",
    href: PRIVATE_EVENTS_WHATSAPP,
    cta: "Ask on WhatsApp",
    whatsapp: true,
  },
];
