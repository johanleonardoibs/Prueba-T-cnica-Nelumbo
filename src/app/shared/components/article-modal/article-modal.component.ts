import { Component } from '@angular/core';
import {NzModalRef} from "ng-zorro-antd/modal";
import {Article} from "../../../core/models/article.model";
import {CurrencyPipe, NgOptimizedImage} from "@angular/common";
import {NzFlexDirective} from "ng-zorro-antd/flex";
import {NzDividerComponent} from "ng-zorro-antd/divider";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {NzButtonModule} from "ng-zorro-antd/button";

@Component({
  selector: 'app-article-modal',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NzButtonModule,
    NzDividerComponent,
    NzFlexDirective,
    NzIconDirective,
    CurrencyPipe,
  ],
  templateUrl: './article-modal.component.html',
  styleUrl: './article-modal.component.sass'
})
export class ArticleModalComponent {
  article: Article;

  constructor(private modalRef: NzModalRef) {
    this.article = this.modalRef.getConfig().nzData;
  }
}
