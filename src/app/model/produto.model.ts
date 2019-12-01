import { Fornecedor } from './fornecedor.model';

export class Produto {
    constructor(
        public id?: number,
        public descricao?: string,
        public quantidade?: number,
        public preco?: number,
        public dataFabrico?: string,
        public dataCaducidade?: string,
        public fornecedor?: Fornecedor
    ) {
    }
}
