import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  signInUser(email: string, password: string){
    return new Promise(
      (resolve, reject) =>{
        firebase.auth().signInWithEmailAndPassword(email,password).then(
          (data)=>{
            resolve(data);
          }
        ).catch(
          (error)=>{reject(error);
          }
        )
      }
    );
  }

  logOutUser(){
    firebase.auth().signOut();
  }



  // signUpUser(email: string, password: string){
  //   return new Promise(
  //     (resolve, reject) =>{
  //       firebase.auth().createUserWithEmailAndPassword(email,password).then(
  //         ()=>{
  //           console.log('connecté');
  //           resolve();
  //         }
  //       ).catch(
  //         (error)=>{reject(error);
  //         }
  //       )
  //     }
  //   );
  // }
}
