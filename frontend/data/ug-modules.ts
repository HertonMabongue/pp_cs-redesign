export type UGModule = {
  code: string;
  fullCode: string;
  name: string;
  semester: string;
  href: string;
  description: string;
};

export const modulesByYear: Record<string, UGModule[]> = {
  "First Year": [
    {
      code: "CS113",
      fullCode: "18139-113",
      name: "Computer Science for Actuarial Studies",
      semester: "1st Semester",
      href: "https://www.cs.sun.ac.za/courses/cs113",
      description:
        "Introduction to computer programming from a financial perspective. Basic financial problems are rephrased in terms of analytical problem solving. Standard imperative programming constructs including types of variables, assignments, if-then-else and loops, and recursive approaches are covered as needed in financial programming. Static data structures (in particular arrays) and declarative programming models such as spreadsheets are also covered.",
    },
    {
      code: "CS114",
      fullCode: "18139-114",
      name: "Introductory Computer Science 1",
      semester: "1st Semester",
      href: "https://www.cs.sun.ac.za/courses/cs114",
      description:
        "Introduction to basic computer programming; formulation and solution of problems by means of computer programming; data representation and variable types; assignment statements; conditional execution and iteration; static data structures; input and output; modular programming; recursion; testing and debugging; introduction to object-oriented programming.",
    },
    {
      code: "CS144",
      fullCode: "18139-144",
      name: "Introductory Computer Science 2",
      semester: "2nd Semester",
      href: "https://www.cs.sun.ac.za/courses/cs144",
      description:
        "Further formulation and solution of problems by means of computer programming; introductory data structures and algorithms in an OOP set-up; inheritance and polymorphism; design patterns; searching and sorting algorithms; complexity theory; dynamic data structures; regular expressions and finite automata.",
    },
  ],
  "Second Year": [
    {
      code: "CSE214",
      fullCode: "59536-214",
      name: "Object-Oriented Programming",
      semester: "1st Semester",
      href: "https://www.cs.sun.ac.za/courses/cse214",
      description:
        "Formulation and solution of problems in an OOP set-up; principles of testing and debugging; abstraction, encapsulation, inheritance and polymorphism; design patterns; searching and sorting algorithms; complexity theory; dynamic data structures.",
    },
    {
      code: "CS214",
      fullCode: "18139-214",
      name: "Data Structures and Algorithms",
      semester: "1st Semester",
      href: "https://www.cs.sun.ac.za/courses/cs214",
      description:
        "The classical data structures and algorithms in an object-oriented set-up. Advanced techniques for the analysis of algorithms.",
    },
    {
      code: "CS244",
      fullCode: "18139-244",
      name: "Computer Architecture",
      semester: "2nd Semester",
      href: "https://www.cs.sun.ac.za/courses/cs244",
      description:
        "Basic computer architecture. Programming in machine language and assembly language. Assemblers, binders and loaders. Basic concepts of operating systems; memory management, process management and file systems.",
    },
    {
      code: "SC272",
      fullCode: "12263-272",
      name: "Scientific Computing",
      semester: "1st & 2nd Semester",
      href: "https://www.cs.sun.ac.za/courses/sc272",
      description:
        "Introduction to Linux; Linux commands; Linux file systems; editors; process control. Introduction to programming in Python: variables, types, control structures, loop structures, functions, files, strings, unit testing, basic data processing. Introduction to numerical computing using Numpy; plotting and curve fitting.",
    },
  ],
  "Third Year": [
    {
      code: "CS313",
      fullCode: "18139-313",
      name: "Computer Networks",
      semester: "1st Semester",
      href: "https://www.cs.sun.ac.za/courses/cs313",
      description:
        "Introduction to networks in general and the internet in particular. Architecture and protocols. Allocation of resources and congestion control. Network security. Applications.",
    },
    {
      code: "CS314",
      fullCode: "18139-314",
      name: "Concurrency",
      semester: "1st Semester",
      href: "https://www.cs.sun.ac.za/courses/cs314",
      description:
        "Introduction to programming techniques and principles of concurrent systems, from operating systems to application programs. Communication, synchronisation, scheduling and load balancing. Several parallel and distributed architectures will be covered.",
    },
    {
      code: "CS315",
      fullCode: "18139-315",
      name: "Machine Learning",
      semester: "1st Semester",
      href: "https://www.cs.sun.ac.za/courses/cs315",
      description:
        "Dimension reduction techniques; machine-learning techniques based on maximum-likelihood, maximum-posterior and expectation-maximization estimates; modelling using logistic regression, Gaussian mixtures and hidden Markov models.",
    },
    {
      code: "CS343",
      fullCode: "18139-343",
      name: "Databases and Web Centric Programming",
      semester: "2nd Semester",
      href: "https://www.cs.sun.ac.za/courses/cs343",
      description:
        "Introduction to relational databases. Mapping relational model onto object model. Implementing a database application in the context of the web. Web services. Server-side scalability. Virtualisation. Cloud Computing.",
    },
    {
      code: "CS344",
      fullCode: "18139-344",
      name: "Program Design",
      semester: "2nd Semester",
      href: "https://www.cs.sun.ac.za/courses/cs344",
      description:
        "Program specifications as guidelines for program design; reusable frameworks for program design; testability of program designs; development of a medium-sized system to illustrate the practical application of the principles of program design.",
    },
    {
      code: "CS345",
      fullCode: "18139-345",
      name: "Computability and Automata Theory",
      semester: "2nd Semester",
      href: "https://www.cs.sun.ac.za/courses/cs345",
      description:
        "Introduction to automata theory and formal languages, computability and complexity. Regular languages, context-free languages and grammars. Turing machines. P vs NP problem and NP completeness.",
    },
    {
      code: "SC372",
      fullCode: "12263-372",
      name: "Scientific Computing",
      semester: "1st & 2nd Semester",
      href: "https://www.cs.sun.ac.za/courses/sc372",
      description:
        "Scientific-document construction and presentations in LaTeX. Regular expressions. Important algorithms including sorting, searching and random-number generation. Advanced computing in Python with Numpy and Scipy; data-processing pipelines. Other scientific tools in Linux.",
    },
  ],
  "Fourth Year (BDatSci)": [
    {
      code: "CS411",
      fullCode: "18139-411",
      name: "Computer Networks (313*)",
      semester: "1st Semester",
      href: "https://www.cs.sun.ac.za/courses/cs411",
      description:
        "Introduction to networks in general and the internet. Architecture and protocols. Allocation of resources and congestion control. Network security. Network applications. Network research technique.",
    },
    {
      code: "E414",
      fullCode: "59536-414",
      name: "Machine Learning",
      semester: "1st Semester",
      href: "https://www.cs.sun.ac.za/courses/e414",
      description:
        "Dimension reduction techniques; machine-learning techniques based on maximum-likelihood, maximum-posterior and expectation-maximization estimates; modelling using logistic regression, Gaussian mixtures and hidden Markov models.",
    },
    {
      code: "CS412",
      fullCode: "18139-412",
      name: "Advanced Algorithms (712*)",
      semester: "1st Semester",
      href: "https://www.cs.sun.ac.za/courses/cs412",
      description:
        "Advanced topics in algorithm design and analysis: linear programming, approximation, randomised, probabilistic, parallel, number-theoretic algorithms, cryptanalysis, computational geometry, computational biology, network algorithms, and complexity theory.",
    },
    {
      code: "CS441",
      fullCode: "18139-441",
      name: "Machine Learning (741*)",
      semester: "2nd Semester",
      href: "https://www.cs.sun.ac.za/courses/cs441",
      description: "An introduction to selected topics in machine learning.",
    },
    {
      code: "CS471",
      fullCode: "18139-471",
      name: "Data Science Research Assignment",
      semester: "2nd Semester",
      href: "https://www.cs.sun.ac.za/courses/cs471",
      description:
        "A comprehensive learning experience integrating knowledge from previous courses. Students apply knowledge to a data-rich research topic — from collecting and processing actual data, to applying suitable analytic methods, and communicating results clearly and comprehensively.",
    },
    {
      code: "CS491",
      fullCode: "18139-491",
      name: "Space Science Algorithms (791*)",
      semester: "2nd Semester",
      href: "https://www.cs.sun.ac.za/courses/cs491",
      description:
        "Algorithms and techniques in Space Science, with applications.",
    },
    {
      code: "CS495",
      fullCode: "18139-495",
      name: "Functional Programming (795*)",
      semester: "Not presented",
      href: "https://www.cs.sun.ac.za/courses/cs495",
      description: "An introduction to the functional programming paradigm.",
    },
  ],
};

