import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  {
    path: 'serological-interpretation',
    loadChildren: () => import('./serological-interpretation/serological-interpretation.module').then( m => m.SerologicalInterpretationPageModule)
  },
  {
    path: 'intention-review',
    loadChildren: () => import('./intention-review/intention-review.module').then( m => m.IntentionReviewPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
