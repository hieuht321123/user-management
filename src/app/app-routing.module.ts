import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { QuanlynguoidungAddComponent } from './component/quanlynguoidung-add/quanlynguoidung-add.component';
import { QuanlynguoidungDetailComponent } from './component/quanlynguoidung-detail/quanlynguoidung-detail.component';
import { QuanlynguoidungListComponent } from './component/quanlynguoidung-list/quanlynguoidung-list.component';
import { QuanlynguoidungComponent } from './component/quanlynguoidung/quanlynguoidung.component';
import { QuanlynguoidungEditComponent } from './component/quanlynguoidung-edit/quanlynguoidung-edit.component';
const routes: Routes = [


  {
    path:'',
    component: QuanlynguoidungComponent,
    children:[
      {
        path:'',
        component: QuanlynguoidungListComponent,
        
      },
      
      {
        path:':id/detail',
        component: QuanlynguoidungDetailComponent
      },
      {
        path:':id/edit',
        component: QuanlynguoidungEditComponent
      },
      {
        path:'add',
        component: QuanlynguoidungAddComponent
      }
      

    ]
  },

  {
    path:'**',
    component: NotfoundComponent
  }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
