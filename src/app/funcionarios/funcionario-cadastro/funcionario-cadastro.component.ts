import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../../model/funcionario.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-funcionario-cadastro',
  templateUrl: './funcionario-cadastro.component.html',
  styleUrls: ['./funcionario-cadastro.component.css']
})
export class FuncionarioCadastroComponent implements OnInit {
  formPrincipal: FormGroup;
  funcionario: Funcionario = {
    nome: '',
    bi: '',
    bairro: '',
    rua: '',
    telefone: null,
    data_nasc: '' ,
    dataAdmisao: '',
    numFunc: '',
    status: false
  };

  constructor( private funcionarioService: FuncionarioService,
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
      'dataAdmisao': ['', Validators.required],
      'numFunc': ['', Validators.required],
      'status': [''],
  });
}
// Submeter o Formulario
onSubmit() {
  const guardarFuncionario = new Funcionario;
  guardarFuncionario.nome = this.funcionario.nome;
  guardarFuncionario.bi = this.funcionario.bi;
  guardarFuncionario.data_nasc = this.funcionario.data_nasc;
  guardarFuncionario.telefone = this.funcionario.telefone;
  guardarFuncionario.bairro = this.funcionario.bairro;
  guardarFuncionario.rua = this.funcionario.rua;
  guardarFuncionario.dataAdmisao = this.funcionario.dataAdmisao;
  guardarFuncionario.numFunc = this.funcionario.numFunc;
  guardarFuncionario.status = this.funcionario.status;

  this.funcionarioService.guardarFuncionario(guardarFuncionario).subscribe(response => {
      console.log('Resultado:', response);
  });

}

}
