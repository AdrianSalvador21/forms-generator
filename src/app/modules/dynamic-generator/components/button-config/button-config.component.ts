import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {FieldConfig} from '../../classes/field.interface';
import {FormControlBaseComponent} from '../form-control-base/form-control-base.component';

@Component({
  selector: 'app-button-config',
  templateUrl: './button-config.component.html',
  styleUrls: ['./button-config.component.scss']
})
export class ButtonConfigComponent extends FormControlBaseComponent implements OnInit {
  buttonForm = this.fb.group({
    label: ['']
  });

  constructor(public fb: FormBuilder) {
    super();
  }

  ngOnInit() {
  }

  save(): FieldConfig {
    return {
      type: 'button',
      label: this.buttonForm.controls.label.value
    };
  }
}
