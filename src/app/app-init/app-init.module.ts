import { NgModule, APP_INITIALIZER } from "@angular/core";
import { CommonModule } from '@angular/common';

import { AppInitService } from "@services/app-init.service";

export function initApp(appInitService: AppInitService) {
    return () => appInitService.load();
}

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AppInitService,
    { provide: APP_INITIALIZER, useFactory: initApp, deps: [AppInitService], multi: true }
  ]
})
export class AppInitModule { }