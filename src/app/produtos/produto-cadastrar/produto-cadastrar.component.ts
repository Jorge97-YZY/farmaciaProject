import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ProdutoService } from '../produto.service';
import { FornecedorService } from 'src/app/fornecedores/fornecedor.service';
import { Fornecedor } from 'src/app/model/fornecedor.model';


@Component({
  selector: 'app-produto-cadastrar',
  templateUrl: './produto-cadastrar.component.html',
  styleUrls: ['./produto-cadastrar.component.css']
})
export class ProdutoCadastrarComponent implements OnInit {
  formulario: FormGroup;
  fornecedores: any[];
  constructor(
    private produtoService: ProdutoService,
    private fornecedorService: FornecedorService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.fornecedores = this.fornecedorService.fornList();
    this.criarForm();
    }
  criarForm() {
    this.formulario = this.formBuilder.group({
      descricao: [null, Validators.required],
      quantidade: [null, Validators.required],
      preco: [null, Validators.required],
      fornecedor: this.formBuilder.group({
        nome: [null, Validators.required],
        email: [null, Validators.required],
        telefone: [null, Validators.required],
        nif: [null, Validators.required],
        status: [null]
      })
    });
  }
  consultarFornecedor() {
    const forn = this.formulario.get('fornecedor.nome').value;
    const dados = this.fornecedorService.consultarForn(forn);
    this.popularDadosForm(dados);
    console.log(dados);
  }
  popularDadosForm(dados: any[]) {
    this.formulario.patchValue({
      fornecedor: {
        nome: dados.map(n => n.nome),
        email: dados.map(n => n.email) ,
        telefone: dados.map(n => n.telefone) ,
        nif: dados.map(n => n.nif) ,
        status: dados.map(n => n.status)
      }
    });
  }
  onSubmit() {
    if (this.formulario.valid) {
      console.log(this.formulario.value);
      // this.fornecedorService.guardarFunc(this.formulario.value);
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
  /* verificarEmailInvalido() {
    const campoEmail = this.formulario.get("email");
    if (this.formulario.get("email").errors) {
      return this.formulario.get("email").errors.email && campoEmail.touched;
    }
  } */
  aplicaCssErro(campo: string) {
    return {
      'has-error': this.verificarValidTouched(campo),
      'has-feedback': this.verificarValidTouched(campo)
    };
  }

}
