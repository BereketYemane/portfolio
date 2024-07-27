import {Component, OnInit} from '@angular/core';
import {Education, Experience, ResumeService, Summary} from "../services/resume.service";
import {INDEX_TO_MONTHS} from "../constant/Constant";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  summary!: Summary;
  education!: Education[];
  experience!: Experience[];
  skills!: string[];

  constructor(private resumeService: ResumeService) {
  }

  ngOnInit() {
    this.summary = this.resumeService.getSummary();
    this.education = this.resumeService.getEducation();
    this.experience = this.resumeService.getExperience();
    this.skills = this.resumeService.getSkills();
  }

  downloadResume() {
    const resumeFileName = 'Bereket_Berhe_Resume.pdf';
    const resumeFilePath = `/assets/resume/${resumeFileName}`;

    const link = document.createElement('a');
    link.href = resumeFilePath;
    link.download = resumeFileName;
    link.click();
  }

  getDescription(ex: Experience) {
    console.log('descrition for: ', ex.title);
    const startYearDesc = `${INDEX_TO_MONTHS[ex.startDate.month]} ${ex.startDate.year}`;
    const endYearDesc = ex.endDate?.month ? `${INDEX_TO_MONTHS[ex.endDate.month]} ${ex.endDate.year}` : `${ex.endDate.year}`;
    const duration = this.calculateDuration(ex);
    return `${startYearDesc} - ${endYearDesc} &middot; ${duration}`;
  }

  private calculateDuration(ex: Experience) {
    const startDate = new Date(parseInt(ex.startDate.year), parseInt(ex.startDate.month));
    const startYear = startDate.getFullYear();
    const startMonth = startDate.getMonth();

    const endDate = ex.endDate.year === 'Present' ? new Date() : new Date(parseInt(ex.endDate.year), parseInt(ex.endDate.month as string));
    const endYear = endDate.getFullYear();
    const endMonth = endDate.getMonth();

    let years = endYear - startYear;
    let months = endMonth - startMonth;

    if (months < 0) {
      years--;
      months += 12;
    }

    if (years === 0) {
      return `${months} mo${months !== 1 ? 's' : ''}`;
    } else if (months === 0) {
      return `${years} yr${years !== 1 ? 's' : ''}`;
    } else {
      return `${years} yr${years !== 1 ? 's' : ''} ${months} mo${months !== 1 ? 's' : ''}`;
    }
  }
}

