import {Component, forwardRef} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {RangeValue} from "../../../core/models/filter.model";

@Component({
  selector: 'app-followed',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './followed.component.html',
  styleUrl: './followed.component.sass',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FollowedComponent),
      multi: true
    }
  ]
})
export class FollowedComponent implements ControlValueAccessor {

  disabled: boolean = false;
  followed: boolean = false;

  toggleFollowed(): void {
    this.followed = !this.followed;
    this._onChange(this.followed);
    this._onTouch();
  }

  private _onChange: Function = (value: RangeValue) => {
  }

  private _onTouch: Function = (value: RangeValue) => {
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouch = fn;
  }

  writeValue(value: boolean): void {
    this.followed = value;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
