import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-private-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './private-header.component.html',
  styleUrl: './private-header.component.scss',
})
export class PrivateHeaderComponent {
  constructor(public authService: AuthService, private router: Router) {}

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
