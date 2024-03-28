import { Injector, enableProdMode } from '@angular/core';

import { createCustomElement } from '@angular/elements';
import { tuiBootstrap } from '@tui/frame';
import { AppModule } from './app/app.module';
import { TuiButtonComponent } from './app/button/button.component';
import { TuiCalendarComponent } from './app/calendar/calendar.component';
import { TuiCheckboxComponent } from './app/checkbox/checkbox.component';
import { TuiDropComponent } from './app/drop/drop.component';
import { TuiInputComponent } from './app/input/input.component';
import { TuiPaginatorComponent } from './app/paginator/paginator.component';
import { TuiRadioComponent } from './app/radio/radio.component';
import { TuiSpinnerComponent } from './app/spinner/spinner.component';
import { TuiSwitchComponent } from './app/switch/switch.component';
import { TuiTableComponent } from './app/table/table.component';
import { TuiTagComponent } from './app/tag/tag.component';
import { TuiTextareaComponent } from './app/textarea/textarea.component';
import { TuiTitleComponent } from './app/title/title.component';
import { TuiToggleButtonComponent } from './app/toggle-button/toggle-button.component';
import { TuiTopnComponent } from './app/topn/topn.component';
import { TuiTreeComponent } from './app/tree/tree.component';
import { environment } from './environments/environment';
if (environment.production) {
  enableProdMode();
}
//@ts-ignore
window.injector = Injector.create({
  name: '应用自定义依赖',
  parent: null,
  providers: [],
});
// @ts-ignore
window['createCustomElement'] = createCustomElement;
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

console.log('开始加载Angular@12.2.0 + tui/pangu@2.1.2-beta 应用。');

tuiBootstrap('tui-element')
  .bootstrapModule(AppModule)
  .then(() => {
    console.log('Angular@12.2.0 + tui/pangu@2.1.2-beta 应用加载完成。');
  })
  .catch((err: any) => console.error(err));
