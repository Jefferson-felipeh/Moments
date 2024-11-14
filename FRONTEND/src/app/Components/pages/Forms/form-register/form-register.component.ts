import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

//REtira o encapsulamento de estilos do PO UI_
import { ViewEncapsulation } from '@angular/core';
//Componente dos campos do PO UI_
import { PoFieldModule } from '@po-ui/ng-components';
//Componente de botão_
import { PoButtonModule } from '@po-ui/ng-components';

//Componentes filhos_
import { FormRegisterCompletedComponent } from '../form-register-completed/form-register-completed.component';
import { FormRegisterProcessComponent } from '../form-register-process/form-register-process.component';
import { FormDatasServiceService } from '../../../../service/FormService/form-datas-service.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-form-register',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule, 
    RouterLink,
    FormRegisterProcessComponent,
    FormRegisterCompletedComponent,

    PoFieldModule,
    PoButtonModule
  ],
  templateUrl: './form-register.component.html',
  styleUrl: './form-register.component.css',
  encapsulation: ViewEncapsulation.None
})

export class FormRegisterComponent implements OnInit{
  userData:any;  
  constructor(private serviceDatas:FormDatasServiceService, private router:Router){};

  ngOnInit = () => {};

  @Output() emitter = new EventEmitter();

  listDatasUser = {name: '',cpf:''};
  validFields:boolean = true;

  /*Estou emitindo os dado obtidos no componente para o service, Porém no service preciso ter um objeto para obter os dados
  E atualizar esse objeto cada vez que os dados forem inseridos_*/
  btnRegisterForm = () => {
    this.emitter.emit();
    this.serviceDatas.updatedDatasCustomer(this.listDatasUser);
  }

  //Método que irá validar os campos no form_
  isFormValid = () => {
    //Formatando o campo CPF_
    const cpfFormat = this.listDatasUser.cpf.trim();//tirando os espaçamentos do inicio e fim da string;
    const cpfFormatTwo = this.listDatasUser.cpf.replace(/\D/g, "");//tirando os pontos entre os numero;

    //Fazendo uma breve validação, que tem a funcionalidade de desabilitar ou habilitar o submit do botão_
    return this.listDatasUser.name && this.listDatasUser.name.length > 2 && this.listDatasUser.name.length < 50
    && cpfFormat !== '' && cpfFormatTwo.length == 11;
  }

  //----------------------------------------------------------------------------
 
}
