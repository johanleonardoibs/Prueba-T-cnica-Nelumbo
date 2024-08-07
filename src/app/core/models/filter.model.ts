export enum FilterType {
  SELECT,
  RANGE,
  RATE
}

export interface Filter {
  name: string;
  type: FilterType,
  options?: string[]
}

export interface FilterValues {
  [key: string]: number | RangeValue | MultiSelectValue[]
}

export interface RangeValue {
  min: number,
  max: number
}

export interface MultiSelectValue {
  label: string,
  value: string,
  checked?: boolean
}