export type ProgrammeRow = {
  programme: string;
  focal: string[];
};

export const fullCurriculumRows: ProgrammeRow[] = [
  {
    programme: "BSc Computer Science¹",
    focal: ["General Computer Science", "Computer Systems", "Data Science"],
  },
  {
    programme: "BDatSci²",
    focal: ["Computer Science"],
  },
  {
    programme: "BSc Mathematical Sciences",
    focal: [
      "Applied Mathematics",
      "Mathematics",
      "Abstract Mathematics",
      "Operations Research",
    ],
  },
  {
    programme: "BCom Mathematical Sciences",
    focal: ["Data Science"],
  },
  {
    programme: "BCom Economic Sciences",
    focal: [],
  },
  {
    programme: "BSc GeoInformatics",
    focal: [],
  },
];

export const someCurriculumRows: ProgrammeRow[] = [
  {
    programme: "BDatSci",
    focal: [
      "Applied Mathematics",
      "Statistical Physics",
      "Analytics and Optimisation",
      "Behavioural Economics",
      "Statistical Learning",
    ],
  },
  {
    programme: "BSc",
    focal: [
      "Biomedical Mathematical Sciences",
      "Biomathematics",
      "Bioinformatics and Computational Biology",
    ],
  },
  {
    programme: "BSc Physics",
    focal: [
      "Laser Physics (Physical)",
      "Nuclear Physics",
      "Radiation and Health Physics",
      "Theoretical Physics",
    ],
  },
  {
    programme: "BEng Electrical and Electronic",
    focal: ["Data Engineering", "Informatics", "Robotics"],
  },
  {
    programme: "BSc Chemistry",
    focal: ["Chemistry and Polymer Science", "Materials Technology"],
  },
];

export type FocalArea = {
  focus: string;
  description: string;
};

export const bscFocalAreas: FocalArea[] = [
  {
    focus: "General Computer Science",
    description: "CS major with a choice of Science modules.",
  },
  {
    focus: "Computer Systems",
    description: "CS major with Electrical & Electronic Engineering modules.",
  },
  {
    focus: "Data Science",
    description: "CS major with Statistics and Data Science modules.",
  },
  {
    focus: "CS with Genetics",
    description: "Computer Science combined with Genetics as second major.",
  },
  {
    focus: "CS with GeoInformatics",
    description: "CS with Geographical Information Technology as second major.",
  },
];
