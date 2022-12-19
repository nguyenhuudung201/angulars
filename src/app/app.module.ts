import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {studentComponent} from "./student/student.component";
import {classesComponent} from "./classes/classes.component";
import {productComponent} from "./product/product.component";
import {homeComponent} from "./home/home.component";
import {categoriesComponent} from "./Categories/Categories.component";
import { PagesComponent } from './pages/pages.component';
import {RouterModule, Routes} from "@angular/router";
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import {HttpClientModule} from "@angular/common/http";
import { SearchComponent } from './search/search.component';
import {FormsModule} from "@angular/forms";
// danh sanch routing
  const appRoutes: Routes=[
    {path:'', component: homeComponent},
    {path:'categories', component: categoriesComponent},
    {path:'product/:id', component: productComponent},
    {path:'login',component:LoginComponent},
    {path:'logout',component:LogoutComponent},
    {path:'search',component:SearchComponent}
  ]


@NgModule({
  declarations: [
    AppComponent, studentComponent, classesComponent,productComponent,homeComponent,categoriesComponent, PagesComponent, LoginComponent, LogoutComponent, SearchComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
