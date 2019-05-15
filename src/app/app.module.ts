import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { Utilisateur } from './utilisateur/utilisateur.component/utilisateur.component.component';
import { Affaire } from './component-model/affaire.component/affaire.component.component';
import { Tache } from './component-model/tache.component/tache.component.component';
import { Tribunal } from './component-model/tribunal.component/tribunal.component.component';
import { Role } from './component-model/role.component/role.component.component';
import { Phase } from './component-model/phase.component/phase.component.component';
import { PhaseComponent } from './component-model/phase/phase.component';
import { RoleComponent } from './component-model/role/role.component';
import { TribunalComponent } from './component-model/tribunal/tribunal.component';
import { TacheComponent } from './component-model/tache/tache.component';
import { AffaireComponent } from './component-model/affaire/affaire.component';
import { UtilisateurComponent } from './component-model/utilisateur/utilisateur.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    Utilisateur.ComponentComponent,
    Affaire.ComponentComponent,
    Tache.ComponentComponent,
    Tribunal.ComponentComponent,
    Role.ComponentComponent,
    Phase.ComponentComponent,
    PhaseComponent,
    RoleComponent,
    TribunalComponent,
    TacheComponent,
    AffaireComponent,
    UtilisateurComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
