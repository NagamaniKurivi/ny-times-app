import { Component, OnInit } from '@angular/core';

import { HeaderMetaData } from '../../core/metadata/headerMetaData';

/**
 * HeaderComponent
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  metaData = HeaderMetaData;

  constructor() { }

  /**
   * ngOnInit
   */
  ngOnInit() {
    //
  }

}
