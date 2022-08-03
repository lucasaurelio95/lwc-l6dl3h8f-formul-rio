import { LightningElement } from "lwc";

export default class App extends LightningElement {
  primeironome;
  sobrenome;
  telefone;

/*
função handleOnChance*Nomeinput(event)
* é um parametro passado para dentro da função contendo informações
do 
 */

handleOnChangePrimeiro(event){
    this.primeironome = event.detail.value;
    console.log('primeironome:' + this.primeironome);
  }
  handleOnChangeSobrenome(event){
    this.sobrenome = event.detail.value;
    console.log('sobrenome:' + this.sobrenome);
  }
  handleOnChangeTelefone(event){
    this.telefone = event.detail.value;
    console.log('telefone:' + this.telefone);
  }
}
