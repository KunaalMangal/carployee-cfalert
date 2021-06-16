import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedCfalert } from '@demo/shared';
import {} from '@nativescript/cfalert';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedCfalert {}
