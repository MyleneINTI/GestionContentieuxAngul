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
import { PhaseComponent } from './component-model/phase/phase.component';
import { RoleComponent } from './component-model/role/role.component';
import { TribunalComponent } from './component-model/tribunal/tribunal.component';
import { TacheComponent } from './component-model/tache/tache.component';
import { AffaireComponent } from './component-model/affaire/affaire.component';
import { UtilisateurComponent } from './component-model/utilisateur/utilisateur.component';
import { UtilisateurService } from './service/utilisateur.service';
import { AffaireService } from './service/affaire.service';
import { RoleService } from './service/role.service';
import { TribunalService } from './service/tribunal.service';
import { TacheService } from './service/tache.service';
import { PhaseService } from './service/phase.service';

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
    PhaseComponent,
    RoleComponent,
    TribunalComponent,
    TacheComponent,
    AffaireComponent,
    UtilisateurComponent

  ],
  providers: [UtilisateurService, AffaireService, RoleService, TribunalService, TacheService],
  bootstrap: [AppComponent]
})
export class AppModule { }
