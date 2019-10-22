import {
  ModuleWithProviders,
  NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { View1Component } from './view1.component';

@NgModule({
  declarations: [
      View1Component
  ],
  imports: [
    CommonModule
  ]
})
export class View1Module {
  public static forRoot():ModuleWithProviders<View1Module>
  {
    return {
      ngModule: View1Module
    };
  }

  public static getMainComponent():string
  {
    return 'View1Component';
  }
}
