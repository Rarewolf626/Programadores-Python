import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-input',
  templateUrl: './ui-input.component.html',
  styleUrls: ['./ui-input.component.css']
})
export class UiInputComponent implements OnInit {
  @Input() label! : string;
  @Input() errorMessage! : string;
  @Input() type! : string;
  valid : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
