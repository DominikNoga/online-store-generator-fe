import { ChangeDetectionStrategy, Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {
  @Input() classes : string[] = [];
  @Input() text : string = '';
  @Output() onClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(){
    this.onClick.emit()
  }
}
