import { FaPhoneAlt } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { GiCancel } from "react-icons/gi";

const footerLinks = [
  {
    title: "About",
    links: [
      { title: "How it works", url: "/" },
      { title: "Featured", url: "/" },
      { title: "Partnership", url: "/" },
      { title: "Bussiness Relation", url: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "Events", url: "/" },
      { title: "Blog", url: "/" },
      { title: "Podcast", url: "/" },
      { title: "Staff", url: "/admin/sign-in" },
    ],
  },
  {
    title: "Socials",
    links: [
      { title: "Discord", url: "/" },
      { title: "Instagram", url: "/" },
      { title: "Twitter", url: "/" },
      { title: "Facebook", url: "/" },
    ],
  },
];

const people = [
  {
    name: "Jack Thompson",
    role: "Co-Founder / CEO",
    imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Charlotte Brown",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Tom Walker",
    role: "CTO / Tech Head",
    imageUrl: "https://randomuser.me/api/portraits/men/67.jpg",
  },
  {
    name: "Noah Mitchell",
    role: "Product Manager",
    imageUrl: "https://randomuser.me/api/portraits/men/86.jpg",
  },
  {
    name: "Ethan Parker",
    role: "Sales Manager",
    imageUrl: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    name: "Mia Johnson",
    role: "Marketing Head",
    imageUrl: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  // More people...
];

const companyLinks = [
  { name: "Open roles", href: "#/" },
  { name: "Internship program", href: "/" },
  { name: "Our values", href: "/" },
  { name: "Meet our team", href: "/" },
];
const stats = [
  { name: "Offices", value: "2" },
  { name: "Full-time colleagues", value: "20+" },
  { name: "Hours per week", value: "40" },
  { name: "Paid time off", value: "Unlimited" },
];

const posts = [
  {
    id: 1,
    description:
      "Excellent experience! Easy booking, great vehicle selection, and friendly support. Will definitely rent again!",
    author: {
      name: "Michael Foster",
      role: "Customer",
      imageUrl: "https://randomuser.me/api/portraits/men/7.jpg",
    },
  },
  {
    id: 2,
    description:
      "Absolutely seamless experience! Booking was quick and easy, and the car I rented was perfect for my trip. The customer service was fantastic—super friendly and helpful throughout the process. Highly recommend, and I’ll be back next time I need a rental!",
    author: {
      name: "Emily Johnson",
      role: "Customer",
      imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    },
  },
  {
    id: 3,
    description:
      "Couldn't have asked for a better car rental experience. The online booking was smooth, the vehicle was clean and well-maintained, and the team was incredibly professional. They made everything easy from start to finish. I’ll definitely be using this service again!",
    author: {
      name: "James Williams",
      role: "Customer",
      imageUrl: "https://randomuser.me/api/portraits/men/17.jpg",
    },
  },
  {
    id: 4,
    description:
      "I had such a great experience renting a car here! The selection was impressive, and I found the perfect vehicle for my needs. The staff were attentive and made sure everything was set up for me before I left. I will absolutely be renting from them again in the future!",
    author: {
      name: "Olivia Smith",
      role: "Customer",
      imageUrl: "https://randomuser.me/api/portraits/women/7.jpg",
    },
  },
  {
    id: 5,
    description:
      "Fantastic service all around! The booking was straightforward, and the vehicle was exactly what I needed. The customer support team was friendly and helped with any questions I had. I’ll definitely rent from them again—easy, efficient, and reliable!",
    author: {
      name: "Tom Brown",
      role: "Customer",
      imageUrl: "https://randomuser.me/api/portraits/men/67.jpg",
    },
  },
];

const features = [
  {
    name: "24/7 support",
    description:
      "Experience peace of mind with our 24/7 support. We're here anytime to assist you with your rental needs, day or night.",
    icon: FaPhoneAlt,
  },
  {
    name: "Best Market Price",
    description:
      "Enjoy the best market prices with transparent rates, no hidden fees, and exceptional value on our wide range of vehicles.",
    icon: FaAward,
  },
  {
    name: "Verified License",
    description:
      "All our vehicles come with verified licenses, ensuring compliance with regulations and safety standards. Drive with confidence knowing you’re protected.",
    icon: MdVerified,
  },
  {
    name: "Free cancelation",
    description:
      "Enjoy the flexibility of free cancellation on your bookings. Change your plans worry-free, ensuring peace of mind with every reservation.",
    icon: GiCancel,
  },
];

const storeLocations = ["Sydney", "Melbourne", "Brisbane", "Adelaide", "Perth"];
export {
  people,
  companyLinks,
  stats,
  posts,
  features,
  footerLinks,
  storeLocations,
};
