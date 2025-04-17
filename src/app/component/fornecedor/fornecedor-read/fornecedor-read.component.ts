import { Component, OnInit } from '@angular/core';
import { Fornecedor } from '../fornecedor.model';
import { FornecedorService } from '../fornecedor.service';

@Component({
  selector: 'app-fornecedor-read',
  templateUrl: './fornecedor-read.component.html',
  styleUrls: ['./fornecedor-read.component.css']
})
export class FornecedorReadComponent {

  fornecedores!: Fornecedor[];

  displayedColumns = ['id', 'nomeFantasia', 'razaoSocial', 'cnpj', 'action'];

  constructor(private fornecedorService: FornecedorService) { }

  ngOnInit(): void {
    this.fornecedorService.read().subscribe(fornecedores => {
      this.fornecedores = fornecedores;
      console.log(fornecedores);
    });
  }

}
