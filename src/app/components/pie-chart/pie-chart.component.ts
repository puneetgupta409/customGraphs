import { Component, OnInit, Input } from "@angular/core";
import { CommonService } from "../../../services/common-service";

interface PieSlice {
    label: string;
    value: number;
    color: string;
};
@Component({
    selector: 'app-pie-chart-component',
    templateUrl: './pie-chart.component.html',
    styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
    data: any;
    @Input() inputData: any;
    options: any;
    arrayOfValues = [];
    labelToShow: any = [];
    constructor(protected commonService: CommonService) { }
    ngOnInit() {
        // TO SHOW THE DATA WE ARE DOING LOOP TO GET AND PUSH THE VALUES
        let dataValue: any[] = [];
        const randomColors:any[] = [];
        for (let i = 0; i < this.inputData.values.length; i++) {
            randomColors.push(this.commonService.getRandomColor());
        }
        if (this.inputData && this.inputData.values.length) {
            this.inputData.values.forEach((element: any = [], index: number) => {
                this.labelToShow.push({
                    name: element.name,
                    value: element.value,
                    color: randomColors[index], // Use the corresponding random color for each element
                });
                dataValue.push(element.value)
                
            });
        }
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');

        this.data = {
            datasets: [
                {
                    data: dataValue,
                    backgroundColor: randomColors,
                    hoverBackgroundColor: randomColors
                }
            ]
        };

        this.options = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true,
                        color: textColor
                    }
                }
            }
        };
        // TO SHOW THE DATA WE ARE DOING LOOP TO GET AND PUSH THE VALUES
    }
}
