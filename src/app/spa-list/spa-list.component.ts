import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { UserModel } from '../form-create-edit/model/model';
import { Router } from '@angular/router';
import { Locations } from '../constants/constants'

@Component({
  selector: 'spa-list',
  templateUrl: './spa-list.component.html',
  styleUrls: ['./spa-list.component.scss']
})
export class SpaListComponent implements OnInit {

  userList: UserModel[];

  constructor(
    private service: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userList = this.service.getlist();
  }

  deleteUser(index: number) {
    this.userList.splice(index, 1);
  }

  editUser(selectedUser: UserModel, indexVal: number) {
    this.service.isEdit = true;
    this.service.selected = { selectedUser, indexVal };
    this.router.navigate(['/form']);
  }

  getSelectedVals(locations: any[]): any {
    return locations.map((checked, index) => checked ? Locations[index].name : null)
    .filter(value => value !== null);
  }

  navigateToForm() {
    this.service.isEdit = false;
    this.router.navigate(['/form']);
  }

}
