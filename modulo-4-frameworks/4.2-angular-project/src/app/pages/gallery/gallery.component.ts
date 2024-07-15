import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Gallery } from '../../model';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RotateDirective } from '../../directive/rotate';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, RotateDirective],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent implements OnInit {
  ngOnInit(): void {}

  images: Gallery[] = [
    { id: 1, src: './assets/img1.jpg', title: 'Image 1' },
    { id: 2, src: './assets/img2.jpg', title: 'Image 2' },
    { id: 3, src: './assets/img3.jpg', title: 'Image 3' },
    { id: 4, src: './assets/img4.jpg', title: 'Image 4' },
    { id: 5, src: './assets/img5.jpg', title: 'Image 5' },
    { id: 6, src: './assets/img6.jpg', title: 'Image 6' },
    { id: 7, src: './assets/img7.jpg', title: 'Image 7' },
    { id: 8, src: './assets/img8.jpg', title: 'Image 8' },
  ];
  selectedImage = this.images[0];

  imageSize = 250;
  isPlaying = false;
  next = 3;
  intervalId: any;
  pageSize = 3;
  currentPage = 0;

  selectImage(img: Gallery) {
    this.selectedImage = img;
  }
  prevImage(): void {
    const currentIndex = this.images.indexOf(this.selectedImage);
    const index = (currentIndex - 1) % this.images.length;
    this.selectedImage = this.images[index];
  }
  nextImage(): void {
    const currentIndex = this.images.indexOf(this.selectedImage);
    const index = (currentIndex + 1) % this.images.length;
    this.selectedImage = this.images[index];
  }
  increaseSize() {
    this.imageSize += 1;
  }
  decreaseSize() {
    this.imageSize -= 1;
  }
  play() {
    this.isPlaying = true;
    this.intervalId = setInterval(() => this.nextImage(), 2000);
  }
  stop() {
    this.isPlaying = false;
    clearInterval(this.intervalId);
  }

  nextPage() {
    if ((this.currentPage + 1) * this.pageSize < this.images.length) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  getPaginatedImages() {
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    return this.images.slice(start, end);
  }
}
