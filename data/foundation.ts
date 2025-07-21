import { StaticImageData } from "next/image";
import helpingHandsImg from "../assets/about/helping-hands.jpg";
import educationImg from "../assets/about/education.jpg";
import healthImg from "../assets/about/health.jpg";
import treeImg from "../assets/about/tree-planting.jpg";

export type FoundationType = {
  title: string;
  description: string;
  image: StaticImageData;
};

export const foundationData: FoundationType[] = [
  {
    title: "The Essence of Our Giving Back Initiative",
    description:
      "Our Giving Back Initiative is more than a program; it's the embodiment of our core values—empathy, compassion, and a deep-seated belief in the power of community. Through this initiative, we actively engage in projects that address pressing societal challenges, from supporting local education and healthcare to fostering environmental sustainability and economic empowerment. Each project is a testament to our unwavering commitment to making a tangible difference in the lives of those who need it most.",
    image: helpingHandsImg,
  },
  {
    title: "Empowering Through Education and Opportunity",
    description:
      "Education is the cornerstone of progress. Recognizing this, our Giving Back Initiative focuses on creating educational opportunities for underserved communities. By partnering with local schools and educational organizations, we provide resources, mentorship, and scholarships to empower the next generation of leaders. These efforts not only enhance individual futures but also contribute to the broader societal fabric by fostering a well-educated populace.",
    image: educationImg,
  },
  {
    title: "Enhancing Health and Well-being",
    description:
      "Health is wealth, and we are dedicated to ensuring that all individuals have access to quality healthcare services. Our initiative supports health clinics, mental health programs, and wellness campaigns aimed at improving the overall well-being of our communities. By addressing both physical and mental health needs, we strive to create environments where individuals can thrive and lead fulfilling lives.",
    image: healthImg,
  },
  {
    title: "Promoting Environmental Sustainability",
    description:
      "Our planet is our shared home, and its preservation is our collective responsibility. Through our Giving Back Initiative, we engage in environmental conservation projects, such as tree planting, waste reduction programs, and awareness campaigns on sustainable practices. These efforts are designed to protect natural resources, promote biodiversity, and ensure a healthier environment for future generations.",
    image: treeImg,
  },
];
