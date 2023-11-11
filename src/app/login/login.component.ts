import { Component, OnInit } from '@angular/core';

declare let g_id: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit() {
    this.loadGoogleSignIn();
  }

  loadGoogleSignIn() {
    g_id.load({
      client_id: '311112805220-pekanj5bnske7mbe420hi5hchru6lnet.apps.googleusercontent.com',
      login_uri: 'https://localhost:4200/login',
      ux_mode: 'popup',
      auto_prompt: false,
    });
  }
  
  // You can also add a method to handle the sign-in callback
  handleSignInCallback(response: any) {
    // handle the response here
    console.log(response);
  }
}
