import { TipoImovel } from './TipoImovel';

export class Imovel {
    public Id: string;
    public Descricao: string;
    public Nome: string;
    public Logradouro: string;
    public Bairro: string;
    public Cep: string;
    public CodigoIbgeMunicipio: string;
    public Tipo: TipoImovel;
    public Quartos: number;
    public Banheiros: number;
    public Latitude: string;
    public Longitude: string;
  }
