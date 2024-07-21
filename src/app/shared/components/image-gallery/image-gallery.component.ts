import {Component, input, InputSignal} from '@angular/core';
import {NgClass, NgOptimizedImage} from "@angular/common";
import {NzFlexDirective} from "ng-zorro-antd/flex";

@Component({
  selector: 'app-image-gallery',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NzFlexDirective,
    NgClass
  ],
  templateUrl: './image-gallery.component.html',
  styleUrl: './image-gallery.component.sass'
})
export class ImageGalleryComponent {
  images: InputSignal<string[]> = input<string[]>([])
  selectedImage: number = 0;
}
