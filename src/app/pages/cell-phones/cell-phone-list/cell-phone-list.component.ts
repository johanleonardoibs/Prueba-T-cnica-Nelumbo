import {Component, Signal} from '@angular/core';
import {Filter} from "../../../core/models/filter.model";
import {Article} from "../../../core/models/article.model";
import {NzColDirective, NzRowDirective} from "ng-zorro-antd/grid";
import {NzInputDirective, NzInputGroupComponent} from "ng-zorro-antd/input";
import {NzOptionComponent, NzSelectComponent} from "ng-zorro-antd/select";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {CellphoneService} from "../../../core/services/cellphone/cellphone.service";
import {toSignal} from "@angular/core/rxjs-interop";
import {ArticlesFilterComponent, ArticlesListComponent, CustomCarouselComponent} from "../../../shared/components";

@Component({
  selector: 'app-cell-phone-list',
  standalone: true,
  imports: [
    ArticlesFilterComponent,
    ArticlesListComponent,
    CustomCarouselComponent,
    NzColDirective,
    NzInputDirective,
    NzInputGroupComponent,
    NzOptionComponent,
    NzRowDirective,
    NzSelectComponent,
    NzIconDirective,
    FormsModule
  ],
  templateUrl: './cell-phone-list.component.html',
  styleUrl: './cell-phone-list.component.sass'
})
export class CellPhoneListComponent {
  cellphones!: Signal<Article[]>;
  popularCellphones!: Signal<Article[]>;
  filters!: Signal<Filter[]>

  carouselImages = [
    'https://telefonica.cl/wp-content/uploads/sites/11/2023/12/2N5A2259-Enhanced-NR.jpg?w=1224&h=673&crop=1',
    'https://imagenes.eltiempo.com/files/image_1200_600/uploads/2023/10/10/65254916add31.jpeg',
    'https://cdn.colombia.com/sdi/2023/06/13/estos-son-los-tres-celulares-mas-economicos-del-momento-1158265.jpg'
  ]

  constructor(private router: Router, private cellphoneService: CellphoneService) {
    this.cellphoneService.updateCellphones();
    this.cellphoneService.updatePopularCellphones();
    this.cellphones = toSignal(this.cellphoneService.cellphonesList, { initialValue: [] })
    this.popularCellphones = toSignal(this.cellphoneService.popularSmartphones, { initialValue: [] });
    this.filters = toSignal(this.cellphoneService.getAvailableFilters(), { initialValue: [] });
  }

  updateQueryFilter(event: any): void {
    this.cellphoneService.filterCellPhonesByName(event.data || '');
  }

  onFilterChange(values: any): void {
    this.cellphoneService.filterCellPhones(values);
  }

  onArticleClick(article: Article): void {
    this.cellphoneService.rememberSelectedCellphone(article)
    this.router.navigate(['cellphones', article.id]).then();
  }
}
