import { Programme } from "@/types";

export const programmes: Programme[] = [
  {
    id: "bsc-cs",
    name: "BSc in Computer Science",
    level: "undergraduate",
    duration: "3 years",
    description:
      "A comprehensive three-year programme covering the fundamentals of computing, from programming and algorithms to systems and theory. Students develop strong problem-solving skills and a deep understanding of computer science principles.",
    highlights: [
      "Hands-on programming from day one",
      "Strong mathematical foundations",
      "Industry-relevant project work",
      "Access to modern computer labs and GPU clusters",
      "Active student community and societies",
    ],
    careers: [
      "Software Developer",
      "Systems Analyst",
      "Web Developer",
      "IT Consultant",
      "Database Administrator",
    ],
    requirements: [
      "NSC with degree admission",
      "Mathematics level 6 (70%+)",
      "English level 5 (60%+)",
      "APS of 35 or higher recommended",
    ],
  },
  {
    id: "bsc-data-science",
    name: "BSc in Data Science",
    level: "undergraduate",
    duration: "3 years",
    description:
      "An interdisciplinary programme combining computer science, statistics, and mathematics to prepare students for the growing field of data science. Students learn to extract insights from complex datasets.",
    highlights: [
      "Interdisciplinary curriculum",
      "Python and R programming",
      "Machine learning foundations",
      "Real-world data projects",
      "Industry partnerships",
    ],
    careers: [
      "Data Scientist",
      "Data Analyst",
      "Machine Learning Engineer",
      "Business Intelligence Analyst",
      "Quantitative Analyst",
    ],
    requirements: [
      "NSC with degree admission",
      "Mathematics level 6 (70%+)",
      "English level 5 (60%+)",
      "APS of 35 or higher recommended",
    ],
  },
  {
    id: "bsc-hons",
    name: "BScHons in Computer Science",
    level: "honours",
    duration: "1 year",
    description:
      "An intensive one-year programme that deepens knowledge in advanced CS topics and introduces students to research methodology. It serves as preparation for MSc studies or advanced industry positions.",
    highlights: [
      "Advanced specialisation courses",
      "Research project component",
      "Small class sizes",
      "Close mentorship from faculty",
      "Strong track record of graduates entering industry and academia",
    ],
    careers: [
      "Senior Software Engineer",
      "Research Assistant",
      "AI/ML Specialist",
      "Systems Architect",
      "Technical Lead",
    ],
    requirements: [
      "BSc with Computer Science major",
      "Minimum 60% average in third-year CS modules",
      "Strong mathematical background recommended",
    ],
  },
  {
    id: "msc-cs",
    name: "MSc in Computer Science",
    level: "masters",
    duration: "1-2 years",
    description:
      "A research-focused programme where students conduct original research under the supervision of an expert faculty member. The MSc thesis contributes new knowledge to the field.",
    highlights: [
      "Full-time research opportunity",
      "Expert supervision",
      "Access to research labs and computing resources",
      "Opportunity to publish in international venues",
      "Funding opportunities available",
    ],
    careers: [
      "Research Scientist",
      "Senior Data Scientist",
      "AI Research Engineer",
      "PhD Candidate",
      "Technical Consultant",
    ],
    requirements: [
      "BScHons in Computer Science or equivalent",
      "Minimum 65% average",
      "Research proposal",
      "Approval from potential supervisor",
    ],
  },
  {
    id: "phd-cs",
    name: "PhD in Computer Science",
    level: "phd",
    duration: "3-5 years",
    description:
      "The doctoral programme represents the highest level of academic achievement. PhD candidates conduct significant original research that advances the state of the art in their chosen field of computer science.",
    highlights: [
      "Original contribution to knowledge",
      "International research collaboration",
      "Conference attendance support",
      "Teaching experience opportunities",
      "Access to world-class facilities",
    ],
    careers: [
      "University Professor",
      "Principal Research Scientist",
      "Chief Technology Officer",
      "Research Lab Director",
      "Industry Research Fellow",
    ],
    requirements: [
      "MSc in Computer Science or equivalent",
      "Strong research record",
      "Detailed research proposal",
      "Approval from potential supervisor",
      "Two academic references",
    ],
  },
];
