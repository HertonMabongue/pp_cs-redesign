export interface StaffMember {
  id: string;
  name: string;
  title: string;
  role: string;
  category: "academic" | "support" | "extraordinary";
  email?: string;
  phone?: string;
  office?: string;
  image?: string;
  researchAreas?: string[];
  website?: string;
  affiliation?: string;
}

export interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi?: string;
  url?: string;
}

export interface Course {
  code: string;
  name: string;
  credits: number;
  yearLevel: number;
  semester: 1 | 2 | "year";
  description: string;
  prerequisites?: string[];
  outcomes?: string[];
  lecturer?: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  category:
    | "awards-milestones"
    | "media-release"
    | "institutional-news"
    | "events"
    | "opinion-features"
    | "news"
    | "announcement"
    | "achievement"
    | "press";
  tags: string[];
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  endDate?: string;
  time: string;
  location: string;
  type: "seminar" | "workshop" | "conference" | "social" | "deadline";
  speaker?: string;
  speakerAffiliation?: string;
  registrationUrl?: string;
}

export interface ResearchGroup {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  lead: string;
  members: string[];
  image: string;
  website?: string;
  publications?: number;
  projects?: string[];
}

export interface Programme {
  id: string;
  name: string;
  level: "undergraduate" | "honours" | "masters" | "phd";
  duration: string;
  description: string;
  highlights: string[];
  careers: string[];
  requirements: string[];
}

export interface FAQ {
  question: string;
  answer: string;
  category: string;
}
