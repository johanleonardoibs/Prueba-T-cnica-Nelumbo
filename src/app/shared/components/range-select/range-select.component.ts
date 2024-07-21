import {Component, forwardRef, signal, WritableSignal} from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormGroup, NG_VALUE_ACCESSOR,
  NonNullableFormBuilder,
  ReactiveFormsModule
} from "@angular/forms";
import {NzSpaceModule} from "ng-zorro-antd/space";
import {NzInputModule} from "ng-zorro-antd/input";
import {RangeValue} from "../../../core/models/filter.model";

@Component({
  selector: 'app-range-select',
  standalone: true,
  imports: [NzSpaceModule, NzInputModule, ReactiveFormsModule],
  templateUrl: './range-select.component.html',
  styleUrl: './range-select.component.sass',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RangeSelectComponent),
      multi: true
    }
  ]
})
export class RangeSelectComponent implements ControlValueAccessor {
  fb: NonNullableFormBuilder = new FormBuilder().nonNullable;
  form: WritableSignal<FormGroup> = signal<FormGroup>(
    this.fb.group({
      'min': [],
      'max': []
    })
  )

  private _onChange: Function = (value: RangeValue) => {
  }
  private _onTouch: Function = (value: RangeValue) => {
  }

  constructor() {
    this.form().valueChanges.subscribe((value) => {
      this._onChange(value);
      this._onTouch();
    })
  }

  writeValue(obj: RangeValue): void {
    if (obj) {
      this.form().patchValue(obj);
    }
  }

  registerOnChange(fn: Function): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this._onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.form().disable();
    } else {
      this.form().enable();
    }
  }
}
