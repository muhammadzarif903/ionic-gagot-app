import {Component, Input, OnInit} from '@angular/core';
import {format, parseISO} from 'date-fns';
import {TextType} from '../../shared/components/text/text.component';
import {IPropertyDetails} from '../../shared/interfaces/property.interface';
import {Utils} from '../../../utils';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'mx-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.scss'],
})
export class AddLocationComponent implements OnInit {

  property: IPropertyDetails;
  public textType = TextType;
  public nextToList = ['Subway', 'Shop Mall', 'Garden', 'School', 'Dog Park', 'Sea', 'Theater'];

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

  public onNextToClick($event) {
    Utils.addRemoveListItem(this.property.nextTo, $event);
  }

  public isNextToSelected(name: string) {
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
