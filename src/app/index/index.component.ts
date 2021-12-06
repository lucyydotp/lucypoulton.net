import { Component, OnInit } from '@angular/core';
import {ProjectProvider} from "../project";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {

  constructor(public projectProvider: ProjectProvider) {}

  ngOnInit(): void {
  }

}
