import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

let component: AppComponent;
let fixture: ComponentFixture<AppComponent>;

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'cm-todo'`, () => {
    expect(component.title).toEqual('cm-todo');
  });

  it('should clear input.', () => {
    component.newTodo = 'Work from home.';
    component.clearInput();
    expect(component.newTodo).toBe('');
  });

  it('should NOT add task.', () => {
    component.todos = [
      {
        title: 'watch game',
        author: ''
      }
    ];
    component.newTodo = 'watch game';
    component.addTodo();
    expect(component.todos.length).toBe(1);
  });

  it('should show input form.', () => {
    component.showInput = false;
    component.showInputForm();
    expect(component.showInput).toBeTrue();
  })
});
