import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  isUser: boolean;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService) { }
  showUserProfile = () => {
    this.isUser = !this.isUser;
  }
  logoutUser = () => {
    this.authService.logout();
  }
}
