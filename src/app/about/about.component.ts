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
    "Committed to delivering high-quality software solutions aligned with project goals";
}

