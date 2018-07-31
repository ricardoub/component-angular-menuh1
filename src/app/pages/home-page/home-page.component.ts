import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  menuhLogoName: string = 'MENUH1'
  menuhLogoAlt: string = 'Logotipo'
  menuhLogoSrc: string = 'assets/logo.jpeg'

  menuhItensLeft: any = [
    {
      'name': 'Principal', 'href': 'home', 'icon': 'fa fa-2x fa-home', 
      'acl': null, 'class': 'active', 'liClass': 'active',
      'liChild': null
    },
    {
      'name': 'Serviços', 'href': '#', 'icon': 'fa fa-2x fa-inbox', 'acl': null,
      'class': '', 'liClass': 'dropdown', 'liChild': [
        {
          'name': 'Monitoramentos', 'href': 'monitoramentos', 'icon': 'fa fa-fw fa-barcode',
          'acl': 'MNTTO.list', 'class': '', 'liClass': '',
          'liChild': null
        },
        {
          'name': '', 'href': '', 'icon': '',
          'acl': '', 'class': '', 'liClass': 'divider',
          'liChild': null
        },
        {
          'name': 'Passagem expedição', 'href': 'passagem', 'icon': 'envelope',
          'acl': 'PSSGM.list', 'class': '', 'liClass': '',
          'liChild': null
        }
      ]
    }
  ]
  menuhItensRight: any = [
    {
      'name': 'Usuário', 'href': '#', 'icon': 'fa fa-2x fa-user', 'acl': null,
      'class': '', 'liClass': 'dropdown', 'liChild': [
        {
          'name': 'Perfil', 'href': 'profile', 'icon': 'user',
          'acl': 'USER.profile', 'class': '', 'liClass': '',
          'liChild': null
        },
        {
          'name': '', 'href': '', 'icon': '',
          'acl': '', 'class': '', 'liClass': 'divider',
          'liChild': null
        },
        {
          'name': 'Sair', 'href': 'logout', 'icon': 'sign-out',
          'acl': 'USER.logout', 'class': '', 'liClass': '',
          'liChild': null
        }
      ]
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
