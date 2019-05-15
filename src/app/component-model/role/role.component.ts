import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/model/role';
import { RoleService } from 'src/app/service/role.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {

  roles:any[];
  role: Role = new Role();
  constructor(private roleService:RoleService, private router: Router) { }

  ngOnInit() {
    this.loadRole();
  }

  loadRole(){
    this.roleService.getAllRoles().subscribe(data => {this.roles = data;}, 
      error => {console.log(error);});
  }

  createRole(){
    this.roleService.saveRole(this.role).subscribe(()=>{this.loadRole();
      this.role = new Role();})
  }

  deleteRole(role)
  {
    this.roleService.deleteRole(role.idRole).subscribe(()=>
      {this.loadRole();}, error=>console.log(error));
  }

  editRole(role):void
  {
    localStorage.removeItem("editRoleId");
    localStorage.setItem("editRoleId", role.idRole.toString());
    this.router.navigate(['editRole', role.idRole]);
  }

}
