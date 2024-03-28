import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TChartsDirectiveModule, TopnChartModule } from '@tui/charts-library';
import {
  ButtonModule,
  CalendarModule,
  CheckboxModule,
  DropdownModule,
  InputSwitchModule,
  InputTextareaModule,
  InputtextModule,
  PaginatorModule,
  RadioButtonModule,
  SpinnerModule,
  TableModule,
  TagModule,
  TitleModule,
  ToggleButtonModule,
  TreeModule,
} from '@tui/component-library';
import { TuiModule } from '@tui/frame';
import { NgxPlanetModule } from '@worktile/planet';
import { AppComponent } from './app.component';
import { TuiButtonComponent } from './button/button.component';
import { TuiCalendarComponent } from './calendar/calendar.component';
import { TuiCheckboxComponent } from './checkbox/checkbox.component';
import { TuiDropComponent } from './drop/drop.component';
import { DynamicComponentDirective } from './dynamic-component/dynamic-component.directive';
import { TuiIconComponent } from './icon/icon.component';
import { TuiInputComponent } from './input/input.component';
import { TuiPaginatorComponent } from './paginator/paginator.component';
import { TuiRadioComponent } from './radio/radio.component';
import { TuiSpinnerComponent } from './spinner/spinner.component';
import { TuiSwitchComponent } from './switch/switch.component';
import { TuiTableComponent } from './table/table.component';
import { TuiTagComponent } from './tag/tag.component';
import { TuiTextareaComponent } from './textarea/textarea.component';
import { TuiTitleComponent } from './title/title.component';
import { TuiToggleButtonComponent } from './toggle-button/toggle-button.component';
import { TuiTopnComponent } from './topn/topn.component';
import { TuiTreeComponent } from './tree/tree.component';

