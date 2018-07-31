import { Injectable } from '@angular/core';

@Injectable()
export class MenuhService {

  itensLeft: any = [
    {
      'aName': 'Inicio', 'aHref': 'home', 
      'aIcon': 'home', 'aClass': 'active',
      'liClass': 'active', 
    },
    {
      'aName': 'Monitoramentos', 'aHref': 'monitoramentos', 
      'aIcon': 'barcode', 'aClass': '', 'aAcl': null,
      'liClass': 'dropdown', 'liFilhos': [
        {
          'aName': 'Monitoramentos', 'aHref': 'monitoramentos', 
          'aIcon': 'envelope', 'aClass': '', 'aAcl': 'MNTTO.list'
        },
        {
          'aName': 'Passagem expedição', 'aHref': 'passagem', 
          'aIcon': 'road', 'aClass': '', 'aAcl': 'PSSGM.list'
        }
      ]
    }
  ]
  itensRight: any = [
    {
      'aName': 'C032550', 'aHref': 'profile', 
      'aIcon': 'user', 'aClass': '', 'aAcl': null,
      'liClass': 'dropdown', 'liFilhos': [
        {
          'aName': 'Sair do sistema', 'aHref': 'logout', 
          'aIcon': 'sign-out', 'aClass': '', 'aAcl': 'USER.profile'
        }
      ]
    }
  ]
  itens: any = [
     { 'idMenu': 1, 'idParent': 0, 'name': 'Início' , 'href': 'home'   , 'icon': 'fa fa-2x fa-home', 'class': 'active', 'acl': null }
    ,{ 'idMenu': 1, 'idParent': 0, 'name': 'C032550', 'href': 'profile', 'icon': 'fa fa-2x fa-user', 'class': '', 'acl': null }
  ]


  constructor() { }

  getItensLeft() {
    return this.itensLeft
  }
  getItensRight() {
    return this.itensRight
  }
  getItens() {
    return this.itens
  }

}
