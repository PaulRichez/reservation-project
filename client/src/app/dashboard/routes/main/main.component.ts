import { Component } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { ApiService } from '../../core/services/api.service';
import * as qs from 'qs'
import { Router } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  host: {class: 'fullComponent'},
})
export class MainComponent {
  establishments!: any[];
  pagination: any;
  loadingData: boolean = true;
  constructor(private api: ApiService, private router: Router) {

  }
  goToestablishment(id: string) {
    this.router.navigate(['dashboard', 'establishment', id])
  }
  fetchData(event: LazyLoadEvent) {
    const sort = event.sortField ? [`${event.sortField}:${event.sortOrder === 1 ? 'asc' : 'desc'}`] : {};
    const query = qs.stringify({
      pagination: {
        page: (event.first || 0) / (event.rows || 5) + 1,
        pageSize: event.rows,
      },
      sort,
      populate: ['deep'],
    }, {
      encodeValuesOnly: true,
    });
    this.loadingData = true;
    this.api.find('establishments', query).subscribe({
      next: result => {
        this.establishments = result.data;
        this.pagination = result.meta.pagination;
        this.loadingData = false;
      },
      error: err => {
        this.loadingData = false;
      }

    });
  }
}
