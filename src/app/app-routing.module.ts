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
    loadChildren: () => import('./pages/intention-review/intention-review.module').then( m => m.IntentionReviewPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
