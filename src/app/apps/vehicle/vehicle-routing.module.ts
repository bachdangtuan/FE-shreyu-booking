import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VehicleListComponent} from "./vehicle-list/vehicle-list.component";
import {VehicleCreateComponent} from "./vehicle-create/vehicle-create.component";


const routes: Routes = [
    {path: 'create', component: VehicleCreateComponent},
    {path: 'list', component: VehicleListComponent},
    // {path: 'detail/:id', component: TripDetailComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VehicleRoutingModule {
}
