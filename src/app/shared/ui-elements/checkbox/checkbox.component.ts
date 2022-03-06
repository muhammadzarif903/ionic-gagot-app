import {Component, Input} from '@angular/core';
import {Color} from '../../enums';

@Component({
  selector: 'mx-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {

  @Input() size: string;
  @Input() background: Color;
  @Input() color: Color;


  public get _size(): string {
    switch (this.size) {
      case 'small':
        return '1rem';
      case 'large':
        return '2rem';
      case 'medium':
      default:
        return '1.5rem';
    }
  }

}
