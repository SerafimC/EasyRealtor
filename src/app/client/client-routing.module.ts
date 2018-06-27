
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterestComponent } from './interest/interest.component';
import { RealtySearchComponent } from './realty-search/realty-search.component';

const routes: Routes = [
        { path: 'new_interest', component: InterestComponent },
        { path: 'realty_search', component: RealtySearchComponent }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientRoutingModule { }
