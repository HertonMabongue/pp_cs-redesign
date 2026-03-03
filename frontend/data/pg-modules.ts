// ── PG MODULES DATA ──────────────────────────────────────────────────────────

export interface PGModule {
  code: string;
  fullCode: string;
  name: string;
  lecturer: string;
  lecturerUrl?: string;
  semester: string;
  description: string;
  href: string;
}

export interface PGProgramme {
  code: string;
  name: string;
  description: string;
}

export const pgProgrammes: PGProgramme[] = [
  {
    code: "18139-797",
    name: "Honours in Computer Science",
    description:
      "Stream Computer Science. This stream consists of 6 modules of 16 credits each, as well as a compulsory programming project of 32 credits. At most two modules may be taken from related departments with the permission of the Computer Science. Not all modules are necessarily offered each year.",
  },
  {
    code: "18139-878",
    name: "Masters in Computer Science",
    description:
      "Independent research on an approved topic as determined by the supervisor(s) and leading to a thesis is required.",
  },
  {
    code: "18139-978",
    name: "PhD in Computer Science",
    description:
      "A dissertation containing the results of your independent research is required.",
  },
];

export const yearModules: PGModule[] = [
  {
    code: "771",
    fullCode: "63444-771",
    name: "Honours Project in Computer Science",
    lecturer: "",
    semester: "1st & 2nd Semester",
    description:
      "A large software construction or research problem on which the student works independently, under the supervision of a staff member.",
    href: "https://www.sun.ac.za/english/faculty/science/Computer-Science/Pages/Modules.aspx",
  },
];

export const firstSemesterModules: PGModule[] = [
  {
    code: "712",
    fullCode: "64947-712",
    name: "Advanced Algorithms",
    lecturer: "Willem Bester",
    lecturerUrl: "http://www.cs.sun.ac.za/~whkbester/",
    semester: "1st Semester",
    description:
      "This module continues from Computer Science 214 and covers advanced topics in the design and analysis of algorithms and associated data structures. Topics include a selection from algorithm design techniques, linear programming, approximation algorithms, randomised algorithms, probabilistic algorithms, parallel algorithms, number-theoretic algorithms, cryptanalysis, computational geometry, computational biology, network algorithms, and complexity theory.",
    href: "https://www.sun.ac.za/english/faculty/science/Computer-Science/Pages/Modules.aspx",
  },
  {
    code: "716",
    fullCode: "64971-716",
    name: "Adv. Topics I – Vulnerability Discovery and Exploitation",
    lecturer: "Fabian Yamaguchi",
    lecturerUrl: "https://fabs.codeminers.org/",
    semester: "1st Semester",
    description:
      "This module provides an introduction to the discovery and exploitation of vulnerabilities in software systems. We learn to uncover vulnerabilities and demonstrate their exploitability and then proceed to focus on methods for automating parts of the discovery process, both via static and dynamic program analysis.",
    href: "https://www.sun.ac.za/english/faculty/science/Computer-Science/Pages/Modules.aspx",
  },
  {
    code: "746",
    fullCode: "65048-746",
    name: "Adv. Topics II – Ontology Engineering",
    lecturer: "Maria Keet",
    lecturerUrl: "http://www.meteck.org/",
    semester: "1st Semester",
    description:
      "The principal aim of this module is to provide the participant with an overview of ontology engineering—including knowledge representation languages, automated reasoning, and methods and techniques for ontology development—and main application fields. Ontologies are used in a wide range of applications such as data integration, information retrieval, and natural language processing.",
    href: "https://www.sun.ac.za/english/faculty/science/Computer-Science/Pages/Modules.aspx",
  },
  {
    code: "771",
    fullCode: "14533-771",
    name: "Computing and Society",
    lecturer: "William (Bill) Tucker",
    lecturerUrl: "https://researcherprofiles.sun.ac.za/37639-bill-tucker",
    semester: "1st Semester",
    description:
      "Theory, domains and critique of topics related to Computing and Society, such as human-centred computing; social development theories, critical analysis of case studies; methods and ethics; and challenges of sustainable community engagement.",
    href: "https://www.sun.ac.za/english/faculty/science/Computer-Science/Pages/Modules.aspx",
  },
  {
    code: "791",
    fullCode: "14232-791",
    name: "Artificial Intelligence",
    lecturer: "Andries Engelbrecht",
    lecturerUrl: "https://engel.pages.cs.sun.ac.za/",
    semester: "1st Semester",
    description:
      "Introduction to a selection of topics in artificial intelligence and optimisation. Meta-heuristics. Swarm intelligence, including particle swarm optimisation and the ant colony meta-heuristic. Evolutionary computation, including genetic algorithms, genetic programming, evolutionary strategies, differential evolution, and coevolution. Fitness landscape analysis.",
    href: "https://www.sun.ac.za/english/faculty/science/Computer-Science/Pages/Modules.aspx",
  },
  {
    code: "795",
    fullCode: "13944-795",
    name: "Functional Programming",
    lecturer: "Brink van der Merwe",
    lecturerUrl: "http://www.cs.sun.ac.za/~abvdm/",
    semester: "1st Semester",
    description:
      "This module gives an introduction to the functional programming paradigm.",
    href: "https://www.sun.ac.za/english/faculty/science/Computer-Science/Pages/Modules.aspx",
  },
  {
    code: "742",
    fullCode: "14195-742",
    name: "Machine Learning A (315*)",
    lecturer: "Steve Kroon",
    lecturerUrl: "http://www.cs.sun.ac.za/~kroon/",
    semester: "1st Semester",
    description:
      "Prominent machine-learning concepts and tasks. Selected feature extraction or dimensionality reduction techniques. Introduction to probabilistic modelling and latent variable models. Fundamental paradigms in parameter estimation.",
    href: "https://www.sun.ac.za/english/faculty/science/Computer-Science/Pages/Modules.aspx",
  },
  {
    code: "711",
    fullCode: "14530-711",
    name: "Computer Networks (313*)",
    lecturer: "William (Bill) Tucker",
    lecturerUrl: "https://researcherprofiles.sun.ac.za/37639-bill-tucker",
    semester: "1st Semester",
    description:
      "Unless you have completed Computer Science 313 or an equivalent, the following Computer Science module is compulsory. Introduction to networks in general and the internet in particular. Architecture and protocols. Allocation of resources and congestion control. Network security. Applications.",
    href: "https://www.sun.ac.za/english/faculty/science/Computer-Science/Pages/Modules.aspx",
  },
  {
    code: "714",
    fullCode: "64963-714",
    name: "Concurrent Programming I (314*)",
    lecturer: "Cornelia Inggs",
    lecturerUrl: "http://www.cs.sun.ac.za/~cinggs/",
    semester: "1st Semester",
    description:
      "Unless you have completed Computer Science 314 or an equivalent, the following Computer Science module is compulsory. This module covers an overview of the field of concurrency, its theoretical principles, the design, implementation and verification of concurrent systems, and practical aspects of distributed and parallel programming.",
    href: "https://www.sun.ac.za/english/faculty/science/Computer-Science/Pages/Modules.aspx",
  },
];

