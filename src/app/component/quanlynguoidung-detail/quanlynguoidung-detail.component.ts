import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { City } from 'src/app/model/city';
import { Countries } from 'src/app/model/country';
import { States } from 'src/app/model/states';
import { User } from 'src/app/model/users';
import { CountyService } from 'src/app/service/county.service';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-quanlynguoidung-detail',
  templateUrl: './quanlynguoidung-detail.component.html',
  styleUrls: ['./quanlynguoidung-detail.component.css']
})
export class QuanlynguoidungDetailComponent implements OnInit {

  user: User = {
    name: '',
    phone: 0,
    email: '',
    address: '',
    countryId: 0,
    statesId: 0,
    citesId: 0
};
country: Countries={
  id : 0 ,
  nameCountry :''
}
state: States={
    id : 0,
    countyId : 0,
    nameStates : ''
}
city: City ={
  id : 0 ,
  nameCities : '',
  statesId : 0
}
  public subcription ?: Subscription;
  public subcriptionParams ?: Subscription;
  constructor(
    public userService:UsersService,
    public routerService: Router,
    public activateRouterService: ActivatedRoute,
    private coutryService: CountyService

  ) { }
  ngOnInit(): void {
     this.getUserById();
     
 
  }
    getUserById(){
    this.activateRouterService.params.subscribe((data: Params) =>{
     let id= data['id'];
     this.subcription = this.userService.getUserById(id).subscribe((user: User) =>{
      this.user= user;
      let countryID= user.countryId;
      let stateIDs= user.statesId;
      let cityID= user.citesId;
      
      this.coutryService.getCountryById(countryID).subscribe(data =>{
        this.country = data;
        console.log(data.nameCountry);
     });

     this.coutryService.getStateById(stateIDs).subscribe(datas =>{
      this.state = datas;
      console.log(datas.nameStates);
   });
     
   this.coutryService.getCityById(cityID).subscribe(datas =>{
    this.city = datas;
    console.log(datas.nameCities);
 });
     });
    });

    
  }
  backtolist(){
    this.routerService.navigate(['']);
  }

}
