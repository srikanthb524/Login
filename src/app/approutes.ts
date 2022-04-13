import { HomeComponent } from "./home/home.component";
import { EmodetailsComponent } from "./emodetails/emodetails.component";
import { EmalldetailsComponent } from "./emalldetails/emalldetails.component";
import { LoginComponent } from "./login/login.component";
import { Routes } from "@angular/router";
import { ErrorComponent } from "./error/error.component";
import { LogactivateguardService } from "src/Guards/logactivateguard.service";

export const approutes:Routes=[
{path:'login',component:LoginComponent},
{path:'home', component:HomeComponent},
{path:'empall', component:EmalldetailsComponent, canActivate:[LogactivateguardService]},
{path:'empdetail', component:EmodetailsComponent},
{path:'',component:LoginComponent},
{path:'**',component:ErrorComponent}
];
