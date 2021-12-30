import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

export interface PronounSet {
  [key: string]: string | boolean;
  subjective: string;
  objective: string;
  possessiveAdj: string;
  possessivePro: string;
  reflexive: string;
  plural: boolean; 
}

interface Field {
  prefix?: string,
  suffix?: string,
  default: string,
  property: string
}

@Component({
  selector: 'app-pnc',
  templateUrl: './pnc.component.html',
  styleUrls: ['./pnc.component.css']
})
export class PncComponent {
  
  readonly fields: Array<Field> = [
    {
      property: "subjective",
      default: "They",
      suffix: " will do it if you ask nicely."
    },
    {
      property: "objective",
      prefix: "I'd really love to get to know",
      default: "them",
      suffix: "."
    },
    {
      property: "possessiveAdj",
      prefix: "I hope ",
      default: "their",
      suffix: " day is going well."
    },
    {
      property: "possessivePro",
      prefix: "Whose is that? Oh, it's ",
      default: "theirs",
      suffix: "."
    },
    {
      property: "reflexive",
      prefix: "This person should be really proud of ",
      default: "themself",
      suffix: "."
    }
  ];
  
  set: PronounSet = {
    subjective: '',
    objective: '',
    possessiveAdj: '',
    possessivePro: '',
    reflexive: '',
    plural: false
  };

  setToString(set: PronounSet): string {
    return `${set.subjective}/${set.objective}/${set.possessiveAdj}/${set.possessivePro}/${set.reflexive}${set.plural ? ":p" : ""}`.toLowerCase();
  }
}  