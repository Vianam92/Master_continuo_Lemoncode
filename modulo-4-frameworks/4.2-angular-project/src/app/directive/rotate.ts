import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: 'img[rotate]',
  standalone: true,
})
export class RotateDirective implements OnInit {
  @Input() rotate: string = "0";
  @Input() step: number = 10;
  currentRotation: number = 0;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.currentRotation = Number(this.rotate);
    this.applyRotation();
  }

  @HostListener('click', ['$event'])

  onClick(event: MouseEvent) {
    if (event.shiftKey) {
      this.currentRotation -= this.step;
    } else {
      this.currentRotation += this.step;
    }
    this.applyRotation();
  }

  private applyRotation() {
    this.el.nativeElement.style.transform = `rotate(${this.currentRotation}deg)`;
  }
}
