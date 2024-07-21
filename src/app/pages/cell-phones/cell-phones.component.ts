import {Component} from '@angular/core';
import {NzSpaceComponent} from "ng-zorro-antd/space";
import {NzFlexModule} from "ng-zorro-antd/flex";
import {NzGridModule, NzRowDirective} from "ng-zorro-antd/grid";
import {NzSelectModule} from "ng-zorro-antd/select";
import {FormsModule} from "@angular/forms";
import {NzInputDirective, NzInputGroupComponent} from "ng-zorro-antd/input";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {NgOptimizedImage} from "@angular/common";
import {RouterOutlet} from "@angular/router";
import {
  FooterComponent,
  HeaderComponent,
  ArticlesFilterComponent,
  ArticlesListComponent,
  CustomCarouselComponent
} from "../../shared/components";

@Component({
  selector: 'app-cell-phones',
  standalone: true,
  imports: [
    ArticlesFilterComponent,
    ArticlesListComponent,
    FooterComponent,
    HeaderComponent,
    NzFlexModule,
    NzGridModule,
    NzIconDirective,
    NzInputGroupComponent,
    NzInputDirective,
    NzSelectModule,
    NzSpaceComponent,
    NzRowDirective,
    FormsModule,
    NgOptimizedImage,
    CustomCarouselComponent,
    RouterOutlet
  ],
  templateUrl: './cell-phones.component.html',
  styleUrl: './cell-phones.component.sass'
})
export class CellPhonesComponent {

}
