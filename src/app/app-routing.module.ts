import { AlugarComponent } from './alugar/alugar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AnuncioComponent } from './anuncio/anuncio.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
    },
    { path: 'login', component: LoginComponent },
    { path: 'alugar', component: AlugarComponent },
    { path: 'anuncio', component: AnuncioComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
