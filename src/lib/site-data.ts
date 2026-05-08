import {
  Hammer, Home as HomeIcon, Paintbrush, Trees, Wrench, ShieldCheck,
} from "lucide-react";

export const services = [
  {
    icon: HomeIcon,
    title: "Home Construction",
    description:
      "From foundation to finish — bespoke residential builds engineered to outlast generations.",
  },
  {
    icon: Hammer,
    title: "Building Remodels",
    description:
      "Reimagining existing structures with structural integrity and contemporary craft.",
  },
  {
    icon: Paintbrush,
    title: "Interior Design",
    description:
      "Considered interiors that balance material, light and the rhythms of how you live.",
  },
  {
    icon: Trees,
    title: "Exterior Design",
    description:
      "Facades, landscapes and outdoor architecture that frame the home with intention.",
  },
  {
    icon: Wrench,
    title: "Renovation",
    description:
      "Surgical restoration of period properties with respect for original detail.",
  },
  {
    icon: ShieldCheck,
    title: "Safety Management",
    description:
      "CDM-compliant site management — every project delivered with rigour and care.",
  },
] as const;

import interior from "@/assets/project-interior.jpg";
import brick from "@/assets/project-brick.jpg";
import extension from "@/assets/project-extension.jpg";
import bath from "@/assets/project-bath.jpg";
import landscape from "@/assets/project-landscape.jpg";
import paint from "@/assets/project-paint.jpg";
import newbuild from "@/assets/project-newbuild.jpg";

export const categories = [
  "All",
  "Brickwork",
  "Landscaping",
  "Extensions",
  "Outhouses",
  "Valuation",
  "Mortgage Services",
  "Painting",
  "Washroom & Tiles",
  "Roofing",
  "New Build Flats",
  "Letting",
] as const;

export type Category = (typeof categories)[number];

export const projects: {
  title: string;
  category: Exclude<Category, "All">;
  location: string;
  year: string;
  image: string;
  span?: "wide" | "tall" | "square";
}[] = [
  { title: "Spitalfields Townhouse", category: "Extensions", location: "London E1", year: "2024", image: extension, span: "wide" },
  { title: "Herringbone Hall", category: "Painting", location: "Hampstead NW3", year: "2024", image: interior, span: "tall" },
  { title: "Marble & Brass", category: "Washroom & Tiles", location: "Mayfair W1", year: "2023", image: bath, span: "tall" },
  { title: "Brick Lane Restoration", category: "Brickwork", location: "Shoreditch E2", year: "2023", image: brick, span: "square" },
  { title: "Garden Pavilion", category: "Landscaping", location: "Richmond TW9", year: "2024", image: landscape, span: "wide" },
  { title: "Cobalt Studio", category: "Painting", location: "Islington N1", year: "2024", image: paint, span: "square" },
  { title: "Whitechapel Flats", category: "New Build Flats", location: "London E1", year: "2025", image: newbuild, span: "wide" },
];

export const stats = [
  { value: "17", label: "Years of practice" },
  { value: "240+", label: "Projects delivered" },
  { value: "98%", label: "Client referrals" },
  { value: "12", label: "Boroughs served" },
] as const;
