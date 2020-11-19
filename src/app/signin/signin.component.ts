import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "../services/firebase.service";
import { SharedService  } from "../services/shared.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(public firebaseService : FirebaseService, public sharedService : SharedService) { }

  ngOnInit(): void {
  };
  async onSignIn(email: string, password: string){
    await this.firebaseService.signIn(email,password)
    if(this.firebaseService.isLogggedIn)
    this.sharedService.isSignedIn = true
  }
  
};
