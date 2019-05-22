import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as Chart from 'chart.js';
@Component({
  selector: 'app-sales-user-charts',
  templateUrl: './sales-user-charts.component.html',
  styleUrls: ['./sales-user-charts.component.scss']
})
export class SalesUserChartsComponent implements OnInit {
  @ViewChild('salesChart') private salesChart: ElementRef;
  @ViewChild('usersChart') private usersChart: ElementRef;
  sales: Chart;
  users: Chart;
  constructor() { }

  ngOnInit() {
    this.sales = new Chart(this.salesChart.nativeElement, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Electronics',
            backgroundColor: '#c1c7d1',
            fill: 1,
            borderColor: '#c1c7d1',
            pointBackgroundColor: 'rgba(60,141,188,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: 'Digital Goods',
            fill: true,
            backgroundColor: '#3b8bba',
            borderColor: '#3b8bba',
            pointBackgroundColor: 'rgba(60,141,188,1)',
            data: [28, 48, 40, 19, 86, 27, 90],
          }
        ]
      },
      options: {
        responsive: true,
        legend: {
          display: true,
        },
        scales: {
          xAxes: [{
            gridLines: {
              display: false
            }
          }],
          yAxes: [{
            gridLines: {
              display: false
            },
          }],
        },
        plugins: {
          filler: {
              propagate: true
          }
      }
      },
    });
    this.users = new Chart(this.usersChart.nativeElement, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [10, 20, 30],
          label: 'Dataset 1',
          backgroundColor: [
            '#f56954',
            '#f39c12',
            '#3c8dbc'
          ],
        }],
        labels: ['New Users', 'Visted users', 'Regular']
      }
    });
  }

}
