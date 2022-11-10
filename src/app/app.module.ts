import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardHolderComponent } from './card-holder/card-holder.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { NgStyle } from '@angular/common';
import { EeveeCardComponent } from './cards/eevee-card/eevee-card.component';
import { SylveonCardComponent } from './cards/sylveon-card/sylveon-card.component';
import { EspeonCardComponent } from './cards/espeon-card/espeon-card.component';
import { UmbreonCardComponent } from './cards/umbreon-card/umbreon-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardHolderComponent,
    HeaderComponent,
    EeveeCardComponent,
    SylveonCardComponent,
    EspeonCardComponent,
    UmbreonCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    NgStyle,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
