import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../form-create-edit/model/model';


@Injectable()
export class UserService {

  users : UserModel[] = [];
  selected: {selectedUser: UserModel, indexVal: number};
  isEdit: boolean = false;

  constructor() {}

  getlist(){
    return this.users;
  }
}

