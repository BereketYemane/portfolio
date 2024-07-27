import {Injectable} from '@angular/core';
import {MONTHS_TO_INDEX} from "../constant/Constant";

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor() {
  }

  getSummary(): Summary {
    return summary;
  }

  getEducation(): Education[] {
    return education;
  }

  getExperience(): Experience[] {
    return experience;
  }

  getSkills(): string[] {
    return skillsWithIcons;
  }
}

const summary: Summary =
  {
    description: "Experienced Full Stack Engineer proficient in Agile methodologies and Test-Driven Development (TDD) practices." +
      " Skilled in Java/Spring for backend and Angular for frontend development. " +
      "Proficient in JUnit, Mockito, Jasmine, Karma, and Cypress for comprehensive testing. " +
      "Actively collaborates through pair programming (XP programming) to enhance code quality. " +
      "Implements robust security measures and CI/CD pipelines for seamless deployment. " +
      "Monitors application performance using Azure Insights and ensures efficient version control with Git/GitLab. " +
      "Committed to delivering high-quality software solutions aligned with project goals",
    name: "Bereket Berhe",
    address: "Oakland, California 94606",
    phoneNumber: "+1-641-504-xxxx",
    email: 'luwamtmariam@gmail.com'
  };

export interface Summary {
  description: string;
  name: string;
  address: string;
  phoneNumber: string;
  email: string;
}

export interface Education {
  title: string;
  isCompleted: boolean;
  year: string;
  universityName: string;
}

const education: Education[] = [
  {
    title: "Master of Science in Computer Science",
    isCompleted: true,
    year: "Apr 2021 - Dec 2023",
    universityName: "Maharishi International University – Fairfield, Iowa",
  },
  {
    title: "Bachelor of Science in Information Technology",
    isCompleted: true,
    year: "Jan 2019 - May 2022",
    universityName: "Zayed University – Abu Dhabi, United Arab Emirates",
  }
]

export interface Experience {
  title: string;
  startDate: { month: string, year: string },
  endDate: { month?: string, year: string },
  company: string;
  contributions: string[];
}

const experience: Experience[] = [
  {
    title: "Full Stack Engineer",
    startDate: {month: MONTHS_TO_INDEX.JAN, year: '2022'},
    endDate: {month: '', year: 'Present'},
    company: "Creospan Inc, Chicago, Illinois, United States",
    contributions: [
      "Developed robust backend solutions using Java and the Spring framework",
      "Experienced in writing unit and integration tests using jUnit and Mockito to ensure code reliability \n" +
      " and quality",
      "Utilized Flyway for seamless database migration, ensuring data integrity and version control",
      "Designed and implemented interactive user interfaces using Angular",
      "Implemented testing suites with Jasmine, Karma, and Cypress to ensure frontend functionality and \n" +
      " user experience",
      "Collaborated with design teams using Figma for prototyping and design collaboration, ensuring \n" +
      " seamless integration between design and development phases"
    ]
  },
  {
    title: "Web Application Developer",
    startDate: {month: MONTHS_TO_INDEX.JAN, year: '2020'},
    endDate: {month: MONTHS_TO_INDEX.APR, year: '2021'},
    company: "MVP APPLICATION & GAME DESIGN, Abu Dhabi, UAE",
    contributions: [
      "Contributed to a fast-paced, team environment while designing functional web applications",
      "Performed requirements analysis to streamline development processes",
      "Developed TDD based enterprise-level applications using RESTful web services",
      "Implemented MVC architecture and used service-oriented architecture for application development",
      "Used AOP and IoC features of Spring framework and JPA/Hibernate for ORM",
      "Analyzed and optimized existing features and applications, performing coding, testing, and documentation"
    ]
  }
]

const skills: string[] = [
  "Languages: Java, JavaScript, TypeScript",
  "Web: REST, SOAP, JSON",
  "Servers: Apache Tomcat",
  "Frameworks: Spring, Hibernate, Angular, React",
  "Databases: MySQL, MongoDB, Oracle",
  "Design Patterns: Singleton, Observer, Factory, Strategy, Command, etc.",
  "SDLC: Agile Scrum",
  "Tools: IntelliJ, Git, Jenkins, Docker, Kubernetes",
  "Web Services: JMS, Kafka, ActiveMQ, Swagger",
  "Monitoring: Zipkin, Logstash, Kibana, Grafana",
  "Resilience: Hystrix, Resilience4j",
  "Platforms: Windows, Mac OS, Linux"
]

const skillsWithIcons: string[] = [
  '<i class="fa-brands fa-java fa-xl"></i>&nbsp Java',
  '<i class="bi bi-sun fa-xl"></i> Spring/Spring Boot',
  '<i class="bi bi-diagram-3 fa-xl"></i> Design Patterns',
  '<i class="bi bi-door-open fa-xl"></i> Hibernate',
  '<i class="bi bi-cloud fa-xl"></i> REST',
  '<i class="bi bi-file-earmark-text fa-xl"></i> JSON',
  '<i class="fa-brands fa-angular fa-xl"></i> Angular',
  '<i class="bi bi-book"></i> TypeScript',
  '<i class="bi bi-database fa-xl"></i> Databases: MySQL, Oracle, MongoDB',
  '<i class="fa-solid fa-server fa-xl"></i> Apache Tomcat',
  '<i class="bi bi-arrow-repeat fa-xl"></i> Agile Scrum',
  '<i class="bi bi-git fa-xl"></i> Git/ <i class="bi bi-github fa-xl"></i>Github',
  '<i class="fa-brands fa-jenkins fa-xl"></i> Jenkins',
  '<i class="fa-brands fa-docker fa-xl"></i> Docker/Podman',
  '<i class="bi bi-hdd fa-xl"></i> Kubernetes'
];

// '<i class="fa-brands fa-react fa-xl"></i> React',
