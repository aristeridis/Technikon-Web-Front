import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { OwnerComponent } from './owner/owner.component';
import { AdminComponent } from './admin/admin.component';
import { CreatePropertyComponent } from './create-property/create-property.component';
import { UpdatePropertyComponent } from './update-property/update-property.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'owner', component: OwnerComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'create-property', component: CreatePropertyComponent },
    { path: 'update-property', component: UpdatePropertyComponent }
];
