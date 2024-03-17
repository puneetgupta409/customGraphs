import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TreeChartComponent } from './tree-chart.component';
import { TooltipModule } from 'primeng/tooltip';
@NgModule({
  declarations: [
    TreeChartComponent
  ],
  imports: [
    BrowserModule,
    TooltipModule,
  ],
  exports:[TreeChartComponent],
  providers: []
})
export class TreeChartComponentModule { }


