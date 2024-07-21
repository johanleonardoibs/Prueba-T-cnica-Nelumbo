import {Component, input, InputSignal} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {NzCardComponent} from "ng-zorro-antd/card";
import {NzFlexDirective} from "ng-zorro-antd/flex";
import {NzRateComponent} from "ng-zorro-antd/rate";
import {FormsModule} from "@angular/forms";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {Article} from "../../../core/models/article.model";
import {NzModalModule, NzModalService} from "ng-zorro-antd/modal";
import {ArticleModalComponent} from "../article-modal/article-modal.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NzCardComponent,
    NzFlexDirective,
    NzModalModule,
    NzRateComponent,
    FormsModule,
    NzButtonComponent
  ],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.sass'
})
export class ArticleCardComponent {
  article: InputSignal<Article> = input.required<Article>()
  onArticleClick: InputSignal<Function> = input<Function>(() => {})

  constructor(private modalService: NzModalService, private router: Router) {}

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
