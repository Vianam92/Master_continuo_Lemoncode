import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';
import { PublicHeaderComponent } from './layout/public-header/public-header.component';
import { PrivateHeaderComponent } from './layout/private-header/private-header.component';
import { PublicMenuComponent } from './layout/public-menu/public-menu.component';
import { PrivateMenuComponent } from './layout/private-menu/private-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FooterComponent,
    PublicHeaderComponent,
    PrivateHeaderComponent,
    PublicMenuComponent,
    PrivateMenuComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(public authService: AuthService) {}
}
