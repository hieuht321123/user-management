import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { City } from 'src/app/model/city';
import { Countries } from 'src/app/model/country';
import { States } from 'src/app/model/states';
import { User } from 'src/app/model/users';
import { CountyService } from 'src/app/service/county.service';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-quanlynguoidung-edit',
  templateUrl: './quanlynguoidung-edit.component.html',
  styleUrls: ['./quanlynguoidung-edit.component.css']
})
export class QuanlynguoidungEditComponent implements OnInit, OnDestroy{
//   user: User = {
//     id: 0,
//     name: '',
//     phone: 0,
//     email: '',
//     address: '',
//     countryId: 0,
//     statesId: 0,
//     citesId: 0
// };
user: any;
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
countries:Countries[] =[];
states: States[] =[];
citys: City[] =[];
countryID :any;
stateIDs: any;

cityID: any;

  public subcription ?: Subscription;
  public subcriptionParams ?: Subscription;
  constructor(
    private userService:UsersService,
    public routerService: Router,
    public activateRouterService: ActivatedRoute,
    private coutryService: CountyService,
    

  ) { }
  
  ngOnInit(): void {  
  

  this.getUserById();
     this.getAllCountry();
  
  }

getAllCountry(){
  this.coutryService.getAllCountry().subscribe(data =>{
    this.countries= data;
  
   });
}

    getUserById(){
    this.activateRouterService.params.subscribe((data: Params) =>{
     let id= data['id'];
     this.subcription = this.userService.getUserById(id).subscribe((users: User) =>{
      this.user= users;
      
      this.countryID= users.countryId;
      this.coutryService.getCountryById(this.countryID).subscribe(data =>{
        this.country = data;
       
     });

     this.stateIDs= users.statesId;
     this.coutryService.getStateById(this.stateIDs).subscribe(datas =>{
      this.state = datas;
     
   }); 

   this.cityID= users.citesId;
   this.coutryService.getByIdCity(this.cityID).subscribe(datass =>{
    this.city = datass;
   
 });
     

     });
    });

    
  }

 
 
 
  


  onChangeCountry(event: any) {
    const countryId= event.target.value;
    console.log(countryId)
    if (countryId) {
      this.coutryService.getStates(countryId).subscribe((data:any) => {
       this.states= data
        }
      );
    } else {
      this.states == null;
      
    }
  }
  onChangeStates(event: any){

    const statesId= event.target.value;
     
      if (statesId) {
        this.coutryService.getAllCity(statesId).subscribe((data:any) => {
         this.citys= data
         
           
          }
        );
      } else {
        this.citys == null;
        
      }
    }

    updateUser(){
      this.userService.updateUser(this.user).subscribe(data=>{
        this.routerService.navigate(['']);

     
      })
     
    }
 
    backtoList(){
      this.routerService.navigate(['']);
    }

 
  ngOnDestroy(): void {
    if(this.subcription){
      
    this.subcription?.unsubscribe();
    }
    if(this.subcriptionParams){
      this.subcriptionParams.unsubscribe();
    }
  }


}
