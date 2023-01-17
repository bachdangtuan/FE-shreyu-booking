import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CompanyListComponent} from "./company-list/company-list.component";
import {CompanyDetailComponent} from "./company-detail/company-detail.component";
import {CompanyCreateComponent} from "./company-create/company-create.component";

const routes: Routes = [
    {path: 'create', component: CompanyCreateComponent},
    {path: 'detail/:id', component: CompanyDetailComponent},
    {path: 'list', component: CompanyListComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CompanyRoutingModule {
}
