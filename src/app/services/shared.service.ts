import { Injectable } from '@angular/core';
import { FirebaseService } from "./firebase.service";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
 isSignedIn = false
  constructor(public firebaseService : FirebaseService) { }

  ngOnInit(){
    if(localStorage.getItem('user')!= null)
    this.isSignedIn = true
    else
    this.isSignedIn = false
  }
}
