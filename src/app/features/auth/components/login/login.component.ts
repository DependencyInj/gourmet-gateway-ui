import { GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
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
    // this.signInWithGoogle();
    this.authService.authState.subscribe(resp => {
      console.log(resp);
    })
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(user => {
      console.log(user);
      // this.user = user;
      // this.loggedIn = (user != null);

      // this.http.post<any>('https://yourapi.com/api/auth/google', { token: user.idToken }).subscribe(response => {
      //   localStorage.setItem('access_token', response.token);
      //   this.router.navigate(['/']);
      // });
    });
  }
}
