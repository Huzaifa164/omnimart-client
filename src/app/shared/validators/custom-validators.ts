import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidators {
    static passwordMatch(control: AbstractControl): ValidationErrors | null {
        const password = control.get('password');
        const confirm = control.get('confirmPassword');
        return password && confirm && password.value !== confirm.value ? { passwordMisMatch: true } : null;
    }
}