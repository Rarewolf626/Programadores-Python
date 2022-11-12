import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-link-label',
  templateUrl: './ui-link-label.component.html',
  styleUrls: ['./ui-link-label.component.css'],
})
export class UiLinkLabelComponent implements OnInit {
  @Input() label!: string;
  @Input() icon! : string;
  @Input() routeLink!: any[];
  constructor() {}

  ngOnInit(): void {}
}
