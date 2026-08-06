export interface EducationEntry {
  degree: string;
  field: string;
  institution: string;
  period: string;
}

export const education: EducationEntry[] = [
  {
    degree: "Ph.D.",
    field: "Artificial Intelligence and its Applications",
    institution: "El Tarf University",
    period: "Feb 2023 — Present",
  },
  {
    degree: "M.S.",
    field: "Intelligent Computer Systems",
    institution: "El Tarf University",
    period: "2019 — 2021",
  },
  {
    degree: "B.S.",
    field: "Computer Science",
    institution: "El Tarf University",
    period: "2016 — 2019",
  },
];
