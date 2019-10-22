import {
  ModuleWithProviders,
  NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { View2Component } from './view2.component';

@NgModule({
  declarations: [View2Component],
  imports: [
    CommonModule
  ]
})
export class View2Module {
  public static forRoot():ModuleWithProviders<View2Module>
  {
    return {
      ngModule: View2Module
    };
  }

  public static getMainComponent():string
  {
    return 'View2Component';
  }
}
