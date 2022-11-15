import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardHolderComponent } from '../card-holder/card-holder.component';
import { CardPageRoutingModule } from './card-page-routing.module';
import { CardPageComponent } from './card-page.component';
import { EeveeCardComponent } from '../cards/eevee-card/eevee-card.component';
import { SylveonCardComponent } from '../cards/sylveon-card/sylveon-card.component';
import { JolteonCardComponent } from '../cards/jolteon-card/jolteon-card.component';
import { VaporeonCardComponent } from '../cards/vaporeon-card/vaporeon-card.component';
import { FlareonCardComponent } from '../cards/flareon-card/flareon-card.component';
import { UmbreonCardComponent } from '../cards/umbreon-card/umbreon-card.component';
import { LeafeonCardComponent } from '../cards/leafeon-card/leafeon-card.component';
import { GlaceonCardComponent } from '../cards/glaceon-card/glaceon-card.component';
import { EspeonCardComponent } from '../cards/espeon-card/espeon-card.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    CardPageComponent,
    CardHolderComponent,
    EeveeCardComponent,
    SylveonCardComponent,
    EspeonCardComponent,
    UmbreonCardComponent,
    LeafeonCardComponent,
    GlaceonCardComponent,
    VaporeonCardComponent,
    FlareonCardComponent,
    JolteonCardComponent,
  ],
  imports: [CommonModule, CardPageRoutingModule, MatTabsModule, MatCardModule],
})
export class CardPageModule {}
