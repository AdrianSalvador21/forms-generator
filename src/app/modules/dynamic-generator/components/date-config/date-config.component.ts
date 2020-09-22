import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {FieldConfig} from '../../classes/field.interface';

@Component({
  selector: 'app-date-config',
  templateUrl: './date-config.component.html',
  styleUrls: ['./date-config.component.scss']
})
export class DateConfigComponent implements OnInit {

  globalDateForm = this.fb.group({
    dateType: ['date'],
    period: ['unique'],
    label: ['', Validators.required],
    name: ['']
  });

  dateTypes = ['date', 'time', 'dateTime'];

  get globalForm() {
    return this.globalDateForm.controls;
  }


  constructor(public fb: FormBuilder) { }

  ngOnInit() {
  }

  save(): FieldConfig {
    const fieldConfig = {
      type: 'date',
      inputType: this.globalForm.dateType.value,
      name: this.globalForm.name.value,
      label: this.globalForm.label.value,
    };

    return fieldConfig;
  }

}
