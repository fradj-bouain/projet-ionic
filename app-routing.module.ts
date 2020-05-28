import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './service/auth-guard.service';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full', },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule) , canActivate: [AuthGuardService]},
  { path: 'reservation/:id', loadChildren: './reservation/reservation.module#ReservationPageModule',canActivate: [AuthGuardService] },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule',canActivate: [AuthGuardService] },
  { path: 'voiture', loadChildren: './voiture/voiture.module#VoiturePageModule',canActivate: [AuthGuardService] },
  { path: 'propos', loadChildren: './propos/propos.module#ProposPageModule',  canActivate: [AuthGuardService],},
  { path: 'add-voiture', loadChildren: './add-voiture/add-voiture.module#AddVoiturePageModule',canActivate: [AuthGuardService] },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'update-voiture/:id', loadChildren: './update-voiture/update-voiture.module#UpdateVoiturePageModule' ,canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
