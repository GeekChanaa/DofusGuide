import { FormGroup } from "@angular/forms";
import { AbstractService } from "../_services/abstract-service";


export abstract class BaseUpdateComponent<T>{
  valid: boolean = true;

  constructor(
  ){}
    
  // Error Display
  Errors(formGroup : FormGroup) {
    formGroup.valueChanges.subscribe((changedObj: any) => {
      this.valid = formGroup.valid;
    });
  }

  // Errors Messages
  getError(field: string, formGroup : FormGroup) {
    if (formGroup.get(field).hasError('required')) {
      return 'You must enter a value';
    }
  }

}