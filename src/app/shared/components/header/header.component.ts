import { Component } from '@angular/core';
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzPageHeaderModule} from "ng-zorro-antd/page-header";
import {NgOptimizedImage} from "@angular/common";
import {NzMenuModule} from "ng-zorro-antd/menu";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NzButtonModule, NzPageHeaderModule, NzIconModule, NzMenuModule, NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent {

}
