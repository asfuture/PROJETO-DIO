import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EscopoComponent } from './escopo/escopo.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {
    path:'', component: HeaderComponent,
  },
  {
    path:'home', component: HeaderComponent,
  }
  ,
  {
    path:'escopo', component: EscopoComponent,
  },
  {
    path:'footer', component: FooterComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