@NgModule({
  declarations: [
    AppComponent,
    TuiButtonComponent,
    TuiToggleButtonComponent,
    TuiInputComponent,
    TuiTextareaComponent,
    TuiSpinnerComponent,
    TuiCheckboxComponent,
    TuiRadioComponent,
    TuiDropComponent,
    TuiCalendarComponent,
    TuiSwitchComponent,
    TuiTableComponent,
    TuiPaginatorComponent,
    TuiTreeComponent,
    TuiTagComponent,
    TuiTitleComponent,
    TuiTopnComponent,
    TuiIconComponent,
    DynamicComponentDirective,
  ],
  imports: [
    BrowserModule,
    TuiModule,
    NgxPlanetModule,
    ButtonModule,
    ToggleButtonModule,
    InputtextModule,
    FormsModule,
    InputTextareaModule,
    SpinnerModule,
    CheckboxModule,
    RadioButtonModule,
    DropdownModule,
    CalendarModule,
    InputSwitchModule,
    TableModule,
    PaginatorModule,
    TreeModule,
    TagModule,
    TitleModule,
    TopnChartModule,
    TChartsDirectiveModule,
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    // @ts-ignore
    window.injector = Injector.create({
      name: '模块自定义依赖',
      parent: injector,
      providers: [],
    });
  }
  registerEl(tagName: string, fn: CustomElementConstructor) {
    if (customElements.get(tagName)) {
      console.warn('企图注册相同名称的标签:', tagName);
    } else {
      // @ts-ignore
      if (!window['components']) {
        // @ts-ignore
        window['components'] = new Set();
      }
      // @ts-ignore
      window['components'].add(tagName);
      //定义组件
      customElements.define(tagName, fn);
    }
  }
  exportComponent() {
    // @ts-ignore
    window['createCustomElement'] = createCustomElement;
    // 按钮
    const appRoot = createCustomElement(AppComponent, {
      injector: this.injector,
    });
    // 将 AppComponent挂载到html中以初始化当前应用
    this.registerEl('my-tui-elements', appRoot);
    // @ts-ignore
    window['TuiButtonComponent'] = TuiButtonComponent;
    this.registerEl(
      'app-button',
      createCustomElement(TuiButtonComponent, {
        injector: this.injector,
      })
    );

    // @ts-ignore
    window['TuiToggleButtonComponent'] = TuiToggleButtonComponent;
    // @ts-ignore
    // 初始化组件仓库
    window['components'] = new Set();
    this.registerEl(
      'app-toggle-button',
      createCustomElement(TuiToggleButtonComponent, {
        injector: this.injector,
      })
    );
    // @ts-ignore
    window['TuiInputComponent'] = TuiInputComponent;
    this.registerEl(
      'app-input',
      createCustomElement(TuiInputComponent, {
        injector: this.injector,
      })
    );
    // @ts-ignore
    window['TuiTextareaComponent'] = TuiTextareaComponent;
    this.registerEl(
      'app-textarea',
      createCustomElement(TuiTextareaComponent, {
        injector: this.injector,
      })
    );
    // @ts-ignore
    window['TuiSpinnerComponent'] = TuiSpinnerComponent;
    this.registerEl(
      'app-spinner',
      createCustomElement(TuiSpinnerComponent, {
        injector: this.injector,
      })
    );
    // @ts-ignore
    window['TuiCheckboxComponent'] = TuiCheckboxComponent;
    this.registerEl(
      'app-checkbox',
      createCustomElement(TuiCheckboxComponent, {
        injector: this.injector,
      })
    );
    // @ts-ignore
    window['TuiRadioComponent'] = TuiRadioComponent;
    this.registerEl(
      'app-radio',
      createCustomElement(TuiRadioComponent, {
        injector: this.injector,
      })
    );
    // @ts-ignore
    window['TuiDropComponent'] = TuiDropComponent;
    this.registerEl(
      'app-drop',
      createCustomElement(TuiDropComponent, {
        injector: this.injector,
      })
    );
    // @ts-ignore
    window['TuiCalendarComponent'] = TuiCalendarComponent;
    this.registerEl(
      'app-calendar',
      createCustomElement(TuiCalendarComponent, {
        injector: this.injector,
      })
    );
    // @ts-ignore
    window['TuiSwitchComponent'] = TuiSwitchComponent;
    this.registerEl(
      'app-switch',
      createCustomElement(TuiSwitchComponent, {
        injector: this.injector,
      })
    );
    // @ts-ignore
    window['TuiTableComponent'] = TuiTableComponent;
    this.registerEl(
      'app-table',
      createCustomElement(TuiTableComponent, {
        injector: this.injector,
      })
    );
    // @ts-ignore
    window['TuiPaginatorComponent'] = TuiPaginatorComponent;
    this.registerEl(
      'app-paginator',
      createCustomElement(TuiPaginatorComponent, {
        injector: this.injector,
      })
    );
    // @ts-ignore
    window['TuiTreeComponent'] = TuiTreeComponent;
    this.registerEl(
      'app-tree',
      createCustomElement(TuiTreeComponent, {
        injector: this.injector,
      })
    );
    // @ts-ignore
    window['TuiTagComponent'] = TuiTagComponent;
    this.registerEl(
      'app-tag',
      createCustomElement(TuiTagComponent, {
        injector: this.injector,
      })
    );
    // @ts-ignore
    window['TuiTitleComponent'] = TuiTitleComponent;
    this.registerEl(
      'app-title',
      createCustomElement(TuiTitleComponent, {
        injector: this.injector,
      })
    );
    // @ts-ignore
    window['TuiTopnComponent'] = TuiTopnComponent;
    this.registerEl(
      'app-topn',
      createCustomElement(TuiTopnComponent, {
        injector: this.injector,
      })
    );
    // @ts-ignore
    window['TuiIconComponent'] = TuiIconComponent;
    this.registerEl(
      'app-icon',
      createCustomElement(TuiIconComponent, {
        injector: this.injector,
      })
    );
  }
  ngDoBootstrap() {
    this.exportComponent();
  }
}
