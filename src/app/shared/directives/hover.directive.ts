import {Directive, HostListener, output, OutputEmitterRef} from '@angular/core';

@Directive({
  selector: '[hoverListener]',
  standalone: true
})
export class HoverDirective {

  onHover: OutputEmitterRef<void> = output()

  @HostListener('mouseenter', ['$event.target'])
  @HostListener('mouseleave', ['$event.target'])
  onHoverElement(): void {
    this.onHover.emit();
  }
}
