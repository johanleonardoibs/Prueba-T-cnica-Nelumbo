import {Component, input, InputSignal} from '@angular/core';
import {NzCarouselModule} from "ng-zorro-antd/carousel";
import {NgOptimizedImage} from "@angular/common";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzIconDirective} from "ng-zorro-antd/icon";

@Component({
  selector: 'app-custom-carousel',
  standalone: true,
  imports: [NgOptimizedImage, NzButtonModule, NzCarouselModule, NzIconDirective],
  templateUrl: './custom-carousel.component.html',
  styleUrl: './custom-carousel.component.sass'
})
export class CustomCarouselComponent {
  carouselImages: InputSignal<string[]> = input.required<string[]>();
}
