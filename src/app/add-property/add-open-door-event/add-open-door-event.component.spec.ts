import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddOpenDoorEventComponent } from './add-open-door-event.component';

describe('AddOpenDoorEventComponent', () => {
  let component: AddOpenDoorEventComponent;
  let fixture: ComponentFixture<AddOpenDoorEventComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOpenDoorEventComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddOpenDoorEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
