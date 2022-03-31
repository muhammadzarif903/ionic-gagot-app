import {Component, Input, OnInit} from '@angular/core';
import {IProperty} from '../../shared/interfaces/property.interface';
import {Utils} from '../../../utils';
import {NextToEnum} from '../../shared/enums/nexto.num';
import {TextType} from '../../shared/ui-elements/text/text.component';
import moment from 'moment';

@Component({
  selector: 'mx-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.scss'],
})
export class AddLocationComponent implements OnInit {

  @Input() property: IProperty;
  public textType = TextType;
  public nextToList = Object.values(NextToEnum);
  constructor() {
  }

  ngOnInit() {
  }

  public onCategorySelect($event) {
    this.property.category = $event;
  }

  public onAddressInput($event) {
    this.property.address = $event;
  }

  public onNextToClick(value: NextToEnum) {
    this.property.nextTo = Utils.addRemoveArrayItem(this.property.nextTo, value);
  }

  public isNextToSelected(name: NextToEnum) {
    this.property.nextTo.includes(name);
  }


  confirm() {
    // this.datetime.confirm();
  }

  reset() {
    // this.datetime.nativeEl.reset();
  }

  formatDate(value: string) {
    return moment(value).format('MMM dd yyyy');
  }

}
