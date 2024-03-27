import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeComponent } from './prime/prime.component';
import { ButtonModule } from 'primeng/button';
import { AccoaditonComponent } from './accoaditon/accoaditon.component';
import { AccordionModule } from 'primeng/accordion';
import { BoxComponent } from './box/box.component';
import { LoginComponent } from './login/login.component';
import { PopupComponent } from './popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeComponent,
    AccoaditonComponent,
    BoxComponent,
    LoginComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    AccordionModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
