import { HomeComponent } from './pages/home/home.component';
import { HorariosComponent } from './horarios.component';
import { AddHoraryComponent } from './pages/addHorary/addHorary.component';
import { TableHoraryComponent } from './components/tableHorary/tableHorary.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [CommonModule],
  declarations: [
    HorariosComponent,
    HomeComponent,
    AddHoraryComponent,
    TableHoraryComponent,
  ],
})
export class HorariosModule {}
