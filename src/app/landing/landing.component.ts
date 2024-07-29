import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  constructor(private formBuilder: UntypedFormBuilder,){

  }
  submitted = false;
  loginForm!: UntypedFormGroup;
 
  ngOnInit(): void {

  this.loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
  });
}
get f() { return this.loginForm.controls; }

onSubmit() {
  this.submitted = true;
}
}
