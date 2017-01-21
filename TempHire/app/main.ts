//import { platformBrowser } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';  
//import { AppModuleNgFactory } from '../aot/app/app.module.ngfactory';

//platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);

//Application module  
import { AppModule } from './app.module';

//Compile and load application module  
platformBrowserDynamic().bootstrapModule(AppModule);  
