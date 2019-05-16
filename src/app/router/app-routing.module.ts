import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import { UtilisateurComponent } from '../utilisateur/utilisateur.component';
import { EditUtilisateurComponent } from '../edit-utilisateur/edit-utilisateur.component';

const routes: Routes = [
    {
        path : "user-component",
        component : UtilisateurComponent
    },
    {
        path : "editUser/:id",
        component : EditUtilisateurComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}