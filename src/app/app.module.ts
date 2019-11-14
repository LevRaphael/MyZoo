import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './comps/general/header/header.component';
import { FooterComponent } from './comps/general/footer/footer.component';
import { NavComponent } from './comps/general/nav/nav.component';
import { PaginatorComponent } from './comps/general/paginator/paginator.component';
import { BeastsComponent } from './comps/cards/beasts-card/beasts.component';
import { BirdsComponent } from './comps/cards/birds-card/birds.component';
import { WildsComponent } from './comps/cards/wilds-card/wilds.component';
import { BeastPanelComponent } from './comps/panels/beast-panel/beast-panel.component';
import { BirdPanelComponent } from './comps/panels/bird-panel/bird-panel.component';
import { WildPanelComponent } from './comps/panels/wild-panel/wild-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    PaginatorComponent,
    BeastsComponent,
    BirdsComponent,
    WildsComponent,
    BeastPanelComponent,
    BirdPanelComponent,
    WildPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
