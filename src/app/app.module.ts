import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './component/template/header/header.component';

import { MatToolbarModule} from '@angular/material/toolbar';
import { NavComponent } from './component/template/nav/nav.component';

import { MatSidenavModule } from '@angular/material/sidenav';

import { MatListModule } from '@angular/material/list';
import { FooterComponent } from './component/template/footer/footer.component';
import { HomeComponent } from './view/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { ProductCrudComponent } from './view/product-crud/product-crud.component';
import { ProductReadComponent } from './component/product/product-read/product-read.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { FornecedorCrudComponent } from './view/fornecedor-crud/fornecedor-crud.component';
import { FornecedorReadComponent } from './component/fornecedor/fornecedor-read/fornecedor-read.component';
import { ProductCreateComponent } from './component/product/product-create/product-create.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { FornecedorCreateComponent } from './component/fornecedor/fornecedor-create/fornecedor-create.component';
import { FormaPagReadComponent } from './component/formaPag/forma-pag-read/forma-pag-read.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    ProductCrudComponent,
    ProductReadComponent,
    FornecedorCrudComponent,
    FornecedorReadComponent,
    ProductCreateComponent,
    FornecedorCreateComponent,
    FormaPagReadComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatSnackBarModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
