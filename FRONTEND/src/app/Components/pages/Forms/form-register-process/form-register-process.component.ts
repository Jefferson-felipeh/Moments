import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { ViewEncapsulation } from '@angular/core';

import axios from 'axios';

import { PoFieldModule } from '@po-ui/ng-components';
import { PoButtonModule } from '@po-ui/ng-components';

//service_
import { FormDatasServiceService } from '../../../../service/FormService/form-datas-service.service';


@Component({
  selector: 'app-form-register-process',
  standalone: true,
  imports: [
    FormsModule,
    PoFieldModule,
    RouterLink,
    
    PoButtonModule
  ],
  templateUrl: './form-register-process.component.html',
  styleUrl: './form-register-process.component.css',
  encapsulation: ViewEncapsulation.None
})
export class FormRegisterProcessComponent {
  constructor(private serviceDatas:FormDatasServiceService){}

  @Output() emitter = new EventEmitter();
  @Output() emitterReturnForm:EventEmitter<any> = new EventEmitter();

  dataCEP = {
    bairro:"",
    cep:"",
    ddd:"",
    estado:"",
    localidade:"",
    logradouro:"",
    regiao: "",
    uf:""
  };
  listDatasUser = {
    age: '',
    phone:'',
    cep:'',
    uf:'',
    rua:'',
    city:'',
    num: ''
  };

  formatAGE!:number;

  //-----------------------------------------------------------------------------------------------------
  
async fetchAPI(){
  const API_URL: string = `https://viacep.com.br/ws/${this.dataCEP.cep}/json/`;
  try{
    const axiosAPI = (await axios.get(API_URL)).data;
    this.dataCEP = await axiosAPI;
    this.listDatasUser.age = String(this.formatAGE);
    this.listDatasUser.uf = this.dataCEP.uf;
    this.listDatasUser.cep = this.dataCEP.cep;
    this.listDatasUser.rua = this.dataCEP.logradouro;
    this.listDatasUser.city = this.dataCEP.localidade
  }catch(error){throw new Error('Error!');}
}

BtnFormProcess = () => {
  this.emitter.emit();
  this.serviceDatas.updatedDatasCustomer(this.listDatasUser);
}

BtnReturnForm = () => this.emitterReturnForm.emit();
  

formValidFields = () => {
  return( 
    //AGE
    Number(this.formatAGE) >= 18 && Number(this.formatAGE) <= 100 &&
    //PHONE
    this.listDatasUser.phone.replace(/\D/g, "").length == 11 &&
    //CEP
    this.listDatasUser.cep.replace(/\D/g,"").length == 8
  );
}

//-----------------------------------------------------------------------------------------------------

}