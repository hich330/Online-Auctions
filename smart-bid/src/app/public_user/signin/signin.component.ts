import {Component, OnInit} from '@angular/core';

import {UserService} from '../../services/user.service';

@Component({
  selector: '<signin></signin>',
  templateUrl: 'signin.html',
  styleUrls: ['signin.css']
})
export class SigninComponent implements OnInit {

  constructor(public login:string,
              public password:string) {
  }


  user = {};

  loginAction(private userService:UserService) {

    this.userService.Login().subscribe(user => {

      this.user = Object.keys(user).map(
      =>{
        return {id: artist.id, name: artist.name}
      });

    }, error => console.error('Error: ' + error), () => console.log('Completed!'));

  }


  ngOnInit() {

  }

}
