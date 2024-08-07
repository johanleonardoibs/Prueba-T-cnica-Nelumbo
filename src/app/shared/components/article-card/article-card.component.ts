import {Component, input, InputSignal, OnInit, signal, WritableSignal} from '@angular/core';
import {CurrencyPipe, NgOptimizedImage} from "@angular/common";
import {NzCardComponent} from "ng-zorro-antd/card";
import {NzFlexDirective} from "ng-zorro-antd/flex";
import {NzRateComponent} from "ng-zorro-antd/rate";
import {FormsModule} from "@angular/forms";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {Article} from "../../../core/models/article.model";
import {NzModalModule, NzModalService} from "ng-zorro-antd/modal";
import {ArticleModalComponent} from "../article-modal/article-modal.component";
import {HoverDirective} from "../../directives/hover.directive";
import {FollowedComponent} from "../followed/followed.component";

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [
    HoverDirective,
    NgOptimizedImage,
    NzCardComponent,
    NzFlexDirective,
    NzModalModule,
    NzRateComponent,
    FormsModule,
    NzButtonComponent,
    FollowedComponent,
    CurrencyPipe
  ],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.sass'
})
export class ArticleCardComponent implements OnInit {
  article: InputSignal<Article> = input.required<Article>()
  onArticleClick: InputSignal<Function> = input<Function>(() => {})

  mainImage: WritableSignal<string> = signal("");

  constructor(private modalService: NzModalService) {}

  ngOnInit(): void {
    this.mainImage.set(
      this.article().images[0]
    )
  }

  swapMainImage() {
    if (this.article().images.length > 1) {
      this.mainImage.set(
        (this.mainImage() === this.article().images[0]) ? this.article().images[1] : this.article().images[0]
      );
    }
  }

  openArticleDetail(article: Article): void {
    this.modalService.create({
      nzContent: ArticleModalComponent,
      nzData: article,
      nzBodyStyle: {
        padding: '0',
      },
      nzClosable: false,
      nzFooter: [],
      nzClassName: 'no-footer-border'
    })
  }

  onItemClick(article: Article): void {
    this.onArticleClick()(article);
  }
}
