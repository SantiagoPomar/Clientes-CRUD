import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpNavbarComponent } from './component/sp-navbar/sp-navbar.component';
import { SpClientComponent } from './component/spClient/sp-client/sp-client.component';
import { SpClientNewEditComponent } from './component/spClient/sp-client-new-edit/sp-client-new-edit.component';
import { SpClientViewComponent } from './component/spClient/sp-client-view/sp-client-view.component';
const routes: Routes = [
  {
    path: 'spClient', component: SpClientComponent, children: [
      { path: 'spNew', component: SpClientNewEditComponent },
      { path: 'spEdit/:id', component: SpClientNewEditComponent },
      { path: 'spView/:id', component: SpClientViewComponent }
    ],
  },
  {
    path: 'spNavbar', component: SpNavbarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
