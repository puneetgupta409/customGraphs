import { Component, OnInit , ChangeDetectorRef , ElementRef, AfterViewInit} from "@angular/core";
import {
    AbstractControl,
    FormBuilder,
    FormGroup,
    FormControl,
    Validators,
    FormArray
} from '@angular/forms';
import { defaultPieChartValue, defaultLineChartValue , defaultTreeChartValue } from '../../../enum/enum';
interface GraphType {
    graphName: string;
    graphCode: Number;
}
interface categoryData {
    code: Number;
    title: string;
    description: string;
    values: any
}
@Component({
    selector: 'app-base-component',
    templateUrl: './base-component.html',
    styleUrls: ['./base-component.scss']
})

export class BaseComponent implements OnInit , AfterViewInit{
    protected dataDiagramModal: boolean = false;
    protected submitted: boolean = false;
    protected graphType: GraphType[] | undefined;
    protected categoryArray: categoryData[] | undefined;
    protected createAddDiagramForm: FormGroup = new FormGroup({
        title: new FormControl(''),
        description: new FormControl(''),
        graph_type: new FormControl(''),
        values: new FormArray([this.createRow()])
    });
    defaultPieChartValue = defaultPieChartValue;
    defaultLineChartValue = defaultLineChartValue;
    defaultTreeChartValue = defaultTreeChartValue;
    minHeight: number = 0;
    constructor(protected formBuilder: FormBuilder,private cdr: ChangeDetectorRef,private el: ElementRef) {
        this.categoryArray = [];
    }
    ngOnInit(): void {
        //ADD VALIDATION ON DATA DIAGRAM FORM
        this.createAddDiagramForm = this.formBuilder.group(
            {
                title: ['', Validators.required],
                description: [
                    '',
                    [
                        Validators.required,
                        Validators.maxLength(200),
                    ],
                ],
                graph_type: ['', Validators.required],
                values: this.formBuilder.array([this.createRow()]),
            }
        );
        //ADD VALIDATION ON DATA DIAGRAM FORM

        this.graphType = [
            { graphName: 'Pie Chart', graphCode: 1 },
            { graphName: 'Line Chart', graphCode: 2 },
            { graphName: 'Tree Chart', graphCode: 3 },
        ];
        this.categoryArray!.push(
            {
                title: 'Sub-Category',
                code: 1,
                description: 'The assets are distributed between equity and cash & equivalents. ',
                values: this.defaultPieChartValue
            },
            {
                title: 'Fund Distribution',
                code: 2,
                description: 'A mutual fund distribution represents the earnings of a fund being passed on to the individual investor or unit holder of the fund.',
                values: this.defaultLineChartValue
            },
            {
                title: 'Top Sectors',
                code: 3,
                description: 'The assets are distributed between equity and cash & equivalents. ',
                values: this.defaultTreeChartValue
            },
        );
    }

    //OPEN DATA DIAGRAM MODAL
    openDataDiagramModal() {
        this.dataDiagramModal = true;
        this.createAddDiagramForm.reset();
    }
    //OPEN DATA DIAGRAM MODAL


    // SUBMIT ADD FORM 
    onSubmit() {
        this.submitted = true;
        if (this.createAddDiagramForm.invalid) {
            return;
        }
        const formValues = this.createAddDiagramForm.value;
        this.categoryArray!.push({
            title: formValues.title,
            code: formValues.graph_type.graphCode,
            description: formValues.description,
            values: formValues.values
        });
        this.dataDiagramModal = false;
    }
    // SUBMIT ADD FORM 

    // RESET THE DATA DIAGRAM FORM
    formReset() {
        this.dataDiagramModal = false;
        this.createAddDiagramForm.reset();
    }
    // RESET THE DATA DIAGRAM FORM

    // SHOW ERROR ON DATA DIAGRAM FORM
    get f(): { [key: string]: AbstractControl } {
        return (this.createAddDiagramForm as FormGroup).controls;
    }

    // SHOW ERROR ON DATA DIAGRAM FORM

    addValuesInGraph() {
        this.submitted = false;
        const value = this.createAddDiagramForm.get('values') as FormArray;
        value.push(this.createRow());
    }

    createRow() {
        return this.formBuilder.group({
            name: ['', [Validators.required]],
            value: ['', [Validators.required, Validators.min(1), Validators.max(100)]],
        })
    }

    // Getter method to access form array controls
    get valuesArray(): AbstractControl[] {
        return (this.createAddDiagramForm.get('values') as FormArray).controls;
    }
    // Getter method to access form array controls

    // RETURN THE HEIGHT OF DIV WHICH IS GREATER IN ALL OF THEM
    updateMinHeight(): void {
        this.minHeight = this.calculateMinHeight();
        this.cdr.detectChanges();
    }
    calculateMinHeight(): number {
        const divHeights = this.categoryArray!.map(item => {
            const div = this.el.nativeElement.querySelector(`#div-${item.code}`);
            return div ? div.offsetHeight : 0;
        });
        const minHeight = Math.max(...divHeights);
        return minHeight;
    }
    // RETURN THE HEIGHT OF DIV WHICH IS GREATER IN ALL OF THEM

    // DELETE THE ROW 
    deleteRow(index: number) {
        const valuesArray = this.createAddDiagramForm.get('values') as FormArray;
        valuesArray.removeAt(index);
    }

    // TO CALCULATE MIN HEIGHT OF THE DIV
    ngAfterViewInit(): void {
        this.updateMinHeight();
    }
}
