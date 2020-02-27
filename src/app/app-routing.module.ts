import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { ListComponent } from './list/list.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent,
  canActivate: [AuthGuard]
},
{
  path: 'list',
  component: ListComponent,
  canActivate: [AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
