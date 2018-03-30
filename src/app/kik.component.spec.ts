import { TestBed, async } from '@angular/core/testing';
import { KikComponent } from './kik.component';
import { Directive } from '@angular/core';

@Directive( {
  selector: 'kik-main'
})
class MockMainDirective { }

describe('KikComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        KikComponent,
        MockMainDirective
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(KikComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
