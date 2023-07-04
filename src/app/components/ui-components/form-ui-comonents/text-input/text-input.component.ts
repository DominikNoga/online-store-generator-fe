import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
