import {Component, Signal} from '@angular/core';
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzFlexDirective} from "ng-zorro-antd/flex";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Article} from "../../../core/models/article.model";
import {CellphoneService} from "../../../core/services/cellphone/cellphone.service";
import {toSignal} from "@angular/core/rxjs-interop";
import {NzColDirective, NzRowDirective} from "ng-zorro-antd/grid";
import {NzRateComponent} from "ng-zorro-antd/rate";
import {FormsModule} from "@angular/forms";
import {CurrencyPipe, NgOptimizedImage} from "@angular/common";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {NzTabsModule} from "ng-zorro-antd/tabs";
import {switchMap} from "rxjs";
import {ArticlesListComponent, ImageGalleryComponent} from "../../../shared/components";

@Component({
  selector: 'app-cell-phone-detail',
  standalone: true,
  imports: [
    NzButtonModule,
    NzFlexDirective,
    ImageGalleryComponent,
    NzRowDirective,
    NzRateComponent,
    FormsModule,
    NzColDirective,
    CurrencyPipe,
    NgOptimizedImage,
    NzIconDirective,
    NzTabsModule,
    ArticlesListComponent
  ],
  templateUrl: './cell-phone-detail.component.html',
  styleUrl: './cell-phone-detail.component.sass'
})
export class CellPhoneDetailComponent {
  article!: Signal<Article | undefined>;
  popularCellphones!: Signal<Article[]>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cellphoneService: CellphoneService,
    private router: Router
  ) {
    this.article = toSignal(
      this.activatedRoute.paramMap.pipe(
        switchMap((params: ParamMap) => this.cellphoneService.getCellphone(params.get('device')!))
      )
    )

    this.cellphoneService.updatePopularCellphones();
    this.popularCellphones = toSignal(this.cellphoneService.popularSmartphones, { initialValue: [] });
  }

  onArticleClick(article: Article): void {
    this.router.navigate(['cellphones', article.id]).then();
  }

  goBack(): void {
    this.router.navigate(['cellphones']).then();
  }
}
