import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { FornecedorService } from "../fornecedor.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Fornecedor } from "../../model/fornecedor.model";

@Component({
  selector: "app-fornecedor-cadastro",
  templateUrl: "./fornecedor-cadastro.component.html",
  styleUrls: ["./fornecedor-cadastro.component.css"]
})
export class FornecedorCadastroComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private fornecedorService: FornecedorService,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.criarForm();
  }
  criarForm() {
    this.formulario = this.formBuilder.group({
      nome: ["", Validators.required],
      telefone: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      nif: ["", Validators.required],
      status: [""]
    });
  }

  // Submeter o Formulario
  onSubmit() {
    if (this.formulario.valid) {
      console.log(this.formulario.value);
      this.fornecedorService.guardarFunc(this.formulario.value);
      this.resetar();
    } else {
      console.log("Formulario Invalido!");
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
    const campoEmail = this.formulario.get("email");
    if (this.formulario.get("email").errors) {
      return this.formulario.get("email").errors.email && campoEmail.touched;
    }
  }
  aplicaCssErro(campo: string) {
    return {
      "has-error": this.verificarValidTouched(campo),
      "has-feedback": this.verificarValidTouched(campo)
    };
  }
}
