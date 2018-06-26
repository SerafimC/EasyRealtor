
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterestComponent } from './interest/interest.component';

const routes: Routes = [
    {
        path: '',
        component: InterestComponent,
        children: [
            { path: 'new_interest', component: InterestComponent }
        ]
    },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientRoutingModule { }
