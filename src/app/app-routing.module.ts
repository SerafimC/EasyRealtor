
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { IndexComponent } from './index/index.component';
import { AlertComponentOK } from './shared/alerts/alertOK/alertOK.component';
import { AlertComponentOKCancel } from './shared/alerts/alertOKCancel/alertOKCancel.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
    },
    { path: 'login', component: LoginComponent },
    { path: 'alertOK', component: AlertComponentOK },
    { path: 'alertOKCancel', component: AlertComponentOKCancel },
    { path: 'register', component: RegisterComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'index', component: IndexComponent },
    { path: 'client', loadChildren: './client/client.module#ClientModule'}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
