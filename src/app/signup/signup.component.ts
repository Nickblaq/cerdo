import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "../services/firebase.service";
import { SharedService  } from "../services/shared.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public firebaseService : FirebaseService, public sharedService : SharedService) { }

  ngOnInit(): void {
  }

  async onSignUp(email: string, password: string){
    await this.firebaseService.signUp(email,password)
    if(this.firebaseService.isLogggedIn)
    this.sharedService.isSignedIn = true
  }

}
