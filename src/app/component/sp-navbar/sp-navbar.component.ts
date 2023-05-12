import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-sp-navbar',
  templateUrl: './sp-navbar.component.html',
  styleUrls: ['./sp-navbar.component.css']
})
export class SpNavbarComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
