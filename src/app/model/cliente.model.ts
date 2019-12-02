export class Cliente {
    constructor(
        public id?: number,
        public nome?: string,
        public bi?: string,
        public data_nac?: string,
        public telefone?: number,
        public bairro?: string,
        public rua?: string,
        public dataCadastro?: string,
        public numCliente?: string,
        public sexo?: string,
        public status?: boolean
    ) {
    }
}
