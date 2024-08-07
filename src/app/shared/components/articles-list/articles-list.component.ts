import {Component, input, InputSignal} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {NzFlexDirective} from "ng-zorro-antd/flex";
import {ArticleCardComponent} from "../article-card/article-card.component";
import {NzGridModule} from "ng-zorro-antd/grid";
import {Article} from "../../../core/models/article.model";

@Component({
  selector: 'app-articles-list',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NzFlexDirective,
    NzGridModule,
    ArticleCardComponent
  ],
  templateUrl: './articles-list.component.html',
  styleUrl: './articles-list.component.sass'
})
export class ArticlesListComponent {
  articles: InputSignal<Article[]> = input.required<Article[]>();
  onArticleClick: InputSignal<Function> = input<Function>(() => {})
  lgSize: InputSignal<number> = input<number>(7)
  xsSize: InputSignal<number> = input<number>(11)
}
