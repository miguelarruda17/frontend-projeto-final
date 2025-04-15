import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { ProductCrudComponent } from './view/product-crud/product-crud.component';
import { FornecedorCrudComponent } from './view/fornecedor-crud/fornecedor-crud.component';
import { ProductCreateComponent } from './component/product/product-create/product-create.component';
import { FornecedorCreateComponent } from './component/fornecedor/fornecedor-create/fornecedor-create.component';

const routes: Routes = [
  {
 
  path: "",
  component: HomeComponent

  },
  {
    path: "products",
    component: ProductCrudComponent
  },  
  {
    path: "products/create",
    component: ProductCreateComponent

  },  
  {
    path: "fornecedores",
    component: FornecedorCrudComponent

  },
  {
    path: "fornecedores/create",
    component: FornecedorCreateComponent
  
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
