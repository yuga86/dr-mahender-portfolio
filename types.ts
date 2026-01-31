
export interface Experience {
  designation: string;
  duration: string;
  advisor: string;
  institute: string;
  project: string;
}

export interface Education {
  year: string;
  degree: string;
  university: string;
  details?: string;
}

export interface Publication {
  authors: string;
  year: string;
  title: string;
  journal: string;
  doi?: string;
  impactFactor?: string;
}

export interface Award {
  title: string;
  description: string;
}

export interface Training {
  location: string;
  duration: string;
  institution: string;
  training: string;
}
