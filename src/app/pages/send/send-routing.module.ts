import { SendFormComponent } from './send-form/send-form.component';
import { SendListComponent } from './send-list/send-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    // {path: '', component: SendListComponent},
    {path: '', component: SendFormComponent},
    {path: 'new', component: SendFormComponent},
    {path: ':id/edit', component: SendFormComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SendRoutingModule {
}
