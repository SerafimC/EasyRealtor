import { TipoImovel } from "./TipoImovel";

export class Interesse {
    public Guid : string;
    public Email : string;
    public Tipo : TipoImovel;
    public CodigoIbgeMunicipio : string;
    public Cep : string;
    public Bairro : string;
    public Logradouro : string;
    public Descricao : string;
    public Quartos : number;
    public Banheiros : number;
}