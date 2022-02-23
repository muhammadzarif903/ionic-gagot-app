import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {AddPropertyDetailsComponent} from './add-property-details.component';
import {TranslateModule} from '@ngx-translate/core';
import {IProperty} from '../../shared/interfaces/property.interface';

describe('AddPropertyDetailsComponent', () => {
  let component: AddPropertyDetailsComponent;
  let fixture: ComponentFixture<AddPropertyDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AddPropertyDetailsComponent],
      imports: [IonicModule.forRoot(), TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(AddPropertyDetailsComponent);
    component = fixture.componentInstance;
    component.property = {} as IProperty;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
