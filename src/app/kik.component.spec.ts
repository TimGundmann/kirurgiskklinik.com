import { TestBed, async } from '@angular/core/testing';
import { KikComponent } from './kik.component';
import { Directive } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

@Directive( {
  selector: 'kik-main'
})
class MockMainDirective { }

@Directive( {
  selector: 'kik-navigation-bar'
})
class MockNavigationbarDirective { }

@Directive( {
  selector: 'kik-footer'
})
class MockFooterDirective { }

describe('KikComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        KikComponent,
        MockMainDirective,
        MockNavigationbarDirective,
        MockFooterDirective
      ],
      imports: [
        RouterTestingModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(KikComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
