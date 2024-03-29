import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Pessoa } from 'app/shared/model/pessoa.model';
import { PessoaService } from './pessoa.service';
import { PessoaComponent } from './pessoa.component';
import { PessoaDetailComponent } from './pessoa-detail.component';
import { PessoaUpdateComponent } from './pessoa-update.component';
import { PessoaDeletePopupComponent } from './pessoa-delete-dialog.component';
import { IPessoa } from 'app/shared/model/pessoa.model';

@Injectable({ providedIn: 'root' })
export class PessoaResolve implements Resolve<IPessoa> {
  constructor(private service: PessoaService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPessoa> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        filter((response: HttpResponse<Pessoa>) => response.ok),
        map((pessoa: HttpResponse<Pessoa>) => pessoa.body)
      );
    }
    return of(new Pessoa());
  }
}

export const pessoaRoute: Routes = [
  {
    path: '',
    component: PessoaComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'consultorio2App.pessoa.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/view',
    component: PessoaDetailComponent,
    resolve: {
      pessoa: PessoaResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'consultorio2App.pessoa.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'new',
    component: PessoaUpdateComponent,
    resolve: {
      pessoa: PessoaResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'consultorio2App.pessoa.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/edit',
    component: PessoaUpdateComponent,
    resolve: {
      pessoa: PessoaResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'consultorio2App.pessoa.home.title'
    },
    canActivate: [UserRouteAccessService]
  }
];

export const pessoaPopupRoute: Routes = [
  {
    path: ':id/delete',
    component: PessoaDeletePopupComponent,
    resolve: {
      pessoa: PessoaResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'consultorio2App.pessoa.home.title'
    },
    canActivate: [UserRouteAccessService],
    outlet: 'popup'
  }
];
