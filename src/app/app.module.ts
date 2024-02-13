import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EmployementDataDetailsComponent } from './employement-data-details/employement-data-details.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { EmployeeDetailsService } from './employee-details.service';


@NgModule({
  declarations: [
    AppComponent,
    EmployementDataDetailsComponent, 
  ],
  imports: [
    BrowserModule,AppRoutingModule
  ],
  providers: [EmployeeDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }


