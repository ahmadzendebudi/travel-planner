import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { CityContentComponent } from './main/city-content/city-content.component';

const routes: Routes = [
  {path: "", component: MainComponent, children: [
    { path: 'city/:city', component: CityContentComponent}
  ]},
  {path: "contact", component: ContactComponent},
  {path: "**", component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
