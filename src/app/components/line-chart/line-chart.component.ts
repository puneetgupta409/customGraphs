import { Component, OnInit, Input } from "@angular/core";
import { CommonService } from "../../../services/common-service";


@Component({
    selector: 'app-line-chart-component',
    templateUrl: './line-chart.component.html',
    styleUrls: ['./line-chart.component.scss']
})

export class LineChartComponent implements OnInit {
    @Input() inputData: any;
    labelToShow: any = [];
    constructor(protected commonService: CommonService) {

    }
    ngOnInit(): void {
        // TO SHOW THE DATA WE ARE DOING LOOP TO GET AND PUSH THE VALUES
        if (this.inputData && this.inputData.values.length) {
            this.inputData.values.forEach((element: any = []) => {
                this.labelToShow.push({
                    name: element.name,
                    value: element.value,
                    color: this.commonService.getRandomColor(),
                });
            });
        }
        // TO SHOW THE DATA WE ARE DOING LOOP TO GET AND PUSH THE VALUES   
    }



    // TO GET THE PERCENTAGE ACCORDING TO THE 100 PERCENT 
    getTotalPercentage(): number {
        return this.labelToShow.reduce((total: number, slice: { name: string, value: number, color: string }) => total + slice.value, 0);
    }
    // TO GET THE PERCENTAGE ACCORDING TO THE 100 PERCENT 
}