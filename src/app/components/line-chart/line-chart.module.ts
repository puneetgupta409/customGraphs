import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LineChartComponent } from './line-chart.component';
import { TooltipModule } from 'primeng/tooltip';
@NgModule({
  declarations: [
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    TooltipModule
  ],
  exports:[LineChartComponent],
  providers: []
})
export class LineChartComponentModule { }
