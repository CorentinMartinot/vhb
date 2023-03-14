import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SerologicalInterpretationPage } from './serological-interpretation.page';

describe('SerologicalInterpretationPage', () => {
  let component: SerologicalInterpretationPage;
  let fixture: ComponentFixture<SerologicalInterpretationPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SerologicalInterpretationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SerologicalInterpretationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
