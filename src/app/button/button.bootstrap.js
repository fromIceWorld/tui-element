import { bootstrapApplication } from "@angular/platform-browser";
import { ɵCodegenComponentFactoryResolver } from "@angular/core";
import { AppModule } from "../app.module";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

function createApp() {
  //   let factoryResolve = new ɵCodegenComponentFactoryResolver([]);
  //   console.log(factoryResolve);
  //   let componentFactory = factoryResolve.resolveComponentFactory(AppModule);
  //   console.log(componentFactory);
  platformBrowserDynamic()
    .bootstrapModule(AppModule, {
      // ngZone: 'noop',
    })
    .then(() => {
      console.log("Angular@10.2.5 + ng-zorro-antd@10.2.2应用加载完成。");
    })
    .catch((err) => console.error(err));
}
export { createApp };
