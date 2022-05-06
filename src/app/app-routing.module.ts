import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { SettingComponent } from './setting/setting.component';
import { ThemesComponent } from './themes/themes.component';

const routes: Routes = [{
  path:'',
  component: DashboardComponent,
  
},
{
  path:'setting',
  component: SettingComponent,
  
},
{
  path:'themes',
  component: ThemesComponent,
  
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
