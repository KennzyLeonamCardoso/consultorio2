import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Consultorio2SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [Consultorio2SharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class Consultorio2HomeModule {}
