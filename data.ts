
import { Experience, Education, Publication, Award, Training } from './types';

export const personalInfo = {
  name: "Dr. Mahender ANUMALLA",
  designation: "Scientist-I, Late Maturity Breeding Program",
  department: "Rice Breeding Innovation (RBI) Platform",
  office: "IRRI South Asia Hub, Hyderabad, India / Los Baños, Philippines",
  email: "m.anumalla@irri.org",
  secondaryEmail: "mahenderbio@gmail.com",
  phone: "+91-9849739435",
  skype: "mahenderbio",
  location: "Building Number 303, ICRISAT Campus, Hyderabad, Telangana - 502324, India"
};

export const experiences: Experience[] = [
  {
    designation: "Scientist-I*",
    duration: "March 2024-Present",
    advisor: "Dr. Waseem Hussain",
    institute: "Rice Breeding Innovation Platform, IRRI-South Asia Hub, Hyderabad",
    project: "Accelerated Genetic Gain in Rice Alliance (AGGRi)"
  },
  {
    designation: "Post-Doctoral Fellow",
    duration: "May 2020-Feb 2024",
    advisor: "Dr. Waseem Hussain",
    institute: "Rice Breeding Innovation Platform, IRRI, Los Baños, Philippines",
    project: "Accelerated Genetic Gain in Rice Alliance (AGGRi)"
  },
  {
    designation: "On-the-job trainee",
    duration: "June 2017– May 2019",
    advisor: "Dr. Jauhar Ali",
    institute: "IRRI, Philippines",
    project: "Green Super Rice (GSR)"
  },
  {
    designation: "Senior Research Fellow",
    duration: "June 2016- March 2017",
    advisor: "Dr. Annamalai Anandan",
    institute: "ICAR-National Rice Research Institute (NRRI), Cuttack, India",
    project: "National Initiative on Climate Resilient Agriculture (NICRA)"
  }
];

export const education: Education[] = [
  {
    year: "February 2017",
    degree: "Ph. D. (Biotechnology)",
    university: "Utkal University, Bhubaneswar, India",
    details: "Dissertation: Allele mining for abiotic stress tolerance genes in rice."
  },
  {
    year: "May 2008",
    degree: "M. Sc. (Biotechnology)",
    university: "Govt City College, Osmania University, Hyderabad, India",
    details: "Analysis of genetical diversity among rice genotypes using bioinformatics."
  },
  {
    year: "July 2006",
    degree: "B.Sc. (Botany, Zoology & Chemistry)",
    university: "Kakatiya University, Telangana, India"
  }
];

export const topPublications: Publication[] = [
  {
    authors: "Apurva Khanna, Mahender Anumalla, et al.",
    year: "2024",
    title: "Rice Salinity Breeding at IRRI: Genetic Gains Achieved and Future Breeding Resource",
    journal: "Theoretical and Applied Genetics",
    doi: "10.1007/s00122-024-04545-9",
    impactFactor: "5.2"
  },
  {
    authors: "Geethanjali S, Kadirvel P, Anumalla M, et al.",
    year: "2024",
    title: "Streamlining of Simple Sequence Repeat Data Mining Methodologies and Pipelines for Crop Scanning",
    journal: "Plants",
    doi: "10.3390/plants13182619",
    impactFactor: "3.935"
  },
  {
    authors: "Waseem Hussain, Mahender Anumalla, et al.",
    year: "2024",
    title: "Revisiting FR13A for submergence tolerance: beyond the SUB1A gene",
    journal: "Journal of Experimental Botany",
    doi: "10.1093/jxb/erae299",
    impactFactor: "5.627"
  },
  {
    authors: "Waseem Hussain, Mahender Anumalla, et al.",
    year: "2022",
    title: "Open-source analytical pipeline for robust data analysis, visualizations and sharing in crop breeding",
    journal: "BMC Plant Methods",
    doi: "10.1186/s13007-022-00845-7",
    impactFactor: "5.139"
  }
];

export const awards: Award[] = [
  {
    title: "Best Presentation Award-2024",
    description: "13th National Seed Congress (NSC), ISARC, Varanasi, India, Nov 2024."
  },
  {
    title: "Scientist of The Year Award-2021",
    description: "3rd International Conference on Global Initiative in Agricultural, Forestry and Applied Sciences (GIAFAS 2021)."
  },
  {
    title: "Excellence in Research Award-2021",
    description: "International Conference on Advances in Agriculture, Environmental and Biosciences (AAEBSD-2021)."
  },
  {
    title: "InSc Young Researcher Award-2021",
    description: "Institute of Scholars 2020 Awards."
  }
];

export const trainings: Training[] = [
  {
    location: "University of Florida, 2023",
    duration: "4 days",
    institution: "Gainesville, Florida, USA",
    training: "Multi-Omic Integration for AI Genomic Prediction Breeding Short Course"
  },
  {
    location: "IRRI, Philippines, 2023",
    duration: "2 days",
    institution: "The School of Executive Education and IRRI",
    training: "Fundamentals of Principled Negotiations Program"
  },
  {
    location: "Madrid, Spain, 2022",
    duration: "5 days",
    institution: "Technical University of Madrid (UPM)",
    training: "6th – Genomic Selection in Plant Breeding"
  }
];

export const skills = [
  "Abiotic stress tolerance breeding in rice",
  "Genomic selection and QTL mapping",
  "Phenotypic characterization (morphological & physiological)",
  "Bioinformatics and R programming",
  "High-throughput phenotyping",
  "Project proposal development",
  "NARES capacity building",
  "Laboratory management"
];
