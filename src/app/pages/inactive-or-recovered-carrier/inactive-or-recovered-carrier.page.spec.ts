import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InactiveOrRecoveredCarrierPage } from './inactive-or-recovered-carrier.page';

describe('InactiveOrRecoveredCarrierPage', () => {
  let component: InactiveOrRecoveredCarrierPage;
  let fixture: ComponentFixture<InactiveOrRecoveredCarrierPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InactiveOrRecoveredCarrierPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InactiveOrRecoveredCarrierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
