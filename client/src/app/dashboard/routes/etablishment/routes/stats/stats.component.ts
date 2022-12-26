import { Component } from '@angular/core';
@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
  host: { class: 'fullComponent gap-3' },
})
export class StatsComponent {
  selectedDate = 'month';
  dates: any = [
    {
      name: 'Ce mois', value: 'month'
    },
    {
      name: 'Le mois dernier', value: 'lastMonth'
    },
    {
      name: 'Cette année', value: 'year'
    },
  ];
  constructor() {

  }
}
