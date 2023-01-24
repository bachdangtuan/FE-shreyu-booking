import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TripComponent} from "./trip.component";
import {TripDetailComponent} from "./trip-detail/trip-detail.component";
import {TripCreateComponent} from "./trip-create/trip-create.component";


const routes: Routes = [
    {path: 'list', component: TripComponent},
    {path: 'create', component: TripCreateComponent},
    {path: 'detail/:id', component: TripDetailComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TripRoutingModule {
}
