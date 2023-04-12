import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path: "", component: MainComponent, pathMatch: 'full'},
  {path: "contact", component: ContactComponent},
  {path: "**", component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
