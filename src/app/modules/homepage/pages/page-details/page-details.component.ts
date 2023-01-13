import { Component, OnInit } from '@angular/core';

interface IBlog{

}


@Component({
  selector: 'app-page-details',
  templateUrl: './page-details.component.html',
  styleUrls: ['./page-details.component.scss']
})
export class PageDetailsComponent implements OnInit {

  details : any;
  jobDetails : any;
  
  constructor() { }

  ngOnInit(): void {
  }


  blog  : IBlog = [
    {
      
    }
  ]


}
