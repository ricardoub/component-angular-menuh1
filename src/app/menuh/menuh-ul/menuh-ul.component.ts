import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menuh-ul',
  templateUrl: './menuh-ul.component.html',
  styleUrls: ['./menuh-ul.component.css']
})
export class MenuhUlComponent implements OnInit {

  @Input() menuhClass: any;
  @Input() menuhItens: any;
  
  constructor() { }

  ngOnInit() {
  }

}
