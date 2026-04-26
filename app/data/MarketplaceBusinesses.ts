export interface MarketplaceBusiness {
  id: number;
  name: string;
  imageUrl: string;
  blurb: string;
  description: string;
  website: string;
  founders: string[];
  cohort: string;
}

export const marketplaceBusinesses: MarketplaceBusiness[] = [
  {
    id: 1,
    name: "FreshCart RI",
    imageUrl: "/marketplace/street-market.svg",
    blurb: "Student-run produce delivery from neighborhood farms to Providence families.",
    description:
      "FreshCart RI partners with local growers and high school founders to deliver weekly produce bundles with recipe cards and nutrition tips in English and Spanish.",
    website: "https://freshcartri.example",
    founders: ["Ariana Lopez", "Mason Greene"],
    cohort: "YEP 2.0 - Fall 2025",
  },
  {
    id: 2,
    name: "Threadline Studio",
    imageUrl: "/marketplace/workshop-studio.svg",
    blurb: "Custom upcycled apparel and tote collections designed by youth creators.",
    description:
      "Threadline Studio teaches pattern making and screen printing while selling limited-run apparel built from donated textiles and deadstock fabric.",
    website: "https://threadlinestudio.example",
    founders: ["Noor Siddiqui", "Taylor Kim"],
    cohort: "YEP Summer Camp - 2025",
  },
  {
    id: 3,
    name: "Bridge Tutor",
    imageUrl: "/marketplace/laptop-lab.svg",
    blurb: "Peer tutoring marketplace matching students with multilingual local tutors.",
    description:
      "Bridge Tutor connects K-12 learners with trained student tutors by subject, language, and availability, with low-cost community pricing.",
    website: "https://bridgetutor.example",
    founders: ["Jordan Blake", "Camila Perez"],
    cohort: "YEP 1.0 - Spring 2026",
  },
  {
    id: 4,
    name: "Neighborhood Nosh",
    imageUrl: "/marketplace/community-kitchen.svg",
    blurb: "A youth-led pop-up kitchen spotlighting family recipes and cultural storytelling.",
    description:
      "Neighborhood Nosh hosts monthly dinner pop-ups where student chefs cook heritage meals, document oral histories, and fund scholarships.",
    website: "https://neighborhoodnosh.example",
    founders: ["Fatima Hassan", "Elijah Moore"],
    cohort: "YEP 2.0 - Spring 2025",
  },
  {
    id: 5,
    name: "Pocket Plan",
    imageUrl: "/marketplace/laptop-lab.svg",
    blurb: "Simple budgeting and savings app built for first-time teen entrepreneurs.",
    description:
      "Pocket Plan helps founders track inventory spend, set revenue targets, and split profits between savings goals and reinvestment.",
    website: "https://pocketplan.example",
    founders: ["Ruth Anang", "Leo Martinez", "Kira Song"],
    cohort: "YEP Summer Camp - 2024",
  },
  {
    id: 6,
    name: "FixCycle",
    imageUrl: "/marketplace/workshop-studio.svg",
    blurb: "Mobile bike tune-ups and repairs run by students across local school zones.",
    description:
      "FixCycle provides affordable bike checks, brake adjustments, and safety workshops for families that rely on biking for school and work.",
    website: "https://fixcycle.example",
    founders: ["DeShawn Taylor", "Priya Rao"],
    cohort: "YEP 1.0 - Fall 2025",
  },
  {
    id: 7,
    name: "Bloom Cart",
    imageUrl: "/marketplace/street-market.svg",
    blurb: "Event florals and handmade gift bundles sourced from local growers.",
    description:
      "Bloom Cart creates affordable event decor, graduation bouquets, and gift sets while training founders in pricing and seasonal sourcing.",
    website: "https://bloomcart.example",
    founders: ["Sofia Munoz", "Nyla Brooks"],
    cohort: "YEP 2.0 - Fall 2024",
  },
  {
    id: 8,
    name: "Neighborly Design Co.",
    imageUrl: "/marketplace/community-kitchen.svg",
    blurb: "Branding and social media design studio for local small businesses.",
    description:
      "Neighborly Design Co. offers logo kits, menu design, and social content packages for neighborhood ventures launching on small budgets.",
    website: "https://neighborlydesign.example",
    founders: ["Mina Yu", "Aiden Charles"],
    cohort: "YEP 2.0 - Spring 2026",
  },
];
