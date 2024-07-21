import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {NzSpaceModule} from "ng-zorro-antd/space";
import {NzFlexModule} from "ng-zorro-antd/flex";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NzFlexModule,
    NzInputModule,
    NzIconDirective,
    NzSpaceModule,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.sass'
})
export class FooterComponent {

}
