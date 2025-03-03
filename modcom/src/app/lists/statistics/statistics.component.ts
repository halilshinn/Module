import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-statistics',
  standalone: false,
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css'
})
export class StatisticsComponent implements OnInit {
  @Input() data=[];

  constructor() {}

  ngOnInit(): void {
    
  }

}
