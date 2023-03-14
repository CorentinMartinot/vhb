import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AcuteHepatitisBPage } from './acute-hepatitis-b.page';

describe('AcuteHepatitisBPage', () => {
  let component: AcuteHepatitisBPage;
  let fixture: ComponentFixture<AcuteHepatitisBPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AcuteHepatitisBPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AcuteHepatitisBPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
