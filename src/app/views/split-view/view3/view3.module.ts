import {
  ModuleWithProviders,
  NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { View3Component } from './view3.component';

@NgModule({
  declarations: [View3Component],
  imports: [
    CommonModule
  ]
})
export class View3Module {
  public static forRoot():ModuleWithProviders<View3Module>
  {
    return {
      ngModule: View3Module
    };
  }

  public static getMainComponent():string
  {
    return 'View3Component';
  }
}
