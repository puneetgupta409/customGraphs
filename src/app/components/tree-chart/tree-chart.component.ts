import { Component, OnInit, Input } from "@angular/core";
import { CommonService } from "../../../services/common-service";

interface PieSlice {
    label: string;
    value: number;
    color: string;
};
@Component({
    selector: 'app-tree-chart-component',
    templateUrl: './tree-chart.component.html',
    styleUrls: ['./tree-chart.component.scss']
})
export class TreeChartComponent implements OnInit {
    data: any;
    @Input() inputData: any;
    options: any;
    arrayOfValues = [];
    labelToShow: any = [];
    rows: any[] = [];
    constructor(protected commonService: CommonService) { }
    ngOnInit() {
        // TO SHOW THE DATA WE ARE DOING LOOP TO GET AND PUSH THE VALUES
        if (this.inputData && this.inputData.values.length) {
            this.inputData.values.forEach((element: any = []) => {
                this.labelToShow.push({
                    name: element.name,
                    value: element.value,
                    color: this.commonService.getRandomColor(),
                });
            });
            this.rows = this.chunkArray(this.labelToShow, 2);
            this.calculateRowPercentages();
        }
        // TO SHOW THE DATA WE ARE DOING LOOP TO GET AND PUSH THE VALUES
    }
    
    // TO CALCULATE THE DATA AND DIVIDE INTO ROWS ACCORDING THE USER ADDED PERCENTAGE
    chunkArray(array: any[], size: number): any[] {
        const chunkedArray = [];
        for (let i = 0; i < array.length; i += size) {
            chunkedArray.push(array.slice(i, i + size));
        }
        return chunkedArray;
    }
    calculateRowPercentages() {
        this.rows.forEach(row => {
            const totalValue = row.reduce((acc: number, item: any) => acc + item.value, 0);
            row.forEach((item: any) => {
                item.percentage = (item.value / totalValue) * 100;
            });
        });
    }
    // TO CALCULATE THE DATA AND DIVIDE INTO ROWS ACCORDING THE USER ADDED PERCENTAGE


    // TO GET THE PERCENTAGE ACCORDING TO THE 100 PERCENT 
    getTotalPercentage(): number {
            return this.labelToShow.reduce((total: number, slice: { name: string, value: number, color: string }) => total + slice.value, 0);
    }
    // TO GET THE PERCENTAGE ACCORDING TO THE 100 PERCENT 
}






