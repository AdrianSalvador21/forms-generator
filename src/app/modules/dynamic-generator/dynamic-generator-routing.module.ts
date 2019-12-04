import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DynamicGeneratorPageComponent} from './pages/dynamic-generator-page/dynamic-generator-page.component';

const dynamicFormGeneratorRoutes: Routes = [
  {path: '', component: DynamicGeneratorPageComponent},
  // {path: '', component: DynamicFormPageComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(dynamicFormGeneratorRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class DynamicGeneratorRoutingModule {
}
