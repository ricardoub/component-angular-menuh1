import { Component, OnInit, Input } from '@angular/core';

//import { MenuhService } from './menuh.service'

@Component({
  moduleId: module.id,
  selector: 'app-menuh',
  templateUrl: './menuh.component.html',
  styleUrls: ['./menuh.component.css']
})
export class MenuhComponent implements OnInit {

  @Input('menuhLogoName') logoName;
  @Input('menuhLogoSrc')  logoSrc;
  @Input('menuhLogoAlt')  logoAlt;
  @Input('menuhItensLeft') itensLeft;
  @Input('menuhItensRight') itensRight;

  //@Input('menuhData') menuh;

  constructor() { }

  ngOnInit() { 
  }

/*
  @Input() menuhLogoAlt;
  @Input() menuhLogoSrc;
  @Input() menuhLogoName;

  itensLeft:  any = []
  itensRight: any = []

  constructor(
    private menuhService: MenuhService,
  ) { }

  ngOnInit() {
    this.itensLeft  = this.menuhService.getItensLeft()
    this.itensRight = this.menuhService.getItensRight()
    //this.itens = this.menuhService.getItens()
    //this.itens = this.menuhItens
  }
*/

}
/*
menuhData="{{menuh}}" 
menuhLogoName="MENUH" 
menuhLogoAlt="Logotipo" 
menuhLogoSrc="assets/logo.jpeg"

  menuh: any = [
    { 'logoName': 'MENUH1', 'logoIcon': 'assets/logo.jpeg', 'logoAlt': 'LOGOTIPO1',
      'itens': [
        { 'idMenu': 1, 'idParent': 0, 'name': 'Início' , 'href': 'home'   , 'icon': 'fa fa-2x fa-home', 'class': 'active', 'acl': null }
        ,{ 'idMenu': 1, 'idParent': 0, 'name': 'C032550', 'href': 'profile', 'icon': 'fa fa-2x fa-user', 'class': '', 'acl': null }        
      ]
    }
  ]

*/
