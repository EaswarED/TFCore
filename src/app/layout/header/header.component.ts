import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  visibleSidebar1;
  items: MenuItem[];
  constructor() { }

  display: boolean = false;

    showDialog() {
        this.display = true;
    }


  activeMenu(event) {
    console.log(event);
    let node;
    if (event.target.tagName === "A") {
      node = event.target;
    } else {
      node = event.target.parentNode;
    }
    let menuitem = document.getElementsByClassName("ui-menuitem-link");
    for (let i = 0; i < menuitem.length; i++) {
      menuitem[i].classList.remove("active");
    }
    node.classList.add("active")
    }

  ngOnInit(): void {
    this.items = [
        {
            label: 'Dashboard',
            icon: 'fa fa-dashboard',
            styleClass:'dash_backgroud',
            items: [
              {label: 'Dashboard', styleClass:'header_title'},
              
              {separator: true},
              {label: 'My Dashboard', icon: 'pi pi-pw pi-home',routerLink: [''],command: (event) => {
                this.visibleSidebar1
              }, routerLinkActiveOptions: { exact: true }},
              {label: 'Dashboard', icon: 'pi pi-pw pi-home',routerLink: [''],command: (event) => {
                this.visibleSidebar1
              }, routerLinkActiveOptions: { exact: true }},
              {label: 'Dashboard 1', icon: 'pi pi-pw pi-home',routerLink: [''],command: (event) => {
                this.visibleSidebar1
              }, 
              routerLinkActiveOptions: { exact: true }},
          ],
            
        },{
          label: 'Company',
          icon: 'fa fa fa-building-o',
          styleClass:'com_backgroud',
          items: [
            {label: 'Company', styleClass:'header_title'},
            {label: 'Company', icon: 'fa fa-building-o'}
          ],
          routerLinkActiveOptions: { exact: true }
        },{
          label: 'Contact',
          icon: 'fa fa-mobile',
          styleClass:'con_backgroud',
          items: [
            {label: 'Contact', styleClass:'header_title'},
            {label: 'Contacts', icon: 'fa fa-mobile'},
          ],
          routerLinkActiveOptions: { exact: true }
        },{
          label: 'Candidates',
          icon: 'pi pi-fw pi-users',
          styleClass:'can_backgroud',
          items: [
            {label: 'Candidates', styleClass:'header_title'},
            {label: 'Candidates List', icon: 'pi pi-fw pi-users'},
            
          ],
          routerLinkActiveOptions: { exact: true }
        },{
          label: 'Jobs',
          icon: 'pi pi-fw pi-briefcase',
          styleClass:'job_backgroud',
          items: [
            {label: 'Jobs', styleClass:'header_title'},
            {label: 'Job List', icon: 'pi pi-fw pi-briefcase'},
            
          ],
          routerLinkActiveOptions: { exact: true }
        },{
          label: 'OnBoarding',
          icon: 'fa fa-hand-peace-o',
          styleClass:'boa_backgroud',
          items: [
            {label: 'OnBoarding', styleClass:'header_title'},
            {label: 'Placement', icon: 'fa fa-trophy'},
          ],
          routerLinkActiveOptions: { exact: true }
      },{
        label: 'Reports',
        icon: 'fa fa-stack-overflow',
        styleClass:'report_backgroud',
        items: [
          {label: 'Reports', styleClass:'header_title'},
          {label: 'Report 1', icon: 'pi pi-fw pi-folder'},
          {label: 'Report 2', icon: 'pi pi-fw pi-folder'},
          {label: 'Report 3', icon: 'pi pi-fw pi-folder'},
          {label: 'Report 4', icon: 'pi pi-fw pi-folder'},
          {label: 'Report 5', icon: 'pi pi-fw pi-folder'}
        ],
        routerLinkActiveOptions: { exact: true }
      },{
        label: 'Admin',
        icon: 'fa fa-adn',
        styleClass:'admin_backgroud',
        items: [
          {label: 'Admin', styleClass:'header_title'},
          {label: 'System Setting', icon: 'pi pi-fw pi-folder'},
          {label: 'Field Setting', icon: 'pi pi-fw pi-folder'},
          {label: 'User Management', icon: 'pi pi-fw pi-users'}
        ],
        routerLinkActiveOptions: { exact: true }
      },{
          label: 'HelpDesk',
          icon: 'fa fa-life-saver',
          styleClass:'help_backgroud',
          items: [
            {label: 'HelpDesk System', styleClass:'header_title'},
              {label: 'Resources', icon: 'fa fa-user-cog'},
              {label: 'Support', icon: 'fa fa-life-saver'}
          ],
          routerLinkActiveOptions: { exact: true }
      },{
        label: 'Opportunity',
        icon: 'pi pi-fw pi-shopping-cart',
        styleClass:'sal_backgroud',
        items: [
          {label: 'Sales Opportunity', styleClass:'header_title'},
          {label: 'Sales', icon: 'pi pi-fw pi-shopping-cart'},
          
        ],
        routerLinkActiveOptions: { exact: true }
      },{
        label: 'Applications',
        icon: 'fa fa-gift',
        styleClass:'app_backgroud',
        items: [
          {label: 'Applications Offer', styleClass:'header_title'},
          {label: 'Offers', icon: 'fa fa-gift'},
        ],
        routerLinkActiveOptions: { exact: true }
      }];
    
  }

}
