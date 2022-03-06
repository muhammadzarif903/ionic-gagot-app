import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges} from '@angular/core';
import {Utils} from '../../../../utils';
@Component({
  selector: 'mx-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
})
export class ProgressComponent implements OnInit {
  @Input() name: string;
  @Input() percentage: number;
  constructor() { }

  ngOnInit() {}

}
