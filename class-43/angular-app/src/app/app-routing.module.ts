import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import {Page1Component} from './components/page-1/page-1.component'
import {Page2Component} from './components/page-2/page-2.component'

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/page-1'},
    {path: 'header', component: HeaderComponent},
    {path: 'page-1', component: Page1Component},
    {path: 'page-2', component: Page2Component, children: [
       
    ]}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }