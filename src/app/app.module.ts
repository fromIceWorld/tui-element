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
    window['injector'] = this.injector;
  }
  registerEl(tagName: string, fn: CustomElementConstructor) {
    if (customElements.get(tagName)) {
      console.warn('企图注册相同名称的标签:', tagName);
    } else {
      //定义组件
      customElements.define(tagName, fn);
    }
  }
  exportComponent() {
    // @ts-ignore
    window['createCustomElement'] = createCustomElement;
    // 按钮
    const appRoot = createCustomElement(TuiButtonComponent, {
      injector: this.injector,
    });
    // 将 AppComponent挂载到html中以初始化当前应用
    this.registerEl('my-tui-elements', appRoot);
    // @ts-ignore
    window['TuiButtonComponent'] = TuiButtonComponent;
    // @ts-ignore
    window['TuiToggleButtonComponent'] = TuiToggleButtonComponent;
    // @ts-ignore
    window['TuiInputComponent'] = TuiInputComponent;
    // @ts-ignore
    window['TuiTextareaComponent'] = TuiTextareaComponent;
    // @ts-ignore
    window['TuiSpinnerComponent'] = TuiSpinnerComponent;
    // @ts-ignore
    window['TuiCheckboxComponent'] = TuiCheckboxComponent;
    // @ts-ignore
    window['TuiRadioComponent'] = TuiRadioComponent;
    // @ts-ignore
    window['TuiDropComponent'] = TuiDropComponent;
    // @ts-ignore
    window['TuiCalendarComponent'] = TuiCalendarComponent;
    // @ts-ignore
    window['TuiSwitchComponent'] = TuiSwitchComponent;
    // @ts-ignore
    window['TuiTableComponent'] = TuiTableComponent;
    // @ts-ignore
    window['TuiPaginatorComponent'] = TuiPaginatorComponent;
    // @ts-ignore
    window['TuiTreeComponent'] = TuiTreeComponent;
    // @ts-ignore
    window['TuiTagComponent'] = TuiTagComponent;
    // @ts-ignore
    window['TuiTitleComponent'] = TuiTitleComponent;
    // @ts-ignore
    window['TuiTopnComponent'] = TuiTopnComponent;
  }
  ngDoBootstrap() {
    this.exportComponent();
  }
}
