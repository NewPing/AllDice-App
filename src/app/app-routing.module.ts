import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlldiceHomeComponent } from './alldice-home/alldice-home.component';
import { AlldicePlayareaComponent } from './alldice-playarea/alldice-playarea.component';

const routes: Routes = [
  { path: '', component: AlldiceHomeComponent},
  { path: 'play', component: AlldicePlayareaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
