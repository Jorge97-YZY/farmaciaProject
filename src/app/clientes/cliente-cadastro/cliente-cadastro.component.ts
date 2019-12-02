import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cliente } from '../../model/cliente.model';
import { ClienteService } from '../cliente.service';
import { SharedService } from './../../shared/services/shared.service';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.css']
})
export class ClienteCadastroComponent implements OnInit {
  formulario: FormGroup;
  sexoOp: any[];

  constructor(
    private clienteService: ClienteService,
    private sharedService: SharedService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.criarForm();
    this.sexoOp = this.sharedService.getSexo();
  }
  // Validação dos Formularios
  criarForm() {
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.required],
      telefone: ['', Validators.required],
      bi: ['', Validators.required],
      bairro: ['', Validators.required],
      rua: [''],
      data_nac: ['', Validators.required],
      dataCadastro: ['', Validators.required],
      numCliente: ['', Validators.required],
      status: [''],
      sexo: ['M']
    });
  }
  // Submeter o Formulario
  onSubmit() {
    if (this.formulario.valid) {
      console.log(this.formulario.value);

      this.resetar();
    } else {
      console.log('Formulario Invalido!');
      this.verificaValidacoesForm(this.formulario);
    }
  }
  verificaValidacoesForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(campo => {
      console.log(campo);
      const controle = formGroup.get(campo);
      controle.markAsDirty();
      if (controle instanceof FormGroup) {
        this.verificaValidacoesForm(controle);
      }
    });
  }
  resetar() {
    this.formulario.reset();
  }
  verificarValidTouched(campo: string) {
    return (
      !this.formulario.get(campo).valid &&
      (this.formulario.get(campo).touched || this.formulario.get(campo).dirty)
    );
  }
  verificarEmailInvalido() {
    const campoEmail = this.formulario.get('email');
    if (this.formulario.get('email').errors) {
      return this.formulario.get('email').errors.email && campoEmail.touched;
    }
  }
  aplicaCssErro(campo: string) {
    return {
      'has-error': this.verificarValidTouched(campo),
      'has-feedback': this.verificarValidTouched(campo)
    };
  }
}
