import { Fornecedor } from './fornecedor.model';

export class Produto {
    constructor(
        public id?: number,
        public descricao?: string,
        public quantidade?: number,
        public preco?: number,
        public fornecedor?: Fornecedor
    ) {
    }
}
