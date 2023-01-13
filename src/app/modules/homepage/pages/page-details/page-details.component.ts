import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  detail : any;
  
  constructor(
    public router : Router,
    private activatedRoute : ActivatedRoute
    ) { }

  ngOnInit(): void {
    

    const id  = this.activatedRoute.snapshot.params['id'];

    console.log(id);

    // this.jobService.findJobById(id).subscribe((res : any) => {
    //   console.log(res);
    //    this.jobDetails = res?.data ;  
    // }) ;

  }


}
