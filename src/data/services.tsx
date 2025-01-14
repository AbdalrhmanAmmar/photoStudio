import React from "react";
import {
  Camera,
  Mountain,
  Palmtree,
  ZoomIn,
  Calendar,
  Shirt,
  ShoppingBag,
  UtensilsCrossed,
} from "lucide-react";

export const services = [
  {
    id: "portrait",
    title: "Portrait Photography",
    description:
      "Mastery in capturing the essence and personality of individuals or groups.",
    icon: <Camera className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1576694040870-b8cbe14b6b49?w=800&h=600&fit=crop",
    fullDescription:
      "Our portrait photography service captures the unique personality and essence of each individual. Whether for professional headshots, family portraits, or personal branding, we create stunning images that tell your story.",
    features: [
      "Professional lighting setup",
      "Multiple outfit changes",
      "Digital retouching",
      "High-resolution images",
      "Print options available",
    ],
    pricing: {
      basic: 199,
      premium: 399,
      professional: 699,
    },
  },
  {
    id: "landscape",
    title: "Landscape Photography",
    description:
      "Expertise in capturing scenic vistas, natural beauty, and environments.",
    icon: <Mountain className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=600&fit=crop",
    fullDescription:
      "Capture the breathtaking beauty of nature with our landscape photography service. From dramatic mountains to serene beaches, we specialize in creating stunning environmental images.",
    features: [
      "Location scouting",
      "Optimal timing for lighting",
      "High-resolution panoramas",
      "Advanced post-processing",
      "Fine art prints available",
    ],
    pricing: {
      basic: 299,
      premium: 599,
      professional: 999,
    },
  },
  {
    id: "wildlife",
    title: "Wildlife Photography",
    description:
      "Skill in capturing animals and their habitats in their natural settings.",
    icon: <Palmtree className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&h=600&fit=crop",
    fullDescription:
      "Get up close with nature through our wildlife photography service. We specialize in capturing animals in their natural habitats, creating stunning images that showcase their beauty and behavior.",
    features: [
      "Professional telephoto lenses",
      "Patient observation",
      "Natural habitat shoots",
      "Behavior documentation",
      "Conservation focus",
    ],
    pricing: {
      basic: 399,
      premium: 799,
      professional: 1499,
    },
  },
  {
    id: "macro",
    title: "Macro Photography",
    description:
      "Specialization in capturing extreme close-up images, often of small subjects.",
    icon: <ZoomIn className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1550159930-40066082a4fc?w=800&h=600&fit=crop",
    fullDescription:
      "Discover the hidden world of tiny details with our macro photography service. From delicate flowers to intricate textures, we reveal the beauty in the smallest subjects.",
    features: [
      "Specialized macro equipment",
      "Focus stacking",
      "High detail capture",
      "Creative compositions",
      "Scientific documentation",
    ],
    pricing: {
      basic: 249,
      premium: 499,
      professional: 899,
    },
  },
  {
    id: "event",
    title: "Event Photography",
    description:
      "Proficiency in documenting events such as weddings, parties, and corporate gatherings.",
    icon: <Calendar className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
    fullDescription:
      "Preserve your special moments with our event photography service. From weddings to corporate events, we capture the energy, emotions, and key moments of your gathering.",
    features: [
      "Multiple photographers available",
      "Timeline planning",
      "Candid and posed shots",
      "Same-day previews",
      "Online gallery",
    ],
    pricing: {
      basic: 599,
      premium: 1299,
      professional: 2499,
    },
  },
  {
    id: "fashion",
    title: "Fashion Photography",
    description:
      "Talent in capturing clothing, accessories, and models for advertising or editorial purposes.",
    icon: <Shirt className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=600&fit=crop",
    fullDescription:
      "Elevate your fashion brand with our professional fashion photography service. We create stunning imagery that showcases your products and captures the essence of your brand.",
    features: [
      "Professional models available",
      "Studio or location shoots",
      "Styling assistance",
      "Look book creation",
      "Editorial quality",
    ],
    pricing: {
      basic: 799,
      premium: 1599,
      professional: 2999,
    },
  },
  {
    id: "product",
    title: "Product Photography",
    description:
      "Skill in photographing products for marketing, e-commerce, or advertising purposes.",
    icon: <ShoppingBag className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop",
    fullDescription:
      "Showcase your products in the best light with our product photography service. We create professional images that drive sales and enhance your brand presence.",
    features: [
      "White background shots",
      "Lifestyle images",
      "360-degree photography",
      "Infographic creation",
      "E-commerce ready",
    ],
    pricing: {
      basic: 299,
      premium: 599,
      professional: 999,
    },
  },
  {
    id: "food",
    title: "Food Photography",
    description:
      "Talent in capturing food and beverages in an appetizing and visually appealing manner.",
    icon: <UtensilsCrossed className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&h=600&fit=crop",
    fullDescription:
      "Make your culinary creations shine with our food photography service. We specialize in making dishes look as delicious as they taste.",
    features: [
      "Professional food styling",
      "Props and backgrounds",
      "Natural and studio lighting",
      "Menu photography",
      "Social media packages",
    ],
    pricing: {
      basic: 349,
      premium: 699,
      professional: 1299,
    },
  },
];
