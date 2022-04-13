import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LogactivateguardService } from 'src/Guards/logactivateguard.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EmodetailsComponent } from './emodetails/emodetails.component';
import { EmalldetailsComponent } from './emalldetails/emalldetails.component';
import { ErrorComponent } from './error/error.component';
import { approutes } from './approutes';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    EmodetailsComponent,
    EmalldetailsComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(approutes),
    HttpClientModule
  ],
  providers: [LogactivateguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
