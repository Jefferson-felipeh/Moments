import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormRegisterComponent } from '../Forms/form-register/form-register.component';
import { RouterLink } from '@angular/router';

//Retira o encapsulamento de estilos do PO UI_
import { ViewEncapsulation } from '@angular/core';
//Componente dos campos do PO UI_
import { PoFieldModule } from '@po-ui/ng-components';
//Componente de botão_
import { PoButtonModule } from '@po-ui/ng-components';
import { api } from '../../../service/api';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule, 
    CommonModule,
    RouterLink,
    FormRegisterComponent,
    
    PoFieldModule,
    PoButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
  //ESTOU CRIANDO UM OBJETO, PARA ARMAZENAR OS DADOS DO FORMULÁRIO_
  datasFormLogin = {email: '', password: ''};
  loadingBtn:boolean = false;
  verifyFields:string = '';

  //MÉTODO PARA UMA VALIDAÇÃO DOS CAMPOS DO FORMULÁRIO NO FRONT-END DA APLICAÇÃO_
  validFieldsForm = () => {
    return (//RETORNANDO PARA O FORM VALORES BOOLEANDOS_
      this.datasFormLogin.email.trim() !== '' &&
      (this.datasFormLogin.password.length >= 3 && this.datasFormLogin.password.length <= 10)
    );
  }

  //ESSE MÉTODO É RESPONSÁVEL POR FAZER A REQUISIÇÃO A ROTA DE LOGIN, ENVIANDO AS CREDENCIAIS INSERIDAS PELO USUÁRIO NO FORM_
  submitLogin = async () => {

    try{
      this.loadingBtn = true;
      //AQUI ESTOU FAZENDO A REQUISIÇÃO, ENVIANDO OS DADOS PARA A ROTA_
      const response = await api.post('/loginUser/',this.datasFormLogin);
      /*OBSERVA QUE, ESSA REQUISIÇÃO RECEBERÁ UMA RESPOSTA DO SERVIDOR, SEGUIRÁ ESSES PASSOS:
      ao utilizar o axios, irei configura-lo para determinar o endereço das rotas e ligar o backend, 
      que recebe as requisições, com o front,que faz as requisições e recebe as respostas do back;

      1- farei a requisição, onde chamarei a rota e enviarei os dados para ela 
      a fim de que o servidor receba esses dados, e os execute como especificado;
      2- a rota irá receber essa requisição, e receber os dados do corpo da requisição;
      3- a rota irá chamar um método do controlador que receberá essesa dados e que será 
      responsável por fazer certas validações nos dados,a fim de emiti-los para o service;
      4- o controller então irá chamar um método do service, enviando os dados para ele.
      5- o service irá receber esses dados, e vai aplicar a lógica de negócios nesses dados,
      seja para inserir no banco, seja para consulta-los, ou etc;
      6- o service irá realizar alguma tarefa com os dados, e vai retornar para o controller uma resposta
      como resultado dessa requisição, seja uma resposta contendo os dados, ou alguma resposta de erro;
      7- o controller vai receber essa resposta do serviço, e atravez do reply.send(), vai enviar essa resposta
      diretamente para o front-end como resposta da sua requisição;
      8- o front vai receber essa resposta no mesmo ambiente(FUNÇÃO) em que foi feita a requisição, e eu consigo capturar
      essa resposta e armazena-la em alguma variavel utilizando o response.data da requisição;
      */
      
      console.log(response.data);

    }catch(error:any){
      this.loadingBtn = false;
      
      if(error.response) this.verifyFields = error.response.data.message;
      else console.log('Erro de conexão!');
      setTimeout(() => {this.verifyFields = ''},5000);
    }
  }
}
