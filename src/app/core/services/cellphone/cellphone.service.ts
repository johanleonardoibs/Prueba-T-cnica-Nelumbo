import { Injectable } from '@angular/core';
import {
  generateFakeSmartPhone,
  generateManySmartphones,
  getAvailableFilters,
} from "../../../fixtures/cellphone.fixtures";
import {Article} from "../../models/article.model";
import {BehaviorSubject, map, mergeMap, Observable, of, switchMap, take} from "rxjs";
import {Filter, FilterValues, MultiSelectValue, RangeValue} from "../../models/filter.model";
import {NzMessageService} from "ng-zorro-antd/message";

@Injectable({
  providedIn: 'root'
})
export class CellphoneService {
  // Se utiliza un Subject con los valores originales y un segundo con los filtrados para simular un filtrado real
  private _cellphonesList: BehaviorSubject<Article[]> = new BehaviorSubject<Article[]>([]);
  private _filteredCellphones: BehaviorSubject<Article[]> = new BehaviorSubject<Article[]>([]);
  popularSmartphones: Observable<Article[]> = of([]);

  get cellphonesList(): Observable<Article[]> {
    return this._filteredCellphones.asObservable();
  }

  constructor(private nzMessageService: NzMessageService) { }

  // Esto se encargaria de hacer la peticion inicial
  updateCellphones() {
    this._cellphonesList.next(generateManySmartphones(20));
    this._filteredCellphones.next(this._cellphonesList.value);
  }

  // Esto se encargaria de hacer la peticion inicial
  updatePopularCellphones() {
    this.popularSmartphones = of(generateManySmartphones(5));
  }

  // Como no hay persistencia de ningun dato, si el elemento a detallar no existe se muestra uno aleatoreo con el fin
  // de mostrar algo en la vista de detalle
  getCellphone(id: string): Observable<Article> {
    return this.cellphonesList.pipe(
      switchMap((cellphones: Article[]) => {
        return this.popularSmartphones.pipe(
          map((popularCellphones: Article[]) => {
            return popularCellphones.concat(cellphones)
          })
        )
      }),
      map((cellphones: Article[]) => {
        return cellphones.filter((cellphone: Article) => cellphone.id === id)[0] || generateFakeSmartPhone();
      })
    );
  }

  getAvailableFilters(): Observable<Filter[]> {
    return of(getAvailableFilters());
  }

  // Como no existe endpoint al que consultar
  // Este metodo simula un filtrado para las opciones que hay actualmente
  // Solo se muestran los elementos que cumplan todos los filtros, en caso de que no hayan
  // Se deja la lista por defecto
  // El ideal seria enviar los parametros de filtrado como queryParams.
  filterCellPhones(filters: FilterValues): void {
    this._cellphonesList.subscribe((cellphones: Article[]) => {
      const filteredCellphones: Article[] = cellphones.filter((cellphone: Article) => {
        return Object.values(filters).every((filter: number | RangeValue | MultiSelectValue[]) => {
          if (
            !filter ||
            (
              filter instanceof Array
              && filter.every((multiSelectValue: MultiSelectValue) => !multiSelectValue.checked)
            )
          ) {
            return true;
          }
          if (typeof filter === 'number') {
            return filter === cellphone.rate;
          }
          if (filter instanceof Array) {
            return this.validateMultiSelectFilter(filter, cellphone.brand);
          }
          if (typeof filter === 'object' && 'min' in filter && 'max' in filter) {
            const min: number = filter.min ? filter.min : 0;
            const max: number = filter.max ? filter.max : Infinity;
            return cellphone.price > min && cellphone.price < max;
          }
          return false;
        });
      });

      if (filteredCellphones.length) {
        this._filteredCellphones.next(filteredCellphones);
      } else {
        this._filteredCellphones.next(cellphones);
        this.nzMessageService.error('No se han encontrado celulares que coincidan con los filtros')
      }
    })
  }

  filterCellPhonesByName(nameFilter: string = ''): void {
    this._cellphonesList
      .subscribe((cellphones: Article[]) => {
        const filteredCellphones: Article[] = cellphones.filter((cellphone: Article) => {
          if (!nameFilter || nameFilter.trim() === '') {
            return true;
          }
          return cellphone.name.toLowerCase().includes(nameFilter.toLowerCase());
        });

        if (filteredCellphones.length) {
          this._filteredCellphones.next(filteredCellphones);
        } else {
          this._filteredCellphones.next(cellphones);
          this.nzMessageService.error('No se han encontrado celulares que coincidan con los filtros');
        }
      });
  }

  // Esto valida que el elemento "needle" este dentro de las marcas seleccionadas
  private validateMultiSelectFilter(filters: MultiSelectValue[], needle: string): boolean {
    return filters.some((multiSelectValue: MultiSelectValue) => {
      return multiSelectValue.checked && multiSelectValue.value == needle;
    })
  }
}
