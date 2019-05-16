import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';


import { RoleComponent } from './role/role.component';
import { TribunalComponent } from './tribunal/tribunal.component';
import { TacheComponent } from './tache/tache.component';
import { AffaireComponent } from './affaire/affaire.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { UtilisateurService } from './service/utilisateur.service';
import { AffaireService } from './service/affaire.service';
import { RoleService } from './service/role.service';
import { TribunalService } from './service/tribunal.service';
import { TacheService } from './service/tache.service';
import { EditUtilisateurComponent } from './edit-utilisateur/edit-utilisateur.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    AppComponent,
    RoleComponent,
    TribunalComponent,
    TacheComponent,
    AffaireComponent,
    UtilisateurComponent,
    EditUtilisateurComponent

  ],
  providers: [UtilisateurService, AffaireService, RoleService, TribunalService, TacheService],
  bootstrap: [AppComponent]
})
export class AppModule { }
