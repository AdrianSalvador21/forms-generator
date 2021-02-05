import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';

import {NgForm, NgModel} from '@angular/forms';

@Component({
  selector: 'app-form-preview-dialog',
  templateUrl: './form-preview-dialog.component.html',
  styleUrls: ['./form-preview-dialog.component.scss'],
})
export class FormPreviewDialogComponent implements OnInit {
  public formData = [];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.formData = this.data;
    console.log(this.formData);
    console.log(JSON.stringify(this.formData));
  }
}
