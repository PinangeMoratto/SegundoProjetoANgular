import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'segundoprojeto';
  nome = 'Marcelo';
  sobrenome: string = 'Moratto';

  retornaAno(){
    let ano = 2023; //Variável Local 
    return this.nome + ' ' + ano;
  }
}