export const secondSemesterModules: PGModule[] = [
  {
    code: "741",
    fullCode: "11788-741",
    name: "Machine Learning",
    lecturer: "Andries Engelbrecht",
    lecturerUrl: "https://engel.pages.cs.sun.ac.za/",
    semester: "2nd Semester",
    description:
      "This module is an introduction to selected topics in machine learning.",
    href: "https://www.sun.ac.za/english/faculty/science/Computer-Science/Pages/Modules.aspx",
  },
  {
    code: "745",
    fullCode: "65021-745",
    name: "Software Construction – Compilers",
    lecturer: "Bernd Fischer",
    lecturerUrl: "http://www.cs.sun.ac.za/~bfischer/",
    semester: "2nd Semester",
    description: "",
    href: "https://www.sun.ac.za/english/faculty/science/Computer-Science/Pages/Modules.aspx",
  },
  {
    code: "771",
    fullCode: "14531-771",
    name: "Principles of Data Science",
    lecturer: "Marcel Dunaiski",
    lecturerUrl: "https://marceldunaiski.pages.cs.sun.ac.za/",
    semester: "2nd Semester",
    description:
      "This course covers the typical pipeline of data science projects: information retrieval, data wrangling and exploratory data analysis, hypothesis testing and regression analysis, as well as visualisations and data ethics.",
    href: "https://www.sun.ac.za/english/faculty/science/Computer-Science/Pages/Modules.aspx",
  },
  {
    code: "791",
    fullCode: "14066-791",
    name: "Space Science Algorithms",
    lecturer: "Trienko Grobler",
    lecturerUrl: "http://www.cs.sun.ac.za/~tlgrobler/",
    semester: "2nd Semester",
    description:
      "Algorithms and techniques in Space Science, with applications.",
    href: "https://www.sun.ac.za/english/faculty/science/Computer-Science/Pages/Modules.aspx",
  },
  {
    code: "743",
    fullCode: "14888743",
    name: "Machine Learning and Artificial Intelligence I – Cognitive Robotics",
    lecturer: "Gavin Rens",
    lecturerUrl: "https://kognitiv.systems/",
    semester: "2nd Semester",
    description:
      "Most topics in this course fall under the branch of artificial intelligence called Cognitive Robotics. Topics covered are logic and knowledge representation, the Prolog language, deterministic automated planning, dynamic Bayesian networks and dynamic decision networks, Boolean and arithmetic circuits, the ProbLog language, probabilistic planning based on Markov decision processes, and an introduction to reinforcement learning.",
    href: "https://www.sun.ac.za/english/faculty/science/Computer-Science/Pages/Modules.aspx",
  },
  {
    code: "796",
    fullCode: "14065-796",
    name: "Software Testing and Analysis",
    lecturer: "Cornelia Inggs, Bernd Fischer, Willem Visser",
    lecturerUrl: "http://www.cs.sun.ac.za/~cinggs/",
    semester: "2nd Semester",
    description:
      "Introduction to various techniques for software quality management.",
    href: "https://www.sun.ac.za/english/faculty/science/Computer-Science/Pages/Modules.aspx",
  },
  {
    code: "711",
    fullCode: "63452-711",
    name: "Automata Theory & Applications (345*)",
    lecturer: "Brink van der Merwe",
    lecturerUrl: "http://www.cs.sun.ac.za/~abvdm/",
    semester: "2nd Semester",
    description:
      "This course is a first introduction to theoretical computer science, and covers the Chomsky hierarchy of languages in relation to computability. Note that you may not take this course if you had already completed CS345.",
    href: "https://www.sun.ac.za/english/faculty/science/Computer-Science/Pages/Modules.aspx",
  },
];

export const pgModulesBySection: Record<string, PGModule[]> = {
  "Year Modules": yearModules,
  "First Semester": firstSemesterModules,
  "Second Semester": secondSemesterModules,
};
