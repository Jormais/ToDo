import { Component, OnInit } from '@angular/core';
import { Todos } from '../interfaces/list.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  todos : Todos[] = [
    {
      id : 0,
      title : "Recoger cosas",
      isCompleted : false
    },
    {
      id : 1,
      title : "Hacer cosas",
      isCompleted : false
    },
    {
      id : 2,
      title : "Cosas de cosas",
      isCompleted : false
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
