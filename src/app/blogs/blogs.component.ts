import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent {
  blogs: Blog[] = [
    {
      category: "spring",
      url: "https://medium.com/@bereketberhe27/spring-boot-custom-validation-7af89a64f805",
      imgPath: "../../assets/img/blog/spring_custom_validation.jpg",
      urlAvailable: true
    },
    {
      category: "spring",
      url: "https://medium.com/@bereketberhe27/title-annotation-based-pointcut-expressions-in-spring-aop-014b2464f239",
      imgPath: "../../assets/img/blog/spring_aop.jpg",
      urlAvailable: true
    },
    {
      category: "spring",
      url: "https://medium.com/@bereketberhe27/mastering-global-exception-handling-in-spring-boot-a-practical-guide-fe946b3eaeb9",
      imgPath: "../../assets/img/blog/spring_exception_handling.jpg",
      urlAvailable: true
    },
    {
      category: "spring",
      url: "https://medium.com/@bereketberhe27/simplifying-database-migrations-in-spring-boot-with-flyway-a-comprehensive-guide-c778b5dbb922",
      imgPath: "../../assets/img/blog/spring_flyway_migration.jpg",
      urlAvailable: true
    },
    {
      category: "angular",
      url: "https://medium.com/@bereketberhe27/enhance-data-management-in-angular-with-ag-grid-a-quick-guide-a0cda37643ad",
      imgPath: "../../assets/img/blog/angular_ag_grid.jpg",
      urlAvailable: true
    },
    {
      category: "cloud",
      url: "",
      imgPath: "../../assets/img/blog/aws_ci_cd.jpg",
      urlAvailable: false
    }
  ]

}

export interface Blog{
  category: String;
  url: String;
  imgPath: String;
  urlAvailable?: boolean;
}
