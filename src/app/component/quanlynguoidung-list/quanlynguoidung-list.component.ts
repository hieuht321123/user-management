import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from 'src/app/model/users';
import { UsersService } from 'src/app/service/users.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import * as _ from 'lodash';
@Component({
  selector: 'app-quanlynguoidung-list',
  templateUrl: './quanlynguoidung-list.component.html',
  styleUrls: ['./quanlynguoidung-list.component.css']
})
export class QuanlynguoidungListComponent implements OnInit, OnDestroy {
  closeResult = '';
  page = 1;
  pageSize =3;
  userList: User[] =[];
  p =1;
  searchValue='';

  sortBy: string='email';
  sortValue: number =1;


  public subcription ?: Subscription;
  constructor(private userService: UsersService,
    private routerService: Router
  ) { }
 
  
  ngOnInit(): void {
    this.loadAllUser();
  }
 
  onDeleteBuuKien(id: number){
    if(window.confirm('Bạn có chắc chắn muốn xóa ?')){
    this.subcription= this.userService.deleteUser(id).subscribe(data=>{
        this.routerService.navigate(['']);
        this.loadAllUser();
      })
    
    }}
 


  loadAllUser(){
    this.subcription = this.userService.getAllUser().subscribe(data =>{
      this.userList= data;
      
     })
  }
  onSort(name: any){
    this.sortBy= name;
    this.sortValue=- this.sortValue;

  }
  

  ngOnDestroy(): void {
    if(this.subcription){
      this.subcription.unsubscribe();
    }
  }


  

}
