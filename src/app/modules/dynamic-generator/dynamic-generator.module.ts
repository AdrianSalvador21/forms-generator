import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DynamicGeneratorPageComponent } from './pages/dynamic-generator-page/dynamic-generator-page.component';
import {DynamicGeneratorRoutingModule} from './dynamic-generator-routing.module';
import {SharedModule} from '../shared/shared.module';
import {ButtonConfigComponent} from './components/button-config/button-config.component';
import {InputConfigComponent} from './components/input-config/input-config.component';
import {CheckboxConfigComponent} from './components/checkbox-config/checkbox-config.component';
import {SelectConfigComponent} from './components/select-config/select-config.component';
import {DateConfigComponent} from './components/date-config/date-config.component';
import {RadiobuttonConfigComponent} from './components/radiobutton-config/radiobutton-config.component';
import {DynamicFormComponent} from './components/dynamic-form/dynamic-form.component';
import {DynamicFieldDirective} from './components/dynamic-field/dynamic-field.directive';
import {InputComponent} from './components/input/input.component';
import {ButtonComponent} from './components/button/button.component';
import {SelectComponent} from './components/select/select.component';
import {DateComponent} from './components/date/date.component';
import {RadiobuttonComponent} from './components/radiobutton/radiobutton.component';
import {CheckboxComponent} from './components/checkbox/checkbox.component';

import {MatNativeDateModule} from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormPreviewDialogComponent} from "./dialogs/form-preview-dialog.component";

@NgModule({
  declarations: [
    InputComponent,
    CheckboxComponent,
    RadiobuttonComponent,
    SelectComponent,
    DateComponent,
    ButtonComponent,
    DynamicFormComponent,
    DynamicFieldDirective,
    DynamicGeneratorPageComponent,
    ButtonConfigComponent,
    InputConfigComponent,
    CheckboxConfigComponent,
    SelectConfigComponent,
    DateConfigComponent,
    RadiobuttonConfigComponent,
    FormPreviewDialogComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    DynamicGeneratorRoutingModule,
    SharedModule,
    MatDatepickerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule, MatMomentDateModule,
  ],
  providers: [],
  entryComponents: [
    DynamicFormComponent,
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    FormPreviewDialogComponent
  ],
  exports: [
    ButtonConfigComponent,
    InputConfigComponent,
    CheckboxConfigComponent,
    SelectConfigComponent,
    DateConfigComponent,
    RadiobuttonConfigComponent,
    DynamicFormComponent,
    DynamicFieldDirective,
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    FormPreviewDialogComponent
  ]
})
export class DynamicGeneratorModule {
}
