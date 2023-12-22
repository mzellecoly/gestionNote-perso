import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent {
  constructor(private location: Location) { }

  goBack(): void {
    this.location.back();
  }

}
