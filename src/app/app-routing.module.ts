import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './public/error/not-found/not-found.component';
import { HomeComponent } from './public/general/home/home.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo:"/home"
  },
  {
    path: "security",
    loadChildren: () => import("./modules/security/security.module").then(x => x.SecurityModule)
  },
  {
    path: "parameters",
    loadChildren: () => import("./modules/parameters/parameters.module").then(x => x.ParametersModule)
  },
  {
    path: "validation",
    loadChildren: () => import("./modules/validation/validation.module").then(x => x.ValidationModule)
  },
  {
    path: "reports",
    loadChildren: () => import("./modules/reports/reports.module").then(x => x.ReportsModule)
  },
  {
    path: "**",
    component: NotFoundComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
