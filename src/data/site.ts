/* ============================================================
   SA PUNE FURNITURE — Editable Site Data / CMS-ready config
   ------------------------------------------------------------
   Update phone numbers, address, links, products, reels etc here.
   Do NOT invent facts — placeholders are marked with "EDIT:".
   ============================================================ */

export const business = {
  name: "SA Pune Furniture",
  tagline: "Furniture crafted for modern living.",
  city: "Pune, Maharashtra, India",
  // EDIT: replace with real numbers when available
  phoneDisplay: "+91 XXXXX XXXXX",
  phoneHref: "tel:+910000000000",
  whatsappDisplay: "WhatsApp Us",
  whatsappNumber: "910000000000", // EDIT: digits only, e.g. 919876543210
  email: "hello@example.com", // EDIT
  address: "Showroom address — EDIT: add full address, Pune", // EDIT
  hours: "Mon – Sun · 10:00 AM – 8:30 PM", // EDIT
  mapsUrl: "https://maps.google.com/?q=Pune,Maharashtra", // EDIT: Google Maps listing URL
  instagram: "https://www.instagram.com/sa_pune_furniture",
  instagramHandle: "@sa_pune_furniture",
  facebook: "https://facebook.com/", // EDIT
};

export const waLink = (message: string) =>
  `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Furniture", href: "#furniture" },
  { label: "Collections", href: "#collections" },
  { label: "Our Work", href: "#work" },
  { label: "Reels", href: "#reels" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

/* ---------------- Collections ---------------- */
export type Collection = {
  id: string;
  name: string;
  description: string;
  image: string;
  alt: string;
  pieces: string;
};

export const collections: Collection[] = [
  {
    id: "sofas",
    name: "Sofas",
    description: "Deep seats, plush comfort & tailored upholstery",
    image:
      "https://images.pexels.com/photos/8082229/pexels-photo-8082229.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Premium blue fabric sofa in an elegant Pune living room",
    pieces: "Living · Lounge · Sectionals",
  },
  {
    id: "beds",
    name: "Beds",
    description: "Upholstered & wooden beds for restful bedrooms",
    image:
      "https://images.pexels.com/photos/7546276/pexels-photo-7546276.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Modern upholstered bed with plush headboard in warm bedroom",
    pieces: "King · Queen · Storage Beds",
  },
  {
    id: "dining",
    name: "Dining Tables",
    description: "Gather around solid, timeless dining pieces",
    image:
      "https://images.pexels.com/photos/5998031/pexels-photo-5998031.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Classic wooden dining table with chairs in bright dining room",
    pieces: "4 · 6 · 8 Seater",
  },
  {
    id: "chairs",
    name: "Chairs",
    description: "Accent, lounge & dining chairs with character",
    image:
      "https://images.pexels.com/photos/14336545/pexels-photo-14336545.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Vintage wooden armchair with striped cushion in warm light",
    pieces: "Lounge · Accent · Dining",
  },
  {
    id: "storage",
    name: "Storage Furniture",
    description: "Wardrobes, cabinets & shelves that organise beautifully",
    image:
      "https://images.pexels.com/photos/38697208/pexels-photo-38697208.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Modern light wood wardrobe with sleek black handles",
    pieces: "Wardrobes · Cabinets · Shelves",
  },
  {
    id: "custom",
    name: "Custom Furniture",
    description: "Made-to-measure pieces for your exact space",
    image:
      "https://images.pexels.com/photos/30907892/pexels-photo-30907892.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Craftsman shaping wood with hand tools in furniture workshop",
    pieces: "Made to Order · Bespoke",
  },
];

/* ---------------- Products ---------------- */
export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  alt: string;
  price?: string; // optional — omit when unavailable
  tag?: string;
};

export const products: Product[] = [
  {
    id: "aurelia-sofa",
    name: "Aurelia 3-Seater Sofa",
    category: "Sofas",
    description: "Deep-cushioned comfort in a tailored silhouette, built for slow evenings.",
    image:
      "https://images.pexels.com/photos/33349415/pexels-photo-33349415.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Elegant modern blue three seater sofa in styled living room",
    tag: "Bestseller",
  },
  {
    id: "serene-bed",
    name: "Serene Upholstered Bed",
    category: "Beds",
    description: "Soft headboard, solid frame and calm proportions for restful sleep.",
    image:
      "https://images.pexels.com/photos/8135505/pexels-photo-8135505.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Cozy modern bedroom with green bedding and soft lighting",
    tag: "New",
  },
  {
    id: "marble-dining",
    name: "Marble-Top Dining Set",
    category: "Dining Tables",
    description: "Statement marble top with refined seating for memorable gatherings.",
    image:
      "https://images.pexels.com/photos/14598479/pexels-photo-14598479.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Modern dining room with marble table and gold accents",
  },
  {
    id: "rattan-lounge",
    name: "Rattan Lounge Chair",
    category: "Chairs",
    description: "Hand-finished rattan and wood — a warm accent for any corner.",
    image:
      "https://images.pexels.com/photos/14332476/pexels-photo-14332476.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Vintage rattan armchair with elegant wooden frame",
    tag: "Handcrafted",
  },
  {
    id: "osu-wardrobe",
    name: "Osmo Wooden Wardrobe",
    category: "Storage",
    description: "Clean lines, generous storage and a warm natural grain finish.",
    image:
      "https://images.pexels.com/photos/7061419/pexels-photo-7061419.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Contemporary wooden wardrobe with shelves and drawers",
  },
  {
    id: "atelier-coffee",
    name: "Atelier Coffee Table",
    category: "Living Room",
    description: "Sculptural marble and wood centrepiece for considered living rooms.",
    image:
      "https://images.pexels.com/photos/6283831/pexels-photo-6283831.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Stylish marble coffee table with elegant dinnerware",
  },
  {
    id: "nook-bedroom",
    name: "Nook Bedroom Suite",
    category: "Beds",
    description: "A complete calm — bed, side tables and ambient-ready styling.",
    image:
      "https://images.pexels.com/photos/8082562/pexels-photo-8082562.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Elegant modern bedroom with stylish bed and ambient lighting",
  },
  {
    id: "ember-accent",
    name: "Ember Accent Chair",
    category: "Chairs",
    description: "Bold comfort in rich upholstery with solid wooden legs.",
    image:
      "https://images.pexels.com/photos/12212553/pexels-photo-12212553.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Stylish red armchair with wooden legs in minimalist room",
  },
  {
    id: "grain-cabinet",
    name: "Grain Storage Cabinet",
    category: "Storage",
    description: "Timeless timber cabinet with drawers — order for any room.",
    image:
      "https://images.pexels.com/photos/6508355/pexels-photo-6508355.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Contemporary timber cabinet with drawers and shelf",
    tag: "Customisable",
  },
];

/* ---------------- Reels (CMS-ready) ----------------
   HOW TO MANAGE:
   - Add a reel: append { id, title, thumbnail, reelUrl, category, date }
   - reelUrl must be the real Instagram Reel link.
   - If Instagram API is connected later, replace this array with API data.
--------------------------------------------------- */
export type Reel = {
  id: string;
  title: string;
  thumbnail: string;
  reelUrl: string;
  category: string;
  date: string;
  views?: string;
};

export const reels: Reel[] = [
  {
    id: "reel-1",
    title: "Sofa Detailing — From Frame to Finish",
    thumbnail:
      "https://images.pexels.com/photos/15743375/pexels-photo-15743375.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    reelUrl: "https://www.instagram.com/sa_pune_furniture/",
    category: "Craftsmanship",
    date: "EDIT date",
    views: "12.4K",
  },
  {
    id: "reel-2",
    title: "Bedroom Makeover in Kothrud",
    thumbnail:
      "https://images.pexels.com/photos/27638174/pexels-photo-27638174.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    reelUrl: "https://www.instagram.com/sa_pune_furniture/",
    category: "Finished Spaces",
    date: "EDIT date",
    views: "8.1K",
  },
  {
    id: "reel-3",
    title: "Solid Wood Wardrobe Build",
    thumbnail:
      "https://images.pexels.com/photos/38697208/pexels-photo-38697208.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    reelUrl: "https://www.instagram.com/sa_pune_furniture/",
    category: "Workshop",
    date: "EDIT date",
    views: "21K",
  },
  {
    id: "reel-4",
    title: "Hand-Finishing a Lounge Chair",
    thumbnail:
      "https://images.pexels.com/photos/14336545/pexels-photo-14336545.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    reelUrl: "https://www.instagram.com/sa_pune_furniture/",
    category: "Craftsmanship",
    date: "EDIT date",
    views: "6.7K",
  },
  {
    id: "reel-5",
    title: "Sunlit Dining Corner Styling",
    thumbnail:
      "https://images.pexels.com/photos/18447739/pexels-photo-18447739.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    reelUrl: "https://www.instagram.com/sa_pune_furniture/",
    category: "Styling",
    date: "EDIT date",
    views: "9.3K",
  },
  {
    id: "reel-6",
    title: "Precision Joinery in Our Workshop",
    thumbnail:
      "https://images.pexels.com/photos/30907891/pexels-photo-30907891.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    reelUrl: "https://www.instagram.com/sa_pune_furniture/",
    category: "Workshop",
    date: "EDIT date",
    views: "15.2K",
  },
];

/* ---------------- Instagram feed ---------------- */
export type FeedPost = {
  id: string;
  image: string;
  alt: string;
  type: "reel" | "photo" | "workshop";
  label: string;
};

export const feedPosts: FeedPost[] = [
  {
    id: "f1",
    image:
      "https://images.pexels.com/photos/30907888/pexels-photo-30907888.jpeg?auto=compress&cs=tinysrgb&w=700",
    alt: "Hands adjusting a plane tool on a wooden plank",
    type: "workshop",
    label: "Workshop",
  },
  {
    id: "f2",
    image:
      "https://images.pexels.com/photos/7614536/pexels-photo-7614536.jpeg?auto=compress&cs=tinysrgb&w=700",
    alt: "Modern grey couch with candles on round table",
    type: "photo",
    label: "Styling",
  },
  {
    id: "f3",
    image:
      "https://images.pexels.com/photos/37358117/pexels-photo-37358117.jpeg?auto=compress&cs=tinysrgb&w=700",
    alt: "Craftsman smoothing wood with a hand plane",
    type: "workshop",
    label: "Craft",
  },
  {
    id: "f4",
    image:
      "https://images.pexels.com/photos/20559522/pexels-photo-20559522.jpeg?auto=compress&cs=tinysrgb&w=700",
    alt: "Classy interior with vase of yellow tulips by mirror",
    type: "photo",
    label: "Decor",
  },
  {
    id: "f5",
    image:
      "https://images.pexels.com/photos/6952332/pexels-photo-6952332.jpeg?auto=compress&cs=tinysrgb&w=700",
    alt: "Minimalist decor with black vase and sculpture",
    type: "photo",
    label: "Details",
  },
  {
    id: "f6",
    image:
      "https://images.pexels.com/photos/19536432/pexels-photo-19536432.jpeg?auto=compress&cs=tinysrgb&w=700",
    alt: "Elegant vase with dried branches against neutral wall",
    type: "reel",
    label: "Reel",
  },
];

/* ---------------- Gallery ---------------- */
export type Work = {
  id: string;
  image: string;
  alt: string;
  category: "Living Room" | "Bedroom" | "Dining" | "Office" | "Custom Furniture";
  title: string;
  tall?: boolean;
};

export const works: Work[] = [
  {
    id: "w1",
    image:
      "https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Spacious modern living room with plush sofa and chandeliers",
    category: "Living Room",
    title: "Layered Neutrals Living Room",
  },
  {
    id: "w2",
    image:
      "https://images.pexels.com/photos/27638174/pexels-photo-27638174.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Stylish bedroom with double bed and wooden walls",
    category: "Bedroom",
    title: "Warm Timber Bedroom",
    tall: true,
  },
  {
    id: "w3",
    image:
      "https://images.pexels.com/photos/14598479/pexels-photo-14598479.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Modern dining room with marble table and gold accents",
    category: "Dining",
    title: "Marble & Brass Dining",
  },
  {
    id: "w4",
    image:
      "https://images.pexels.com/photos/13131066/pexels-photo-13131066.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Minimalist office shelf with decor items",
    category: "Office",
    title: "Minimal Home Office Shelf",
    tall: true,
  },
  {
    id: "w5",
    image:
      "https://images.pexels.com/photos/7046002/pexels-photo-7046002.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Contemporary dining room with table and chairs",
    category: "Dining",
    title: "Everyday Dining in Oak",
  },
  {
    id: "w6",
    image:
      "https://images.pexels.com/photos/5711775/pexels-photo-5711775.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Carpenter shaping wooden detail at workbench",
    category: "Custom Furniture",
    title: "In the Making — Solid Wood",
    tall: true,
  },
  {
    id: "w7",
    image:
      "https://images.pexels.com/photos/6585610/pexels-photo-6585610.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Minimalist wooden furniture with shelves and wardrobe",
    category: "Living Room",
    title: "Calm Storage Wall",
  },
  {
    id: "w8",
    image:
      "https://images.pexels.com/photos/7214474/pexels-photo-7214474.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Spacious bedroom with bed, TV unit and wardrobe",
    category: "Bedroom",
    title: "Complete Bedroom Story",
  },
  {
    id: "w9",
    image:
      "https://images.pexels.com/photos/7846117/pexels-photo-7846117.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Modern kitchen with wooden table and chairs",
    category: "Dining",
    title: "Blue & Timber Breakfast Nook",
    tall: true,
  },
];

/* ---------------- Features / Why us ---------------- */
export const features = [
  {
    id: "craft",
    title: "Premium Craftsmanship",
    text: "Carefully built furniture with clean joinery and refined finishing.",
  },
  {
    id: "custom",
    title: "Custom Designs",
    text: "Made-to-measure pieces designed around your space and lifestyle.",
  },
  {
    id: "materials",
    title: "Quality Materials",
    text: "Thoughtfully selected wood, fabrics and hardware for longevity.",
  },
  {
    id: "modern",
    title: "Modern Designs",
    text: "Contemporary silhouettes that sit beautifully in Indian homes.",
  },
  {
    id: "detail",
    title: "Attention To Detail",
    text: "Every edge, stitch and polish is checked before delivery.",
  },
  {
    id: "support",
    title: "Customer Support",
    text: "Friendly guidance from enquiry and design to delivery in Pune.",
  },
];

/* ---------------- Process ---------------- */
export const processSteps = [
  { no: "01", title: "Share Your Requirement", text: "Tell us size, style, material and budget." },
  { no: "02", title: "Discuss Design", text: "We refine drawings, fabrics and finishes with you." },
  { no: "03", title: "Get Your Quote", text: "Transparent pricing with clear timelines." },
  { no: "04", title: "Production", text: "Your piece is crafted and quality-checked." },
  { no: "05", title: "Delivery", text: "Careful delivery and installation in Pune." },
];

/* ---------------- Testimonials (placeholders — replace with real reviews) ---------------- */
export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  location: string;
  placeholder?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "EDIT: Customer review placeholder — add a genuine review from a Pune customer once available.",
    name: "Customer Name",
    location: "Pune",
    placeholder: true,
  },
  {
    id: "t2",
    quote:
      "EDIT: Customer review placeholder — custom furniture experience, quality and delivery feedback.",
    name: "Customer Name",
    location: "Pune",
    placeholder: true,
  },
  {
    id: "t3",
    quote:
      "EDIT: Customer review placeholder — showroom visit and design consultation experience.",
    name: "Customer Name",
    location: "Pune",
    placeholder: true,
  },
];

export const marqueeItems = [
  "Custom Furniture",
  "Premium Materials",
  "Modern Design",
  "Quality Craftsmanship",
  "Pune",
  "Made for Indian Homes",
];

export const furnitureTypes = [
  "Sofa",
  "Bed",
  "Dining Table",
  "Chairs",
  "Wardrobe / Storage",
  "TV Unit",
  "Office Furniture",
  "Full Home Furniture",
  "Other Custom Requirement",
];
