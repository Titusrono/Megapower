import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { TeamComponent } from './team/team.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
    {'path': 'home', component:HomeComponent},
    {'path': 'product', component:ProductComponent},
    {'path': 'team', component:TeamComponent},
    {'path': 'user', component:UserComponent}
];
