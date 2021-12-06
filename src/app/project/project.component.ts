import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Project, ProjectProvider} from "../project";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project: Project | undefined = undefined;
  private sub: any;

  constructor(private route: ActivatedRoute, private projectProvider: ProjectProvider) {
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.project = this.projectProvider.projects.find(project => project.name == params["project"])
    });
  }
}
