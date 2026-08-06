export interface TeachingCourse {
  name: string;
  period: string;
}

export interface TeachingRole {
  role: string;
  institution: string;
  courses: TeachingCourse[];
}

export const teaching: TeachingRole[] = [
  {
    role: "Associate Teacher",
    institution: "El Tarf University",
    courses: [
      { name: "Data Structures and Algorithms in C", period: "Sep 2024 — Present" },
      { name: "Mathematical Logic", period: "Sep 2024 — Feb 2025" },
      { name: "Artificial Intelligence", period: "Jan 2025 — Present" },
    ],
  },
  {
    role: "Teaching Assistant",
    institution: "El Tarf University",
    courses: [
      { name: "Data Structures and Algorithms in C", period: "Sep 2023 — Feb 2024" },
      { name: "Data Structures and Algorithms", period: "Feb 2024 — Aug 2024" },
    ],
  },
  {
    role: "Teacher",
    institution: "Paramedical Training Institute",
    courses: [{ name: "Information Technology", period: "Feb 2024 — Feb 2025" }],
  },
  {
    role: "Teacher",
    institution: "Government Institution",
    courses: [
      { name: "Data Structures and Algorithms", period: "Oct 2023 — Feb 2024" },
      { name: "Information Systems", period: "Oct 2023 — Feb 2024" },
      { name: "Computer Architecture", period: "Oct 2023 — Feb 2024" },
      { name: "Graph Theory", period: "Oct 2022 — Feb 2023" },
      { name: "Database Management MySQL", period: "Oct 2022 — Feb 2023" },
      { name: "Advanced Database Administration", period: "Feb 2023 — Jul 2023" },
      { name: "Design and Implementation of Client-Server applications", period: "Feb 2023 — Jul 2023" },
    ],
  },
  {
    role: "Teacher",
    institution: "Middle School",
    courses: [{ name: "Mathematics", period: "Apr 2022 — Aug 2022" }],
  },
];
