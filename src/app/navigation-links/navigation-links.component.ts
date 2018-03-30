import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kik-navigation-links',
  templateUrl: './navigation-links.component.html',
  styleUrls: ['./navigation-links.component.css']
})
export class NavigationLinksComponent implements OnInit {

  @Input() styleClass: string;

  constructor() { }

  ngOnInit() {
  }

}
