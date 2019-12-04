import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-date-config',
  templateUrl: './date-config.component.html',
  styleUrls: ['./date-config.component.scss']
})
export class DateConfigComponent implements OnInit {

  globalDateForm = this.fb.group({
    dateType: ['date'],
    period: ['unique']
  });

  get globalForm() {
    return this.globalDateForm.controls;
  }

  dateTypes = ['date', 'time', 'dateTime'];

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
  }

}
