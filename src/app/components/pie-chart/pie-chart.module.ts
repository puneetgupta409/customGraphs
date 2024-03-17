import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PieChartComponent } from './pie-chart.component';
import { ChartModule } from 'primeng/chart';
@NgModule({
  declarations: [
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    ChartModule
  ],
  exports:[PieChartComponent],
  providers: []
})
export class PieChartComponentModule { }
