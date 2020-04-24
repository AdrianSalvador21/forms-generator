import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FieldConfig} from '../../classes/field.interface';

@Component({
  exportAs: 'app-dynamic-Form',
  selector: 'app-dynamic-form',
  template: `
    <div style="width: 100%; display: flex; justify-content: center; align-items: center;">
        <form class="dynamic-form row" style="width: 100% !important;" [formGroup]="form" (submit)="onSubmit($event)">
            <div class="col-12 col-md-6" *ngFor="let field of fields;">
                <ng-container dynamicField [field]="field" [group]="form">
                </ng-container>
            </div>
        </form>
    </div>
  `,
  styles: []
})
export class DynamicFormComponent implements OnInit {
  @Input() fields: FieldConfig[] = [];
  // tslint:disable-next-line:no-output-native
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup;

  get value() {
    return this.form.value;
  }

  constructor(protected fb: FormBuilder) {
    console.log('error here');
  }

  ngOnInit() {
    this.form = this.createControl();
    console.log(this.form);
  }

  onSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.form.valid) {
      this.submit.emit(this.form.value);
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  createControl() {
    const group = this.fb.group({});
    this.fields.forEach(field => {
      if (field.type === 'button') return;
      console.log(field);
      console.log(this.bindValidations(field.validations));
      const control = this.fb.control(
        field.value,
        this.bindValidations(field.validations || [])
      );
      group.addControl(field.name, control);
    });
    return group;
  }

  bindValidations(validations: any) {
    console.log(validations);
    if (validations.length > 0) {
      const validList = [];
      validations.forEach(valid => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({onlySelf: true});
    });
  }
}
