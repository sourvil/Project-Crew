import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "Project-Crew";
  rowData?: Object[];
  columnDefs = [
    {headerName: 'First Name', field: 'name', sortable: true, filter: true, width: 330 },
    {headerName: 'Last Name', field: 'surname', sortable: true, filter: true, width: 330 },
    {headerName: 'Nationality', field: 'nation', sortable: true, filter: true, width: 330 },
    {headerName: 'Title', field: 'newTitle', sortable: true, filter: true, width: 330 },
  ];
  
  ngOnInit(): void {   
    this.rowData = sampleData;
  }
}
