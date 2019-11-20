import { Component, OnInit } from '@angular/core';
import { FornecedorService } from '../fornecedor.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Fornecedor } from '../../model/fornecedor.model';

@Component({
  selector: 'app-fornecedor-cadastro',
  templateUrl: './fornecedor-cadastro.component.html',
  styleUrls: ['./fornecedor-cadastro.component.css']
})
export class FornecedorCadastroComponent implements OnInit {

  formPrincipal: FormGroup;
    fornecedor: Fornecedor = {
        nome: '',
        telefone: null,
        nif: '',
        status: false,
    };
  constructor(
    private fornecedorService: FornecedorService,
        private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.validarForm();
  }
  // Validação dos Formularios
  validarForm() {
    this.formPrincipal = this.formBuilder.group({
        'nome': ['', Validators.required],
        'telefone': [''],
        'email': ['', Validators.required],
        'nif': ['', Validators.required],
        'status': [''],
    });
}


// Submeter o Formulario
onSubmit() {
  const guardarFornecedor = new Fornecedor;
  guardarFornecedor.nome = this.fornecedor.nome;
  guardarFornecedor.telefone = this.fornecedor.telefone;
  guardarFornecedor.email = this.fornecedor.email;
  guardarFornecedor.nif = this.fornecedor.nif;
  guardarFornecedor.status = this.fornecedor.status;
  this.fornecedorService.guardarFornecedor(guardarFornecedor).subscribe(response => {
      console.log('Resultado:', response);
  });

}
}
