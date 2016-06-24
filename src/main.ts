import { bootstrapWorkerUi } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrapWorkerUi("loader.js");
