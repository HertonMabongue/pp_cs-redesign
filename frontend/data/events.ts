import { Event } from "@/types";

export const events: Event[] = [
  {
    id: "seminar-ai-ethics",
    title: "Seminar: Ethics in Artificial Intelligence",
    description:
      "A departmental seminar exploring the ethical implications of AI deployment in healthcare, justice, and education systems across Africa.",
    date: "2026-03-12",
    time: "14:00 - 15:30",
    location: "Room A301, General Engineering Building A",
    type: "seminar",
    speaker: "Prof Mmaki Jantjies",
    speakerAffiliation: "University of the Western Cape",
  },
  {
    id: "workshop-ml-beginners",
    title: "Workshop: Machine Learning for Beginners",
    description:
      "A hands-on workshop introducing undergraduate students to machine learning concepts, scikit-learn, and basic neural networks using Python.",
    date: "2026-03-18",
    endDate: "2026-03-19",
    time: "09:00 - 16:00",
    location: "Computer Lab 2, Narga Buitegebou",
    type: "workshop",
    registrationUrl: "https://forms.sun.ac.za/ml-workshop-2026",
  },
  {
    id: "seminar-quantum",
    title: "Seminar: Quantum Computing – From Theory to Practice",
    description:
      "An overview of recent advances in quantum computing, quantum algorithms, and their potential impact on cryptography and optimisation.",
    date: "2026-04-02",
    time: "11:00 - 12:30",
    location: "Room A301, General Engineering Building A",
    type: "seminar",
    speaker: "Dr Mark Fingerhuth",
    speakerAffiliation: "ProteinQure",
  },
  {
    id: "conference-sacla",
    title:
      "SACLA 2026 – Southern African Computer Lecturers' Association Conference",
    description:
      "The annual SACLA conference bringing together CS educators from across Southern Africa to discuss pedagogy, curriculum design, and education technology.",
    date: "2026-06-23",
    endDate: "2026-06-25",
    time: "08:30 - 17:00",
    location: "Stellenbosch University Conference Centre",
    type: "conference",
    registrationUrl: "https://sacla2026.sun.ac.za",
  },
  {
    id: "deadline-honours-apps",
    title: "Application Deadline: 2027 Honours Programme",
    description:
      "Final deadline for applications to the BScHons in Computer Science programme for the 2027 academic year.",
    date: "2026-10-31",
    time: "23:59",
    location: "Online Submission",
    type: "deadline",
  },
  {
    id: "social-braai",
    title: "Department Welcome Braai",
    description:
      "Annual welcome event for new and returning students. Meet fellow students, staff, and enjoy food and music on the engineering lawns.",
    date: "2026-02-28",
    time: "17:00 - 20:00",
    location: "Engineering Lawns, Stellenbosch",
    type: "social",
  },
  {
    id: "seminar-nlp",
    title:
      "Seminar: Advances in Natural Language Processing for African Languages",
    description:
      "Exploring the latest research in developing NLP tools and models for underrepresented African languages.",
    date: "2026-04-16",
    time: "14:00 - 15:30",
    location: "Room A301, General Engineering Building A",
    type: "seminar",
    speaker: "Dr Vukosi Marivate",
    speakerAffiliation: "University of Pretoria",
  },
];
