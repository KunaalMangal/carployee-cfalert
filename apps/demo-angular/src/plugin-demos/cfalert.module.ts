import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { CfalertComponent } from './cfalert.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: CfalertComponent }])],
	declarations: [CfalertComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class CfalertModule {}
