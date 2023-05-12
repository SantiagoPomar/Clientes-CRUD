import { Component, OnInit } from '@angular/core';
import { spClient } from 'src/app/model/spClient';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {AfterViewInit, ViewChild} from '@angular/core';
import { Router} from '@angular/router';
import { spClientService } from 'src/app/services/spClient.service';
@Component({
  selector: 'app-sp-client-list',
  templateUrl: './sp-client-list.component.html',
  styleUrls: ['./sp-client-list.component.css']
})
export class SpClientListComponent implements OnInit {

  spList: spClient[] = [];
  spdataSource: MatTableDataSource<spClient> = new MatTableDataSource();
  spdisplayedColumns: string[] = ['spID', 'spName', 'spAddress', 'spPhone', 'spEmail','spYearOfBirth','spDni','acciones1','acciones2'];

  constructor(private aS: spClientService, private router:Router) { }
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
    if(this.paginator){
      this.spdataSource.paginator = this.paginator;
      this.spdataSource.paginator.length = this.spList.length;
    }
  }

  ngOnInit(): void {

    this.aS.list().subscribe(data => {
      this.spdataSource = new MatTableDataSource(data);
      this.spList = data;
      this.spdataSource.paginator = this.paginator;
      this.spdataSource.paginator.length = this.spList.length;
    })

    this.aS.getList().subscribe(data => {
      this.spdataSource = new MatTableDataSource(data);
      this.spList = data;
    })

  }

}
