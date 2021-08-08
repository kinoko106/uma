import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  pageList = [
    { name: 'PageA', path: 'page-a' },
    { name: 'PageB', path: 'page-b' },
  ]

  selectedPage: { name: string, path: string } = this.pageList[0];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onChange(event: any) {
    this.router.navigateByUrl(event.value)
  }
}
