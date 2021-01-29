import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  
{
  function dosomething(){
    for(var i=1;i<5;i++){
    console.log(i);
  }
  console.log('finally:'+ i);
}
 dosomething();
}