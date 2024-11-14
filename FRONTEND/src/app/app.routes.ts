import { Routes } from '@angular/router';
import { LoginComponent } from './Components/pages/login/login.component';
import { FormRegisterCenterComponent } from './Components/pages/Forms/form-register-center/form-register-center.component';
import { AboutMomentsComponent } from './Components/pages/about-moments/about-moments.component';

export const routes: Routes = [
    {path: 'login', component:LoginComponent},
    {path: 'register', component: FormRegisterCenterComponent},
    {path: 'about',component:AboutMomentsComponent}
];
