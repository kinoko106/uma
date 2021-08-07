import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar-button',
  templateUrl: './sidebar-button.component.html',
  styleUrls: ['./sidebar-button.component.scss']
})
export class SidebarButtonComponent implements OnInit {

  text: string = 'ssaaa';

  constructor() { }

  ngOnInit(): void {
  }

}
