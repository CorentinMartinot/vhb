import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'serological-interpretation',
    loadChildren: () => import('./pages/serological-interpretation/serological-interpretation.module').then( m => m.SerologicalInterpretationPageModule)
  },
  {
    path: 'acute-hepatitis-b',
    loadChildren: () => import('./pages/acute-hepatitis-b/acute-hepatitis-b.module').then( m => m.AcuteHepatitisBPageModule)
  },
  {
    path: 'intention-review',
    loadChildren: () => import('./pages/chronic-hepatitis-b/intention-review/intention-review.module').then( m => m.IntentionReviewPageModule)
  },
  {
    path: 'medical-management-list',
    loadChildren: () => import('./pages/chronic-hepatitis-b/medical-management-list/medical-management-list.module').then( m => m.MedicalManagementListPageModule)
  },
  {
    path: 'inactive-or-recovered-carrier',
    loadChildren: () => import('./pages/inactive-or-recovered-carrier/inactive-or-recovered-carrier.module').then( m => m.InactiveOrRecoveredCarrierPageModule)
  },
  {
    path: 'medical-management-detail',
    loadChildren: () => import('./pages/chronic-hepatitis-b/medical-management-detail/medical-management-detail.module').then( m => m.MedicalManagementDetailPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
