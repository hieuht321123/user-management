import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Countries } from 'src/app/model/country';
import { States } from 'src/app/model/states';
import { User } from 'src/app/model/users';
import { CountyService } from 'src/app/service/county.service';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-quanlynguoidung-add',
  templateUrl: './quanlynguoidung-add.component.html',
  styleUrls: ['./quanlynguoidung-add.component.css']
})
export class QuanlynguoidungAddComponent implements OnInit {
  selectedCountry: Countries = new Countries() ;
  countries : Countries[] =[];
  states :any;
  citys: any;
  tutorial: User = {
      name: '',
      phone: 0,
      email: '',
      address: '',
      countryId: 0,
      statesId: 0,
      citesId: 0
  };

  constructor(private router: Router,
    private formBuider: FormBuilder,
    private countriesService: CountyService,
    private userService: UsersService
    ) {}

  ngOnInit(): void {
    this.countriesService.getAllCountry().subscribe(data =>{
     this.countries= data;
     console.log(   this.countries);
    });
  
  }
    registerForm: FormGroup = this.formBuider.group({
    names: ['', [Validators.required]],
    phones: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
    emails:[null, [Validators.required, Validators.pattern('^[a-zA-Z0-9._-]+@fpt.com.vn')]],
    addresss:[null, [Validators.required]],
    country:[null, [Validators.required]],
    state:[null, [Validators.required]],
    city:[null, [Validators.required]]
  });
  get f() { return this.registerForm.controls; }

 
    addUser(){
    
      
     const data = this.createDto();
  
      this.userService.addUser(data).subscribe(data =>{
        if(data && data.id){
          this.router.navigate(['']);
  
        }
      })
      console.log(data);
     
  }

  createDto() {
    const userDto = {
      // name: this.f.names.value,
      // country: this.f.country.value
      name: this.f.names.value,
      phone: this.f.phones.value,
      email: this.f.emails.value,
      address: this.f.addresss.value,
      countryId: this.f.country.value,
      statesId: this.f.state.value,
      citesId: this.f.city.value
    }
    return userDto;
  }

  isNullOrUndefined(data: any) {
    return data === null || data === undefined;
  }

  onSubmit(){
    this.addUser();
    
  }



  onChangeCountry(event: any) {
    const countryId= event.target.value;
    console.log(countryId)
    if (countryId) {
      this.countriesService.getStates(countryId).subscribe((data:any) => {
       this.states= data
       
        console.log(data);
         
        }
      );
    } else {
      this.states == null;
      
    }
  }

  onChangeStates(event: any){

  const statesId= event.target.value;
    console.log(statesId)
    if (statesId) {
      this.countriesService.getAllCity(statesId).subscribe((data:any) => {
       this.citys= data
       
        console.log(data);
         
        }
      );
    } else {
      this.citys == null;
      
    }
  }


  backtoList(){
    this.router.navigate(['']);
  }


  }


