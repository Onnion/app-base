import { NgModule } from '@angular/core';
import { FormatNamePipe } from './forma-name/forma-name';
import { FormatPricePipe } from './forma-price/forma-price';
import { FormatHoursPipe } from './format-hours/format-hours';
import { FormatDatePipe } from './format-date/format-date';

@NgModule({
	declarations: [FormatNamePipe,
    FormatPricePipe,
    FormatHoursPipe,
    FormatDatePipe],
	imports: [],
	exports: [
		FormatNamePipe,
		FormatPricePipe,
    FormatHoursPipe,
    FormatDatePipe
	]
})

export class PipesModule {}
