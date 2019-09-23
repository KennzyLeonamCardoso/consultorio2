import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'consultorio',
        loadChildren: () => import('./consultorio/consultorio.module').then(m => m.Consultorio2ConsultorioModule)
      },
      {
        path: 'pessoa',
        loadChildren: () => import('./pessoa/pessoa.module').then(m => m.Consultorio2PessoaModule)
      },
      {
        path: 'consulta',
        loadChildren: () => import('./consulta/consulta.module').then(m => m.Consultorio2ConsultaModule)
      },
      {
        path: 'funcionario',
        loadChildren: () => import('./funcionario/funcionario.module').then(m => m.Consultorio2FuncionarioModule)
      },
      {
        path: 'pagamento',
        loadChildren: () => import('./pagamento/pagamento.module').then(m => m.Consultorio2PagamentoModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class Consultorio2EntityModule {}
