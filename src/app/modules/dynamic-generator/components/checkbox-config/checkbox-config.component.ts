import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {FieldConfig} from '../../classes/field.interface';
import {FormControlBaseComponent} from '../form-control-base/form-control-base.component';

@Component({
  selector: 'app-checkbox-config',
  templateUrl: './checkbox-config.component.html',
  styleUrls: ['./checkbox-config.component.scss']
})
export class CheckboxConfigComponent extends FormControlBaseComponent implements OnInit {
  checkForm = this.fb.group({
    label: ['', Validators.required],
    value: [false],
    name: ['']
  });

  constructor(public fb: FormBuilder) {
    super();
  }

  ngOnInit() {
  }

  save(): FieldConfig {
    console.log(this.checkForm.getRawValue());
    return {
      type: 'checkbox',
      ...this.checkForm.getRawValue()
    };
  }

}
