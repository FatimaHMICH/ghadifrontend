import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnnouncesPage } from './announces.page';

describe('AnnouncesPage', () => {
  let component: AnnouncesPage;
  let fixture: ComponentFixture<AnnouncesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnouncesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnnouncesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
