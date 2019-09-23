import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Consultorio2SharedModule } from 'app/shared/shared.module';
import { FuncionarioComponent } from './funcionario.component';
import { FuncionarioDetailComponent } from './funcionario-detail.component';
import { FuncionarioUpdateComponent } from './funcionario-update.component';
import { FuncionarioDeletePopupComponent, FuncionarioDeleteDialogComponent } from './funcionario-delete-dialog.component';
import { funcionarioRoute, funcionarioPopupRoute } from './funcionario.route';

const ENTITY_STATES = [...funcionarioRoute, ...funcionarioPopupRoute];

@NgModule({
  imports: [Consultorio2SharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    FuncionarioComponent,
    FuncionarioDetailComponent,
    FuncionarioUpdateComponent,
    FuncionarioDeleteDialogComponent,
    FuncionarioDeletePopupComponent
  ],
  entryComponents: [FuncionarioDeleteDialogComponent]
})
export class Consultorio2FuncionarioModule {}
