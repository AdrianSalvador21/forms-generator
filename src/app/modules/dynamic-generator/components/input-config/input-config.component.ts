import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FieldConfig} from '../../classes/field.interface';
import {FormControlBaseComponent} from '../form-control-base/form-control-base.component';

@Component({
  selector: 'app-input-config',
  templateUrl: './input-config.component.html',
  styleUrls: ['./input-config.component.scss']
})
export class InputConfigComponent extends FormControlBaseComponent implements OnInit {
  inputTypes = ['text', 'number', 'email'];
  inputForm = this.fb.group({
    label: ['', Validators.required],
    inputType: ['text', Validators.required],
    name: ['']
  });
  validationsForm = this.fb.group({
    required: [false],
    maxLength: [false],
    minLength: [false],
    pattern: [false],
    maxLengthValue: [''],
    minLengthValue: [''],
    patternValue: ['']
  });

  constructor(public fb: FormBuilder) {
    super();
  }
  get form() {
    return this.inputForm.controls;
  }
  get vForm() {
    return this.validationsForm.controls;
  }
  ngOnInit() {
    this.vForm.maxLengthValue.disable();
    this.vForm.minLengthValue.disable();
    this.vForm.patternValue.disable();
  }

  activeInput(control: string, event) {
    if (!event.checked) {
      this.validationsForm.controls[control].disable();
    } else {
      this.validationsForm.controls[control].enable();
    }
  }

  save(): FieldConfig {
    const fieldConfig = {
      type: 'input',
      inputType: this.form.inputType.value,
      name: this.form.name.value,
      label: this.form.label.value
    };
    const validations = this.getValidations(this.validationsForm);
    if (validations.length !== 0) {
      Object.assign(fieldConfig, {validations: validations});
    }
    return fieldConfig;
  }

  getValidations(group: FormGroup) {
    const validators = [];
    Object.keys(group.controls).forEach((key) => {
      switch (key) {
        case 'required':
          if (this.vForm[key].value) {
            validators.push({
              name: 'required',
              validator: Validators.required,
              message: 'Name Required'
            });
          }
          break;
        case 'maxLength':
          if (this.vForm[key].value) {
            validators.push({
              name: 'maxLength',
              validator: Validators.maxLength(parseInt(this.vForm.maxLengthValue.value, 2 )),
              message: 'Max Length'
            });
          }
          break;
        case 'minLength':
          if (this.vForm[key].value) {
            validators.push({
              name: 'minLength',
              validator: Validators.minLength(parseInt(this.vForm.minLengthValue.value, 2 )),
              message: 'Max Length'
            });
          }
          break;
        case 'pattern':
          if (this.vForm[key].value) {
            validators.push({
              name: 'pattern',
              validator: Validators.pattern(this.vForm.patternValue.value),
              message: 'Pattern'
            });
          }
          break;
        default:
          break;
      }
    });
    return validators;
  }
}
