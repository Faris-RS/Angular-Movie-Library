import { Component, Input, OnInit } from '@angular/core';
import { faBars, faPlay } from '@fortawesome/free-solid-svg-icons';
import { TruncateTextDirective } from 'src/app/directives/truncate-text.directive';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css'],
  providers: [TruncateTextDirective],
})
export class ContentCardComponent implements OnInit {
  options = faBars;
  play = faPlay;

  @Input() items: any[] = [];

  constructor() {}

  ngOnInit(): void {}
}
