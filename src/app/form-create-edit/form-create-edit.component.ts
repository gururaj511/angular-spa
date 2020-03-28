import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray, ValidatorFn } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { Genders, Locations } from '../constants/constants'

@Component({
  selector: 'form-create-edit',
  templateUrl: './form-create-edit.component.html',
  styleUrls: ['./form-create-edit.component.scss']
})
export class FormCreateEditComponent implements OnInit {

  myForm: FormGroup;
  genders = Genders
  locations = Locations;

  submitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private service: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm();
    if (this.service.isEdit && this.service.selected) {
      this.myForm.patchValue(this.service.selected.selectedUser);
    } else {
      this.myForm.reset();
    }
  }

  registerForm() {
    const controls = this.locations.map(c => new FormControl());
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.pattern(/^[0-9]/)],
      emailId: ['', Validators.email],
      gender: ['', Validators.required],
      locations: new FormArray(controls, this.minSelectedCheckboxes())
    });
  }

  minSelectedCheckboxes() {
    const validator: ValidatorFn = (formArray: FormArray) => {
      const totalSelected = formArray.controls
        .map(control => control.value)
        .reduce((prev, next) => next ? prev + next : prev, 0);
      return totalSelected >= 1 ? null : { required: true };
    };
    return validator;
  }


  getControls() { return (this.myForm.get('locations') as FormArray).controls; }
  get myFormControl() { return this.myForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.myForm.valid) {
      this.service.isEdit ? this.updateExistingData() : this.pushToArray();
      this.router.navigate(['/']);
      this.submitted = false;
    }
  }

  updateExistingData() {
    const selected = this.service.selected;
    this.service.users[selected.indexVal] = this.myForm.value;
  }

  pushToArray() {
    this.service.users.push(this.myForm.value);
  }

}
