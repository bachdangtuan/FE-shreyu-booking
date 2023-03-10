import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
    {path: 'company', loadChildren: () => import('./company/company.module').then(m => m.CompanyModule)},
    {path: 'trip', loadChildren: () => import('./trip/trip.module').then(m => m.TripModule)},
    {path: 'vehicle', loadChildren: () => import('./vehicle/vehicle.module').then(m => m.VehicleModule)},
    {path: 'log', loadChildren: () => import('./log/log.module').then(m => m.LogModule)},
    // {path: 'calendar', loadChildren: () => import('./calendar/calendar.module').then(m => m.CalendarModule)},
    // {path: 'chat', loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule)},
    // {path: 'email', loadChildren: () => import('./email/email.module').then(m => m.EmailModule)},
    // {path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule)},
    // {path: 'tasks', loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule)},
    // {
    //     path: 'file-manager',
    //     loadChildren: () => import('./file-manager/file-manager.module').then(m => m.FileManagerModule)
    // }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppsRoutingModule {
}








