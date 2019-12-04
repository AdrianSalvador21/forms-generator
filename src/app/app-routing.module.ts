import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DynamicGeneratorModule} from './modules/dynamic-generator/dynamic-generator.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => DynamicGeneratorModule
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'disabled',
      useHash: true
    })
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
