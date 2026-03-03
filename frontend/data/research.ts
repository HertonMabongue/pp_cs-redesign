import { ResearchGroup } from "@/types";

export const researchGroups: ResearchGroup[] = [
  {
    id: "ai-lab",
    name: "Artificial Intelligence Research Group",
    description:
      "Advancing the frontiers of artificial intelligence through fundamental research and practical applications.",
    longDescription:
      "The AI Research Group at Stellenbosch University is one of the leading AI research groups in Africa. Our work spans machine learning, deep learning, natural language processing, computer vision, and reinforcement learning. We collaborate with industry partners and international institutions to develop AI solutions that address African challenges, including healthcare, agriculture, and climate science. The group is led by the SARChI Chair in AI and comprises multiple postdoctoral researchers, PhD students, and masters candidates.",
    lead: "Prof Bruce Watson",
    members: ["Prof Bruce Watson", "Prof Steve Kroon", "Dr A.", "Dr B. Mkhize"],
    image: "/images/research/ai-lab.jpg",
    website: "https://ai.cs.sun.ac.za",
    publications: 85,
    projects: [
      "AI for Climate Modelling",
      "African Language NLP",
      "Medical Image Analysis",
    ],
  },
  {
    id: "formal-methods",
    name: "Formal Languages & Automata Theory Group",
    description:
      "Research in formal languages, automata theory, and their applications in software verification.",
    longDescription:
      "This research group focuses on the theoretical foundations of computer science, particularly formal languages, finite automata, and their practical applications. Our work includes developing new algorithms for regular expression matching, investigating descriptional complexity, and applying formal methods to software verification and natural language processing. The group has produced seminal work in the taxonomy of finite automata construction algorithms.",
    lead: "Prof Lynette van Zijl",
    members: ["Prof Lynette van Zijl", "Prof Brink van der Merwe"],
    image: "/images/research/formal-methods.jpg",
    publications: 62,
    projects: [
      "Descriptional Complexity",
      "Automata Construction Taxonomy",
      "Formal Verification",
    ],
  },
  {
    id: "data-science",
    name: "Data Science & Machine Learning Lab",
    description:
      "Applied machine learning and data science research with a focus on statistical learning and computational biology.",
    longDescription:
      "The Data Science & Machine Learning Lab conducts research at the intersection of statistics, computer science, and domain-specific applications. Our primary areas include statistical learning theory, Bayesian inference, deep learning for structured data, and computational biology. We develop methods for analysing large-scale genomic datasets and have active collaborations with the Faculty of Medicine and Health Sciences.",
    lead: "Prof Steve Kroon",
    members: ["Prof Steve Kroon", "Dr C. Naidoo"],
    image: "/images/research/data-science.jpg",
    publications: 45,
    projects: [
      "Genomic Data Analysis",
      "Statistical Learning",
      "Deep Learning for Structured Data",
    ],
  },
  {
    id: "software-eng",
    name: "Software Engineering & HCI Group",
    description:
      "Research in software engineering practices, human-computer interaction, and CS education.",
    longDescription:
      "This group explores modern software engineering methodologies, user experience design, and innovations in computer science education. Our research includes empirical studies on software development practices, designing accessible interfaces for diverse user populations, and developing new pedagogical approaches for teaching programming and CS concepts. We have strong ties with the local software development industry.",
    lead: "Dr Helene Visser",
    members: ["Dr Helene Visser", "Dr Willem Bester"],
    image: "/images/research/software-eng.jpg",
    publications: 38,
    projects: [
      "CS Education Innovation",
      "Accessible UX Design",
      "Agile Practices in SA",
    ],
  },
  {
    id: "security",
    name: "Information Security Research Group",
    description:
      "Cybersecurity research including cryptography, network security, and secure software development.",
    longDescription:
      "The Information Security Research Group conducts cutting-edge research in cybersecurity, covering topics from theoretical cryptography to practical network defence. We work closely with South African government agencies and international partners on cyber threat intelligence, secure coding practices, and privacy-preserving technologies. The group also contributes to national cyber policy development.",
    lead: "Prof D. de Villiers",
    members: ["Prof D. de Villiers", "Dr E. Fourie"],
    image: "/images/research/security.jpg",
    publications: 29,
    projects: [
      "Cyber Threat Intelligence",
      "Privacy-Preserving ML",
      "Secure Coding Standards",
    ],
  },
];
