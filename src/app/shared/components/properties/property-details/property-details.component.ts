import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscriber} from 'rxjs';
import {IProperty} from '../../../interfaces/property.interface';

@Component({
  selector: 'mx-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss'],
})
export class PropertyDetailsComponent implements OnInit {


  public house$: Subscriber<IProperty>


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    // private service: PropertyService
  ) {
  }

  ngOnInit() {
    const houseId = this.route.snapshot.paramMap.get('id');
    console.log(houseId);
    // this.house$ = this.service.getHouse(houseId);
  }

}
