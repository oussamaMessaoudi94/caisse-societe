import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EncaissementComponent } from './encaissement/encaissement.component';
import { EditEncaisseComponent } from './edit-encaisse/edit-encaisse.component';
import { DecaissementComponent } from './decaissement/decaissement.component';
import { EditDecaisseComponent } from './edit-decaisse/edit-decaisse.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../auth.guard';

export const routes: Routes = [
    {path:'', component:LoginComponent},
    {path:'home', component:HomeComponent, canActivate: [AuthGuard]},
    {path:'encaissement', component:EncaissementComponent, canActivate: [AuthGuard]},
    {path:'editEncaisse/:id', component:EditEncaisseComponent, canActivate: [AuthGuard]},
    {path:'decaissement', component:DecaissementComponent, canActivate: [AuthGuard]},
    {path:'editDecaissement/:id', component:EditDecaisseComponent, canActivate: [AuthGuard]},
];
