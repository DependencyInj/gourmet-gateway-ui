import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [SocialAuthService]
})
export class LoginComponent {

  constructor(private authService: SocialAuthService){}
  
  ngOnInit(){
    this.authService.authState.subscribe(resp => {
      console.log(resp);
      localStorage.setItem('access_token', resp.idToken);
    })
  }
}
