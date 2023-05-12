import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { spClient } from '../model/spClient';
import { Subject } from 'rxjs';
const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class spClientService {
  private spurl = `${base_url}/spClient`
  private spChangeList = new Subject<spClient[]>()

  constructor(private http: HttpClient) { }
  list() {
    return this.http.get<spClient[]>(this.spurl);
  }
  insert(spClient: spClient) {
    return this.http.post(this.spurl, spClient);
  }

  setList(NewList: spClient[]) {
    this.spChangeList.next(NewList);
  }
  getList() {
    return this.spChangeList.asObservable();
  }
  listId(id: number) {
    return this.http.get<spClient>(`${this.spurl}/${id}`);
  }
  update(aut: spClient) {
    return this.http.put(this.spurl + "/" + aut.id, aut);
  }
}
