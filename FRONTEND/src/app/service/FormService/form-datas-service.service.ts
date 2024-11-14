import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { api } from '../api';

@Injectable({
  providedIn: 'root'
})
export class FormDatasServiceService {
  constructor(){}
  datasInfoList!:any;

  /*Estou injetando ou inicializando o BehaviorSubjet, e atribuindo um valor inicial a ele,que nesse caso é um objeto vazio,
   isso faz com que todos que se increverem nesse BehaviorSubject tenha um valor inicial_*/
  formDataCustomer = new BehaviorSubject<any>({});
  //Aqui estou criando a Observable pública, para que os outros componentes possam se increver nesse BehaviorSubject_
  formData$: Observable<any> = this.formDataCustomer.asObservable();

  errorValidMessage:string = '';

  //O método possue um parametro, que é os dados que virão dos compoenntes_
  updatedDatasCustomer = (datasCustomer:any) => {
    //Essa variavel vai armazenar o valor mais recente do objeto_
    // const currentData = this.formDataCustomer.getValue();
    //Aqui estou inserindo o novo valor no objeto, esse novo valor vem dos outros componentes_
    this.formDataCustomer.next({...this.formDataCustomer.getValue(), ...datasCustomer});
  }

  //Aqui o componente consegue observar os dados ou o status atual do objeto_
  getData = () => this.formDataCustomer.getValue();

  //Fazendo uma requisição ao servidor e cadastrando os dados no banco de dados_
  submitDatas = async (dados:any) => {
    try{
      //Fazendo uma requisição, enviando os dados para o banco de dados_
      const response = (await api.post('/createUser',dados));

      this.datasInfoList = await response.data;
      
      return this.datasInfoList;
    }catch(error:any){
      if(error.response){
        this.errorValidMessage = error.response;
        return this.errorValidMessage;
      } 
      else console.log('Erro de conexão!');
    }
  }

  formatSubjectValues = () => this.formDataCustomer.next({});
}
