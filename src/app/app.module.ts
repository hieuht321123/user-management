import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuanlynguoidungComponent } from './component/quanlynguoidung/quanlynguoidung.component';
import { QuanlynguoidungListComponent } from './component/quanlynguoidung-list/quanlynguoidung-list.component';
import { QuanlynguoidungEditComponent } from './component/quanlynguoidung-edit/quanlynguoidung-edit.component';
import { QuanlynguoidungDetailComponent } from './component/quanlynguoidung-detail/quanlynguoidung-detail.component';
import { QuanlynguoidungAddComponent } from './component/quanlynguoidung-add/quanlynguoidung-add.component';
import { HttpClientModule } from '@angular/common/http';
import { CountyService } from './service/county.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { SearchPipe } from './pipe/search.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { UsersService } from './service/users.service';
import { TestValidateFormComponent } from './component/test-validate-form/test-validate-form.component';
import { SortPipe } from './pipe/sort.pipe';
@NgModule({
  declarations: [
    AppComponent,
    QuanlynguoidungComponent,
    QuanlynguoidungListComponent,
    QuanlynguoidungEditComponent,
    QuanlynguoidungDetailComponent,
    QuanlynguoidungAddComponent,
    NotfoundComponent,
    SearchPipe,
    TestValidateFormComponent,
    SortPipe
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbPaginationModule, 
    NgbAlertModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  providers: [CountyService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
