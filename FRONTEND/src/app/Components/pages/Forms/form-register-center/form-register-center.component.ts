import { Component, Output, EventEmitter, OnInit, AfterContentInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

//Componentes filhos_
import { FormRegisterComponent } from '../form-register/form-register.component';
import { FormRegisterProcessComponent } from '../form-register-process/form-register-process.component';
import { FormRegisterCompletedComponent } from '../form-register-completed/form-register-completed.component';
import { RegistrationCompletedComponent } from '../registration-completed/registration-completed.component';
import { RegistrationFinalizedComponent } from '../registration-finalized/registration-finalized.component';

//Retirando o encapsulamento de estilização do PO UI_
import { ViewEncapsulation } from '@angular/core';

import { PoFieldModule } from '@po-ui/ng-components';
import { PoButtonModule } from '@po-ui/ng-components';

import { PoStepperModule } from '@po-ui/ng-components';
import { PoStepperStatus } from '@po-ui/ng-components';
import { PoStepperItem } from '@po-ui/ng-components';
import { PoStepperOrientation } from '@po-ui/ng-components';
import { ChangeDetectorRef } from '@angular/core';

import { FormDatasServiceService } from '../../../../service/FormService/form-datas-service.service';

@Component({
  selector: 'app-form-register-center',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FormRegisterComponent,
    FormRegisterProcessComponent,
    FormRegisterCompletedComponent,
    RegistrationCompletedComponent,
    RegistrationFinalizedComponent,

    PoStepperModule,
    PoButtonModule
  ],
  templateUrl: './form-register-center.component.html',
  styleUrl: './form-register-center.component.css',
  encapsulation: ViewEncapsulation.None
})

export class FormRegisterCenterComponent implements OnInit{
  @Output() emitterEvent = new EventEmitter();

  constructor(private serviceData:FormDatasServiceService, private changeDetector:ChangeDetectorRef){}
  
  ngOnInit():void {}
  
  datasLIst = {
    name: '',cpf: '',age: '',phone:'',cep:'',uf:'',rua:'',
    city:'',num: '', email: '', 
    password:'',confirmPassword:''};
  valueBtnInitial:number = 1;
  isLoading:boolean = false;
  isFinalized:boolean = false;
  isErrorValue:string = '';
  
  //-----------------------------------DADOS---------------------------------------------------
  //Cada vez que clicar nos botões dos componentes de Forms, será chamado esse método_
  ProcessFormsInsertValues = async () => {
    //Vai se increver na observable do service, e capturar os dados dela, armazenando-os no parametro data_
    const subscription = this.serviceData.formData$.subscribe(async data => {  
      //Inserindo os dados do service na variável dataList_
      this.datasLIst = data;
      //Detectando as mudanças dos valores no objeto do service e passando para esse componente_
      this.changeDetector.markForCheck();
      
      //Se o email e a senha estiverem preenchidos, esse bloco será executado_
      if (this.isFinalDataValid(this.datasLIst)) {
        this.isLoading = true;

        //Causando um atraso na requisição, afim de ativar o loading_Overlay_
        setTimeout(async () => {
          try {
              //Chamando o método do service, e passando os dados do objeto dataList para ele_
              const response = (await this.serviceData.submitDatas(this.datasLIst));
              
              if(response){
                  //Se os dados forem cadastrados com sucesso, irei atualizar o estado do subject, para ele receber um objeto vazio, linpando-o_
                  this.serviceData.formatSubjectValues();
  
                  //Armazenando a mensagem de erro, ou mensagem de sucesso_
                  response.data ? this.isErrorValue = response.data.error : this.isFinalized = true;
              }
              else{
                console.warn("Formato inesperado da resposta:", response);
                this.isErrorValue = "Resposta inesperada do servidor.";
              }
            } 
          catch (error) {
            console.error('Erro ao enviar dados:', error);
          }finally{
            this.isLoading = false;
          }
         
        },3500);
      }
    });
    
    //Finalizando a assinatura/inscrição dos componentes no subscribe após o uso_
    subscription.unsubscribe();
  
    this.valueBtnInitial++;
  };

  ProcessFormsReturn = () => this.valueBtnInitial--;

  private isFinalDataValid = (dados:any) => dados.email && dados.password;

  reloadPage = () => window.location.reload();

  /*-----------------------------------STEPPER-------------------------------------------------
  currentStep!: number;
  //Define o nome das etapas, e o status de cada etaba_
  stepsWithStatus: Array<PoStepperItem> = [
    { label: '', status: PoStepperStatus.Active },
    { label: '', status: PoStepperStatus.Default },
    { label: '', status: PoStepperStatus.Default },
  ];
  orientedPosition:PoStepperOrientation = PoStepperOrientation.Horizontal;

  ngAfterViewInit(): void {
    this.currentStep = 2;
    this.changeDetector.markForCheck();
  }

  onChangeStatus(event: number): void {
    this.currentStep = event;

    this.stepsWithStatus.forEach(step => {
      if (step.status === PoStepperStatus.Active){
        step.status = PoStepperStatus.Done;
      }
    });

    this.stepsWithStatus.forEach((step, index) => {
      if (index > this.currentStep && step.status === PoStepperStatus.Active){
        step.status = PoStepperStatus.Default;
      }
    });

    if (
      this.currentStep < this.stepsWithStatus.length &&
      this.stepsWithStatus[this.currentStep].status === PoStepperStatus.Disabled
    ) {
      this.stepsWithStatus[this.currentStep].status = PoStepperStatus.Default;
    }
  }
  //------------------------------------------------------------------------------------------*/
}

/*é passado o $event na chamada de uma função dentro do template, para que eu posso ter acesso aos dados passados na emição do evento*/