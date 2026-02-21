import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {

  tareas: string[] = [];

  agregarTarea(NuevaTarea: string, input: HTMLInputElement){
    if (NuevaTarea.trim() !== ''){
      this.tareas.push(NuevaTarea);
      input.value = '';
    }
  }


    borrarTarea(indice: number){
      this.tareas.splice(indice, 1);
    }

}
