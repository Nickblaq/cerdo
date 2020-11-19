import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "../services/firebase.service";
import { SharedService  } from "../services/shared.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  expression:boolean = false;
  handleLogOut = this.sharedService.isSignedIn
  
  constructor(public firebaseService : FirebaseService, public sharedService : SharedService) { }

  ngOnInit(): void {
  }

  logOut(){
    this.firebaseService.logOut
    this.sharedService.isSignedIn = false
  }
}
