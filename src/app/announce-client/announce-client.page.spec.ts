import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnnounceClientPage } from './announce-client.page';

describe('AnnounceClientPage', () => {
  let component: AnnounceClientPage;
  let fixture: ComponentFixture<AnnounceClientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnounceClientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnnounceClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
