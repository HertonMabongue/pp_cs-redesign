import { Course } from "@/types";

export const courses: Course[] = [
  // === Year 1 ===
  {
    code: "CS113",
    name: "Computer Science for Actuarial Studies",
    credits: 16,
    yearLevel: 1,
    semester: 1,
    description:
      "Introduction to computer programming from a financial perspective. Basic financial problems are rephrased in terms of analytical problem solving. Standard imperative programming constructs including types of variables, assignments, if-then-else and loops, and recursive approaches are covered as needed in financial programming. Static data structures (in particular arrays) and declarative programming models such as spreadsheets are also covered.",
    outcomes: [
      "Solve basic financial problems with programming",
      "Understand imperative programming constructs",
      "Work with static data structures and spreadsheet models",
    ],
  },
  {
    code: "CS114",
    name: "Introductory Computer Science 1",
    credits: 16,
    yearLevel: 1,
    semester: 1,
    description:
      "Introduction to basic computer programming; formulation and solution of problems by means of computer programming; data representation and variable types (including character strings, integers, floating point numbers and Boolean variables); assignment statements; conditional execution and iteration; static data structures (arrays and records); input and output (including graphics and sound); modular programming; recursion; testing and debugging; introduction to object-oriented programming (including abstraction, encapsulation and use of existing object implementations).",
    outcomes: [
      "Write basic programs in an imperative language",
      "Apply recursion and modular programming",
      "Understand fundamental OOP concepts",
    ],
    lecturer: "Dr Helene Visser",
  },
  {
    code: "CS144",
    name: "Introductory Computer Science 2",
    credits: 16,
    yearLevel: 1,
    semester: 2,
    prerequisites: ["CS114"],
    description:
      "Further formulation and solution of problems by means of computer programming; introductory data structures and algorithms in an object-oriented set-up; key concepts in object orientation: inheritance and polymorphism; design patterns as abstractions for the creation of reusable object-oriented designs; searching and sorting algorithms; complexity theory for the analysis of algorithms; fundamental methods in the design of algorithms; dynamic data structures; regular expressions and finite automata.",
    outcomes: [
      "Apply inheritance and polymorphism",
      "Analyse algorithm complexity",
      "Implement dynamic data structures",
    ],
    lecturer: "Dr Willem Bester",
  },
  // === Year 2 ===
  {
    code: "CSE214",
    name: "Object-Oriented Programming",
    credits: 16,
    yearLevel: 2,
    semester: 1,
    description:
      "Formulation and solution of problems by means of computer programming in an object-oriented set-up; principles of testing and debugging; key concepts in object orientation: abstraction, encapsulation, inheritance and polymorphism; design patterns as abstractions for the creation of reusable object oriented designs; searching and sorting algorithms; complexity theory for the analysis of algorithms; fundamental methods in the design of algorithms; dynamic data structures.",
    outcomes: [
      "Design robust object-oriented solutions",
      "Apply common design patterns",
      "Analyse and implement core data structures",
    ],
  },
  {
    code: "CS214",
    name: "Data Structures and Algorithms",
    credits: 16,
    yearLevel: 2,
    semester: 1,
    prerequisites: ["CS144"],
    description:
      "The classical data structures and algorithms in an object-oriented set-up. Advanced techniques for the analysis of algorithms.",
    outcomes: [
      "Implement classical data structures",
      "Apply advanced algorithm analysis techniques",
      "Design efficient algorithmic solutions",
    ],
    lecturer: "Prof Brink van der Merwe",
  },
  {
    code: "CS244",
    name: "Computer Architecture",
    credits: 16,
    yearLevel: 2,
    semester: 2,
    prerequisites: ["CS214"],
    description:
      "Basic computer architecture. Programming in machine language and assembly language. Assemblers, binders and loaders. Basic concepts of operating systems; memory management, process management and file systems.",
    outcomes: [
      "Understand basic computer architecture",
      "Write assembly language programs",
      "Explain core OS concepts",
    ],
  },
  {
    code: "SC272",
    name: "Scientific Computing",
    credits: 16,
    yearLevel: 2,
    semester: 1,
    description:
      "Introduction to Linux; Linux commands; Linux file systems; editors; process control. Introduction to programming in Python: variables, types, control structures, loop structures, functions, files and directories, strings, unit testing, basic data processing. Introduction to numerical computing using Numpy; plotting and curve fitting.",
    outcomes: [
      "Use Linux effectively",
      "Write Python programs for data processing",
      "Apply numerical computing with Numpy",
    ],
  },
  // === Year 3 ===
  {
    code: "CS313",
    name: "Computer Networks",
    credits: 16,
    yearLevel: 3,
    semester: 1,
    prerequisites: ["CS244"],
    description:
      "Introduction to networks in general and the internet in particular. Architecture and protocols. Allocation of resources and congestion control. Network security. Applications.",
    outcomes: [
      "Understand network architectures and protocols",
      "Analyse resource allocation and congestion",
      "Apply network security principles",
    ],
  },
  {
    code: "CS314",
    name: "Concurrency",
    credits: 16,
    yearLevel: 3,
    semester: 1,
    prerequisites: ["CS244"],
    description:
      "Introduction to programming techniques and principles of concurrent systems, from operating systems to application programs. This includes communication, synchronisation, scheduling and load balancing. Several parallel and distributed architectures will be covered.",
    outcomes: [
      "Write correct concurrent programs",
      "Apply synchronisation primitives",
      "Understand parallel and distributed architectures",
    ],
  },
  {
    code: "CS315",
    name: "Machine Learning",
    credits: 16,
    yearLevel: 3,
    semester: 1,
    prerequisites: ["CS214"],
    description:
      "Dimension reduction techniques; machine-learning techniques based on maximum-likelihood, maximum-posterior and expectation-maximization estimates; modelling using logistic regression, Gaussian mixtures and hidden Markov models.",
    outcomes: [
      "Apply dimension reduction techniques",
      "Implement machine learning models",
      "Evaluate probabilistic learning approaches",
    ],
  },
  {
    code: "CS343",
    name: "Databases and Web Centric Programming",
    credits: 16,
    yearLevel: 3,
    semester: 2,
    prerequisites: ["CS214"],
    description:
      "Introduction to relational databases. Mapping relational model onto object model. Implementing a database application in the context of the web. Web services. Server-side scalability. Virtualisation. Cloud Computing.",
    outcomes: [
      "Design and query relational databases",
      "Build web-centric database applications",
      "Understand virtualisation and cloud computing",
    ],
  },
  {
    code: "CS344",
    name: "Program Design",
    credits: 16,
    yearLevel: 3,
    semester: 2,
    prerequisites: ["CS244"],
    description:
      "Program specifications as guidelines for program design; reusable frameworks for program design; testability of program designs; development of a medium-sized system to illustrate the practical application of the principles of program design.",
    outcomes: [
      "Write formal program specifications",
      "Design reusable frameworks",
      "Develop and test a medium-sized system",
    ],
  },
  {
    code: "CS345",
    name: "Computability and Automata Theory",
    credits: 16,
    yearLevel: 3,
    semester: 2,
    prerequisites: ["CS214"],
    description:
      "Introduction to automata theory and formal languages, computability and complexity. Regular languages, context-free languages and grammars. Turing machines. P vs NP problem and NP completeness.",
    outcomes: [
      "Construct finite automata and grammars",
      "Understand Turing machine computability",
      "Reason about NP completeness",
    ],
    lecturer: "Prof Lynette van Zijl",
  },
  {
    code: "SC372",
    name: "Scientific Computing",
    credits: 16,
    yearLevel: 3,
    semester: 1,
    description:
      "Scientific-document construction and presentations in LaTeX. Regular expressions. Important algorithms including sorting, searching and random-number generation. Advanced computing in Python with Numpy and Scipy; applications including pattern searching, processing of large empirical data sets and constructing data-processing pipelines. Other scientific tools in Linux.",
    outcomes: [
      "Produce scientific documents in LaTeX",
      "Apply advanced Python scientific computing",
      "Build data-processing pipelines",
    ],
  },
  // === Year 4 (BDatSci) ===
  {
    code: "CS411",
    name: "Computer Networks (313*)",
    credits: 16,
    yearLevel: 4,
    semester: 1,
    description:
      "Introduction to networks in general and the internet in particular. Architecture and protocols. Allocation of resources and congestion control. Network security. Network applications. Network research technique.",
    outcomes: [
      "Understand network architectures and protocols",
      "Apply network research techniques",
      "Analyse security in network applications",
    ],
  },
  {
    code: "E414",
    name: "Machine Learning",
    credits: 16,
    yearLevel: 4,
    semester: 1,
    description:
      "Dimension reduction techniques; machine-learning techniques based on maximum-likelihood, maximum-posterior and expectation-maximization estimates; modelling using logistic regression, Gaussian mixtures and hidden Markov models.",
    outcomes: [
      "Apply dimension reduction techniques",
      "Implement probabilistic machine learning models",
      "Evaluate and compare ML approaches",
    ],
  },
  {
    code: "CS412",
    name: "Advanced Algorithms (712*)",
    credits: 16,
    yearLevel: 4,
    semester: 1,
    prerequisites: ["CS214"],
    description:
      "Continues from CS 214 and covers advanced topics in the design and analysis of algorithms and associated data structures. Topics include algorithm design techniques, linear programming, approximation algorithms, randomised algorithms, probabilistic algorithms, parallel algorithms, number-theoretic algorithms, cryptanalysis, computational geometry, computational biology, network algorithms, and complexity theory.",
    outcomes: [
      "Design and analyse advanced algorithms",
      "Apply randomised and approximation algorithms",
      "Understand complexity theory and NP-completeness",
    ],
  },
  {
    code: "CS441",
    name: "Machine Learning (741*)",
    credits: 16,
    yearLevel: 4,
    semester: 2,
    description: "An introduction to selected topics in machine learning.",
    outcomes: [
      "Understand selected machine learning paradigms",
      "Apply ML techniques to real problems",
    ],
  },
  {
    code: "CS471",
    name: "Data Science Research Assignment",
    credits: 32,
    yearLevel: 4,
    semester: 2,
    description:
      "A comprehensive learning experience integrating knowledge from previous courses. Students apply knowledge to a data-rich research topic — from collecting and processing actual data, to applying suitable analytic methods, and communicating results clearly and comprehensively.",
    outcomes: [
      "Solve a real-world data science problem end-to-end",
      "Apply and integrate prior knowledge across modules",
      "Communicate research findings effectively",
    ],
  },
  {
    code: "CS491",
    name: "Space Science Algorithms (791*)",
    credits: 16,
    yearLevel: 4,
    semester: 2,
    description:
      "Algorithms and techniques in Space Science, with applications.",
    outcomes: [
      "Apply algorithms to Space Science problems",
      "Understand domain-specific computational techniques",
    ],
  },
  {
    code: "CS495",
    name: "Functional Programming (795*)",
    credits: 16,
    yearLevel: 4,
    semester: 1,
    description: "An introduction to the functional programming paradigm.",
    outcomes: [
      "Understand functional programming concepts",
      "Write programs in a functional style",
    ],
  },
];
