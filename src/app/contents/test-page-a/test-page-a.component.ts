import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-page-a',
  templateUrl: './test-page-a.component.html',
  styleUrls: ['./test-page-a.component.scss']
})

/** 暫定レース一覧画面 */
/** 一覧表示(listbox)  */
/** list選択したらそのレースの */
export class TestPageAComponent implements OnInit {

  pageList = [
    { name: '皐月賞', url: 'https://race.netkeiba.com/special/index.html?id=0045' },
    { name: '日本ダービー', url: 'https://race.netkeiba.com/special/index.html?id=0061' },
    { name: '', url: '' },
    { name: '', url: '' },
  ]

  listBoxStyle = {
    'max-height': '250px',
    'width': '200px'
  }

  constructor() { }

  ngOnInit(): void {

  }

}
