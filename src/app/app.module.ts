import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlldiceHeaderComponent } from './alldice-header/alldice-header.component';
import { AlldicePlayareaComponent } from './alldice-playarea/alldice-playarea.component';
import { AlldiceHomeComponent } from './alldice-home/alldice-home.component';

@NgModule({
  declarations: [
    AppComponent,
    AlldiceHeaderComponent,
    AlldicePlayareaComponent,
    AlldiceHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
