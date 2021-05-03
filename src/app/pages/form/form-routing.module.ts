import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormListComponent} from "./form-list/form-list.component";
import {FormFormComponent} from "./form-form/form-form.component";

const routes: Routes = [
    {path: '', component: FormListComponent},
    {path: 'new', component: FormFormComponent},
    {path: ':id/edit', component: FormFormComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FormRoutingModule {
}
