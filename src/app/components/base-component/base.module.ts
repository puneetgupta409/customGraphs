import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BaseComponent } from './base-component';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { PieChartComponentModule } from '../pie-chart/pie-chart.module';
import { LineChartComponentModule } from '../line-chart/line-chart.module';
import { TreeChartComponentModule } from '../tree-chart/tree-chart.module';
@NgModule({
  declarations: [
    BaseComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    DialogModule,
    DropdownModule,
    PieChartComponentModule,
    LineChartComponentModule,
    TreeChartComponentModule
  ],
  exports:[BaseComponent],
  providers: []
})
export class BaseComponentModule { }
