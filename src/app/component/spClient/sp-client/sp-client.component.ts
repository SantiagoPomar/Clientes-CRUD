import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-sp-client',
  templateUrl: './sp-client.component.html',
  styleUrls: ['./sp-client.component.css']
})
export class SpClientComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
