import { RouterModule } from '@angular/router';
import { PlayerComponent } from './player.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerRotas } from './player.routes';
import { PanelLeftComponent } from 'src/app/components/panel-left/panel-left.component';
import { ButtonMenuComponent } from 'src/app/components/button-menu/button-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    PlayerComponent,
    PanelLeftComponent,
    ButtonMenuComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule.forChild(PlayerRotas)
  ]
})
export class PlayerModule { }
