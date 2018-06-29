import { TipoInteresse } from './TipoInteresse';

export class Interesse {
    public Guid: string;
    public Email: string;
    public Tipo: TipoInteresse;
    public CodigoIbgeMunicipio: string;
    public Cep: string;
    public Bairro: string;
    public Logradouro: string;
    public Descricao: string;
    public Quartos: number;
    public Banheiros: number;
}
