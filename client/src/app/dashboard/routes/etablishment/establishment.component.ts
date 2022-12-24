import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-establishment',
  templateUrl: './establishment.component.html',
  styleUrls: ['./establishment.component.scss']
})
export class establishmentComponent {
  establishment: any;
  loadingData: boolean = true;

  constructor(private api: ApiService, private router: Router, private route: ActivatedRoute) {
    this.api.findOne('establishments', this.route.snapshot.params['id']).subscribe({
      next: result => {
        this.establishment = result.data;
        this.loadingData = false;
      },
      error: err => {
        this.loadingData = false;
      }
    });
  }
}
