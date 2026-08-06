export type SocialIcon = "scholar" | "github" | "linkedin" | "orcid" | "researchgate";

export interface Social {
  label: string;
  href: string;
  icon: SocialIcon;
}

export const profile = {
  name: "Ramzi Khantouchi",
  role: "Ph.D. Student in Artificial Intelligence",
  affiliation: "El Tarf University",
  location: "El Tarf, Algeria",
  email: "r.khantouchi@univ-eltarf.dz",
  emailDisplay: "r.khantouchi[AT]univ-eltarf.dz",
  photo: "/img/ramzi-khantouchi.jpg",
  about:
    "I am a PhD student in Artificial Intelligence with expertise in a variety of areas, including machine learning, deep learning, self-supervised learning, reinforcement learning, computer vision, natural language processing, and recommender systems. My research focuses on developing innovative deep learning algorithms that can effectively tackle complex real-world problems.",
  researchAreas: [
    "Machine Learning",
    "Deep Learning",
    "Reinforcement Learning",
    "Self-Supervised Learning",
    "Computer Vision",
    "Natural Language Processing",
    "Recommender Systems",
  ],
  socials: [
    {
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?view_op=list_works&hl=en&user=pd__4l4AAAAJ",
      icon: "scholar",
    },
    {
      label: "GitHub",
      href: "https://github.com/ramzikhantouchi",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rk101/",
      icon: "linkedin",
    },
    {
      label: "ORCID",
      href: "https://orcid.org/0009-0009-5391-9022",
      icon: "orcid",
    },
    {
      label: "ResearchGate",
      href: "https://www.researchgate.net/profile/Ramzi-Khantouchi",
      icon: "researchgate",
    },
  ],
} as const;
