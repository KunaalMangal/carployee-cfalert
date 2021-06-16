import { Component, NgZone } from '@angular/core';
import { DemoSharedCfalert } from '@demo/shared';
import {} from '@nativescript/cfalert';

@Component({
	selector: 'demo-cfalert',
	templateUrl: 'cfalert.component.html',
})
export class CfalertComponent {
	demoShared: DemoSharedCfalert;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedCfalert();
	}
}
