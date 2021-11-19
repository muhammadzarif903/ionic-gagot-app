import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddPriceAndAgreementComponent } from './add-price-and-agreement.component';

describe('AddPriceAndAgreementComponent', () => {
  let component: AddPriceAndAgreementComponent;
  let fixture: ComponentFixture<AddPriceAndAgreementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPriceAndAgreementComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddPriceAndAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
