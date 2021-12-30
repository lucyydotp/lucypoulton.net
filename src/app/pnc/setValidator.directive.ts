import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector: '[pronounSet]',
    providers: [{provide: NG_VALIDATORS, useExisting: PronounSetValidatorDirective, multi: true}]
  })
export class PronounSetValidatorDirective implements Validator {
    validate(control: AbstractControl): ValidationErrors | null {
        return (/[^A-Za-z]+/g.test(control.value)) ? {illegalChars: control.value} : [];
      }
}