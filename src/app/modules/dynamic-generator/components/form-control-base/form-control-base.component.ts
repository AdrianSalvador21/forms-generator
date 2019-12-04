import {FieldConfig} from '../../classes/field.interface';

export abstract class FormControlBaseComponent {
  protected constructor() {
  }

  abstract save(): FieldConfig;

}
