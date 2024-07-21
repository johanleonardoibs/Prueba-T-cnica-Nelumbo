import {Component, input, InputSignal, OnInit, output, signal, WritableSignal} from '@angular/core';
import {NzCardModule} from "ng-zorro-antd/card";
import {Filter, FilterType} from "../../../core/models/filter.model";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzRateModule} from "ng-zorro-antd/rate";
import {FormBuilder, FormGroup, NonNullableFormBuilder, ReactiveFormsModule} from "@angular/forms";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {debounceTime} from "rxjs";
import {RangeSelectComponent} from "../";

@Component({
  selector: 'app-articles-filter',
  standalone: true,
  imports: [
    NzCardModule,
    NzCheckboxModule,
    NzDividerModule,
    NzRateModule,
    ReactiveFormsModule,
    RangeSelectComponent
  ],
  templateUrl: './articles-filter.component.html',
  styleUrl: './articles-filter.component.sass'
})
export class ArticlesFilterComponent implements OnInit{
  formSignal: WritableSignal<FormGroup>;
  availableFilters: InputSignal<Filter[]> = input.required<Filter[]>();
  onFilterChange = output<any>();

  private readonly OUTPUT_DELAY = 400;
  private readonly _form: FormGroup;
  private fb: NonNullableFormBuilder = new FormBuilder().nonNullable;

  protected readonly FilterType = FilterType;

  constructor() {
    this._form = this.fb.group({});
    this.formSignal = signal(this._form);
  }

  ngOnInit(): void {
    this.initFilterFields();
    this.formSignal().valueChanges
      .pipe(debounceTime(this.OUTPUT_DELAY))
      .subscribe((value) => {
      this.onFilterChange.emit(value);
    })
  }

  private initFilterFields() {
    this.availableFilters().forEach(filter => {
      this._form.addControl(filter.name, this.fb.control(undefined));

      if (filter.type === FilterType.SELECT) {
        this._form.get(filter.name)?.setValue(
          filter.options?.map(option => {
            return { label: option, value: option }
          })
        )
      }

      this.formSignal.set(this._form);
    })
  }
}
