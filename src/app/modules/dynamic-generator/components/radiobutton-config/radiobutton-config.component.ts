import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {FieldConfig} from '../../classes/field.interface';
import {FormControlBaseComponent} from '../form-control-base/form-control-base.component';

@Component({
  selector: 'app-radiobutton-config',
  templateUrl: './radiobutton-config.component.html',
  styleUrls: ['./radiobutton-config.component.scss']
})
export class RadiobuttonConfigComponent extends FormControlBaseComponent implements OnInit {

  radioForm = this.fb.group({
    label: ['', Validators.required],
    name: ['']
  });

  get form() {
    return this.radioForm.controls;
  }

  options = [
    {placeholder: '', value: ''}
  ];

  defaultValue;

  constructor(public fb: FormBuilder) {
    super();
  }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.options, event.previousIndex, event.currentIndex);
  }

  addOption() {
    this.options.push({placeholder: '', value: ''});
  }

  deleteOption(index) {
    this.options.splice(index, 1);
  }

  setDefaultValue(value) {
    this.defaultValue = value;
  }

  save(): FieldConfig {
    return {
      type: 'radiobutton',
      label: this.form.label.value,
      name: this.form.name.value,
      options: this.options
    };
  }
}
