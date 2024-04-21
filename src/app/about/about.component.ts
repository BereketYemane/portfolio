import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  phone: string = "(641) 504-3176";
  email: string = "bereketberhe27@gmail.com";
  address: string = "Oakland CA, USA";
  degree: string = "Masters";
  workStatus: string = "Working currently";

  sps: string = "Experienced Full Stack Engineer proficient in Agile methodologies and Test-Driven Development (TDD) practices." +
    " Skilled in Java/Spring for backend and Angular for frontend development. " +
    "Proficient in JUnit, Mockito, Jasmine, Karma, and Cypress for comprehensive testing. " +
    "Actively collaborates through pair programming (XP programming) to enhance code quality. " +
    "Implements robust security measures and CI/CD pipelines for seamless deployment. " +
    "Monitors application performance using Azure Insights and ensures efficient version control with Git/GitLab. " +
    "Committed to delivering high-quality software solutions aligned with project goals.";

  aboutIntro: string = "Welcome to my portfolio! I am a dedicated full stack software engineer with a passion for building robust and innovative solutions. " +
    "From front-end interfaces to back-end systems, I thrive on turning ideas into functional, scalable applications. With a focus on clean code and efficient architecture, I strive to create seamless user experiences while ensuring optimal performance. " +
    "Let's collaborate and create the next generation of transformative software together.";

  aboutSummary: string = "As a Full Stack Engineer, I bring a holistic approach to software development, seamlessly integrating front-end and back-end technologies to deliver comprehensive solutions. " +
    "Experienced in Agile methodologies and Test-Driven Development (TDD) practices, I thrive in collaborative environments where innovation and efficiency drive success";

  letsConnect: string = "I am passionate about collaborating on exciting projects and exploring new opportunities. " +
    "Reach out to me to discuss how we can achieve our goals together and grow professionally.";
}

