import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

/* Page Components */
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

/* Basic UI Components */
import { FooterComponent } from './components/ui-components/footer/footer.component';
import { HeaderComponent } from './components/ui-components/header/header.component';

/* Dashboard Components */
import { DashboardComponent } from './components/dashboard-components/dashboard/dashboard.component';
import { AdminDashboardComponent } from './components/dashboard-components/admin-dashboard/admin-dashboard.component';
import { WorkerDashboardComponent } from './components/dashboard-components/worker-dashboard/worker-dashboard.component';
import { DashboardProductsListComponent } from './components/dashboard-components/dashboard-products-list/dashboard-products-list.component';
import { ButtonComponent } from './components/ui-components/button/button.component';
import { AddProductFormComponent } from './components/dashboard-components/add-product-form/add-product-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginFormComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    DashboardComponent,
    AdminDashboardComponent,
    WorkerDashboardComponent,
    HomeComponent,
    DashboardProductsListComponent,
    ButtonComponent,
    AddProductFormComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
