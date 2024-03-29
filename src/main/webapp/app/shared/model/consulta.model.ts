import { Moment } from 'moment';
import { IPagamento } from 'app/shared/model/pagamento.model';
import { IPessoa } from 'app/shared/model/pessoa.model';
import { IConsultorio } from 'app/shared/model/consultorio.model';
import { TipoProcedimento } from 'app/shared/model/enumerations/tipo-procedimento.model';
import { TipoPagamento } from 'app/shared/model/enumerations/tipo-pagamento.model';

export interface IConsulta {
  id?: number;
  dataConsulta?: Moment;
  tipoProcedimento?: TipoProcedimento;
  tipoPagamento?: TipoPagamento;
  pagamento?: IPagamento;
  pessoas?: IPessoa[];
  consultorios?: IConsultorio[];
}

export class Consulta implements IConsulta {
  constructor(
    public id?: number,
    public dataConsulta?: Moment,
    public tipoProcedimento?: TipoProcedimento,
    public tipoPagamento?: TipoPagamento,
    public pagamento?: IPagamento,
    public pessoas?: IPessoa[],
    public consultorios?: IConsultorio[]
  ) {}
}
