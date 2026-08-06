export interface Author {
  name: string;
  isSelf?: boolean;
}

export interface PublicationLink {
  label: string;
  href: string;
}

export interface Publication {
  authors: Author[];
  title: string;
  venue: string;
  year: number;
  links: PublicationLink[];
}

export const publications: Publication[] = [
  {
    authors: [
      { name: "Ramzi Khantouchi", isSelf: true },
      { name: "Ibtissem Gasmi" },
      { name: "Abderaouf Bahi" },
    ],
    title: "3bit Quantized On-device Recommendation System",
    venue: "NCASEE-2024",
    year: 2024,
    links: [
      {
        label: "Paper",
        href: "https://www.researchgate.net/publication/386565316_3bit_Quantized_On-device_Recommendation_System",
      },
      {
        label: "Code",
        href: "https://github.com/ramzikhantouchi/3-bit_quantized_On-device_recommender_sysetm",
      },
    ],
  },
  {
    authors: [
      { name: "Abderaouf Bahi" },
      { name: "Ibtissem Gasmi" },
      { name: "Sasi Bentrad" },
      { name: "Ramzi Khantouchi", isSelf: true },
    ],
    title:
      "A Graph Neural Network Model for Diverse E-Commerce Recommendations Using Timestamp-Weighted Edges",
    venue: "NCAIIT-2024",
    year: 2024,
    links: [
      {
        label: "Paper",
        href: "https://www.researchgate.net/publication/386546748_A_Graph_Neural_Network_Model_for_Diverse_E-Commerce_Recommendations_Using_Timestamp-Weighted_Edges",
      },
    ],
  },
  {
    authors: [
      { name: "Abderaouf Bahi" },
      { name: "Ibtissem Gasmi" },
      { name: "Sasi Bentrad" },
      { name: "Ramzi Khantouchi", isSelf: true },
    ],
    title:
      "MycGNN: enhancing recommendation diversity in e-commerce through mycelium-inspired graph neural network",
    venue: "Electronic Commerce Research (ELEC)",
    year: 2024,
    links: [
      {
        label: "Paper",
        href: "https://link.springer.com/article/10.1007/s10660-024-09911-9",
      },
    ],
  },
  {
    authors: [
      { name: "Ramzi Khantouchi", isSelf: true },
      { name: "Ibtissem Gasmi" },
      { name: "Abderaouf Bahi" },
    ],
    title: "Enhancing recommendation quality in sparse scenarios using Large Language Models (LLMs)",
    venue: "ICSIS-2024",
    year: 2024,
    links: [
      {
        label: "Paper",
        href: "https://www.researchgate.net/publication/383871039_Enhancing_recommendation_quality_in_sparse_scenarios_using_Large_Language_Models_LLMs",
      },
    ],
  },
  {
    authors: [
      { name: "Ramzi Khantouchi", isSelf: true },
      { name: "Ibtissem Gasmi" },
      { name: "Mohamed Amine Ferrag" },
    ],
    title:
      "Eye-Net: A Low-Complexity Distributed Denial of Service Attack-Detection System Based on Multilayer Perceptron",
    venue: "Journal of Sensor and Actuator Networks (JSAN)",
    year: 2024,
    links: [
      {
        label: "Paper",
        href: "https://www.mdpi.com/2224-2708/13/4/45",
      },
    ],
  },
  {
    authors: [
      { name: "Abderaouf Bahi" },
      { name: "Ibtissem Gasmi" },
      { name: "Sasi Bentrad" },
      { name: "Ramzi Khantouchi", isSelf: true },
      { name: "Maroua Benleulmi" },
    ],
    title:
      "In-depth Exploration and Sentiment Analysis of Women's E-Commerce Clothing Ratings using SVM and Logistic Regression",
    venue: "ICDSIA-2023",
    year: 2023,
    links: [],
  },
  {
    authors: [
      { name: "Ibtissem Gasmi" },
      { name: "Fouzia Anguel" },
      { name: "Ramzi Khantouchi", isSelf: true },
    ],
    title: "E-learning platform based on Recommender System",
    venue: "NCAIIT-2021",
    year: 2021,
    links: [],
  },
];

export function publicationsPerYear(): { year: number; count: number }[] {
  const counts = new Map<number, number>();
  for (const pub of publications) {
    counts.set(pub.year, (counts.get(pub.year) ?? 0) + 1);
  }
  return [...counts.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([year, count]) => ({ year, count }));
}
