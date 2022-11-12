import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-password-input',
  templateUrl: './ui-password-input.component.html',
  styleUrls: ['./ui-password-input.component.css']
})
export class UiPasswordInputComponent implements OnInit {
  @Input() text! : string;
  valid : boolean = false;
  constructor() { }
  

  ngOnInit(): void {
  }

}
