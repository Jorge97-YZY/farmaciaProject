import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cliente } from '../../model/cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.css']
})
export class ClienteCadastroComponent implements OnInit {
  formPrincipal: FormGroup;
    cliente: Cliente = {
      nome: '',
      bi: '',
      bairro: '',
      rua: '',
      telefone: null,
      data_nac: '' ,
      dataCadastro: '',
      numCliente: '',
      status: false
    };

  constructor( private clienteService: ClienteService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.validarForm();
  }
 // Validação dos Formularios
 validarForm() {
  this.formPrincipal = this.formBuilder.group({
      'nome': ['', Validators.required],
      'telefone': [''],
      'bi': ['', Validators.required],
      'bairro': ['', Validators.required],
      'rua': [''],
      'data_nac': ['', Validators.required],
      'dataCadastro': ['', Validators.required],
      'numCliente': ['', Validators.required],
      'status': [''],
  });
}
// Submeter o Formulario
onSubmit() {
  const guardarCliente = new Cliente;
  guardarCliente.nome = this.cliente.nome;
  guardarCliente.bi = this.cliente.bi;
  guardarCliente.data_nac = this.cliente.data_nac;
  guardarCliente.telefone = this.cliente.telefone;
  guardarCliente.bairro = this.cliente.bairro;
  guardarCliente.rua = this.cliente.rua;
  guardarCliente.dataCadastro = this.cliente.dataCadastro;
  guardarCliente.numCliente = this.cliente.numCliente;
  guardarCliente.status = this.cliente.status;

  this.clienteService.guardarCliente(guardarCliente).subscribe(response => {
      console.log('Resultado:', response);
  });

}
}
