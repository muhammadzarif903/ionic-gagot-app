import {Component, OnInit} from '@angular/core';
import {format, parseISO} from 'date-fns';
import {TextType} from '../../shared/components/text/text.component';
import {IProperty} from '../../shared/interfaces/property.interface';
import {Utils} from '../../../utils';
import {NextToEnum} from '../../shared/enums/nexto.num';

@Component({
  selector: 'mx-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.scss'],
})
export class AddLocationComponent implements OnInit {

  public property: IProperty;
  public textType = TextType;
  public nextToList = Object.values(NextToEnum);

  constructor() {
  }

  ngOnInit() {
  }

  public onCategorySelect($event) {
    this.property.categoryID = $event;
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
    return format(parseISO(value), 'MMM dd yyyy');
  }

}
