import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn} from '@angular/forms';
import {Directive} from '@angular/core';

/** A hero's name can't match the hero's alter ego */
export const identityRevealedValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const email = control.get('email');
  const phone = control.get('phone');
  const firstName = control.get('firstName');
  const lastName = control.get('lastName');

  return email && phone && email.value === phone.value ? {identityRevealed: true} : null;
};

@Directive({
  selector: '[appIdentityRevealed]',
  providers: [{provide: NG_VALIDATORS, useExisting: IdentityRevealedValidatorDirective, multi: true}]
})
export class IdentityRevealedValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return identityRevealedValidator(control);
  }
}
