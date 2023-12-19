import { enableProdMode } from '@angular/core';

import { tuiBootstrap } from '@tui/frame';
import 'lib-flexible';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
if (environment.production) {
  enableProdMode();
}

tuiBootstrap('tui-element')
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
