import { Component, Output, EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PoFieldModule } from '@po-ui/ng-components';
import { RouterLink } from '@angular/router';

//Encapsulamento de estilizaçao do PO UI_
import { ViewEncapsulation } from '@angular/core';
//Componente de botão do PO UI_
import { PoButtonModule } from '@po-ui/ng-components';
//service_
import { FormDatasServiceService } from '../../../../service/FormService/form-datas-service.service';

@Component({
  selector: 'app-form-register-completed',
  standalone: true,
  imports: [
    FormsModule,
    PoFieldModule,
    RouterLink,

    PoButtonModule
  ],
  templateUrl: './form-register-completed.component.html',
  styleUrl: './form-register-completed.component.css',
  encapsulation: ViewEncapsulation.None
})

export class FormRegisterCompletedComponent {
  constructor(private serviceDatas:FormDatasServiceService){}

  @Output() emitter = new EventEmitter();
  @Output() emitterReturnForm:EventEmitter<any> = new EventEmitter();
  dataList = {email: '',password: '',confirmPassword: ''};
  confirmar:boolean = false;

  BtnRegisterFormCompleted = () =>{
    this.serviceDatas.updatedDatasCustomer(this.dataList);
    this.emitter.emit(this.confirmar);
  }
  BtnReturnForm = () => this.emitterReturnForm.emit();

  formValidFields = () => {
    return (
      this.dataList.email.trim() !== '' &&
      this.dataList.password.trim().length >= 3 && this.dataList.password === this.dataList.confirmPassword
    );
  }
}
