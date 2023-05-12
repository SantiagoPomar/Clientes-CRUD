import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { spClient } from 'src/app/model/spClient';
import { spClientService } from 'src/app/services/spClient.service';
import { ActivatedRoute, Params, Router } from '@angular/router'
@Component({
  selector: 'app-sp-client-new-edit',
  templateUrl: './sp-client-new-edit.component.html',
  styleUrls: ['./sp-client-new-edit.component.css']
})
export class SpClientNewEditComponent implements OnInit {

  spform: FormGroup = new FormGroup({});
  spClient: spClient = new spClient();
  spmessage: string = "";
  spid: number = 0;
  spedit: boolean = false;
  sphide = true;

  constructor(private aS: spClientService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.spid = data['id'];
      this.spedit = data['id'] != null;
      this.init();
    })
    this.spform = new FormGroup({
      id: new FormControl(),
      spName: new FormControl(),
      spAddress: new FormControl(),
      spPhone: new FormControl(),
      spEmail: new FormControl(),
      spYearOfBirth: new FormControl(),
      spDni: new FormControl()
    });
  }
  aceptar(): void {
    this.spClient.id = this.spform.value['id'];
    this.spClient.spName = this.spform.value['spName'];
    this.spClient.spAddress = this.spform.value['spAddress'];
    this.spClient.spPhone = this.spform.value['spPhone'];
    this.spClient.spEmail = this.spform.value['spEmail'];
    this.spClient.spYearOfBirth = this.spform.value['spYearOfBirth'];
    this.spClient.spDni = this.spform.value['spDni'];
    if (this.spform.value['spName'].length > 0 &&
      this.spform.value['spEmail'].length > 0) {

      if (this.spedit) {
        this.aS.update(this.spClient).subscribe((data) => {
          this.aS.list().subscribe(data => {
            this.aS.setList(data);
          })
        })
      } else {
        this.aS.insert(this.spClient).subscribe((data)=> {
          this.aS.list().subscribe(data => {
            this.aS.setList(data);
          })
        })
      }
      this.router.navigate(['spClient']);
    } else {
      this.spmessage = "Complete los campos requeridos!!!";
    }
  }

  init() {
    if (this.spedit) {
      this.aS.listId(this.spid).subscribe(data => {
        this.spform = new FormGroup({
          id: new FormControl(data.id),
          spName: new FormControl(data.spName),
          spAddress: new FormControl(data.spAddress),
          spPhone: new FormControl(data.spPhone),
          spEmail: new FormControl(data.spEmail),
          spYearOfBirth: new FormControl(data.spYearOfBirth),
          spDni: new FormControl(data.spDni)
        })
      })
    }
  }
}
