import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Project} from "../project";
import {DOCUMENT} from "@angular/common";
import {marked} from "marked";
import * as DOMPurify from "dompurify";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project: Project | undefined = undefined;
  private sub: any;

  constructor(private route: ActivatedRoute, @Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.project = environment.projects.find(project => project.name == params["project"])

      if (this.project?.longDescription == undefined)
        fetch(`https://raw.githubusercontent.com/${this.project?.repo}/master/README.md`)
          .then(response => response.text())
          .then(text => {
            this.project!!.longDescription = DOMPurify.sanitize(marked.parse(text))
          });

      if(this.project?.lastRelease == undefined) {
        fetch(`https://api.github.com/repos/${this.project?.repo}/releases/latest`,
          {headers: {"accept": "application/vnd.github.v3+json"}})
          .then(body => body.json())
          .then(json => this.project!!.lastRelease = json.name);
      }
    });
  }

  redirectToDownload() {
    document.defaultView!!.open(`https://github.com/${this.project?.repo}/releases/latest`, "_blank")
  }
}
