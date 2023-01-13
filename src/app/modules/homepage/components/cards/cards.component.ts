import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  blog = [
    {
      id: 1,
      author: 'Angular',
      image: 'https://images.unsplash.com/photo-1605218403317-6caf5485d304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      documentationurl: 'https://angular.io/docs',
      links: ['facebook', 'linkedin', 'instagram'],
      date: '13th January 2022',
      slug: 'hub-spot',
      tags: ['angular', 'frontend'],
      meta_description: "Getting started with angular",
      name: "Demonstration Blog Post",
      postBody: "This is an example blog post.  You can delete this blog post by going to the blog dashboard",
      post_summary: "This is an example blog post.  You can delete this blog post by going to the blog dashboard",
    },
    {
      id: 2,
      author: 'Angular',
      image: 'https://www.nylas.com/wp-content/uploads/GraphQL_Blog@2x-1024x536.png',
      documentationurl: 'https://angular.io/docs',
      links: ['facebook', 'linkedin', 'instagram'],
      date: '13th January 2022',
      slug: 'hub-spot',
      tags: ['angular', 'frontend'],
      meta_description: "Getting started with angular",
      name: "Demonstration Blog Post",
      postBody: "This is an example blog post.  You can delete this blog post by going to the blog dashboard",
      post_summary: "This is an example blog post.  You can delete this blog post by going to the blog dashboard",

    },
    {
      id: 3,
      author: 'Angular',
      image: 'https://unsplash.com/photos/cckf4TsHAuw',
      documentationurl: 'https://angular.io/docs',
      links: ['facebook', 'linkedin', 'instagram'],
      date: '13th January 2022',
      slug: 'hub-spot',
      tags: ['angular', 'frontend'],
      meta_description: "Getting started with angular",
      name: "Demonstration Blog Post",
      postBody: "This is an example blog post.  You can delete this blog post by going to the blog dashboard.</p>",
      post_summary: "This is an example blog post.  You can delete this blog post by going to the blog dashboard.</p>",


    },


    {
      id: 4,
      author: 'Angular',
      image: 'https://images.unsplash.com/photo-1606921231106-f1083329a65c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      documentationurl: 'https://angular.io/docs',
      links: ['facebook', 'linkedin', 'instagram'],
      date: '13th January 2022',
      slug: 'hub-spot',
      tags: ['angular', 'frontend'],
      meta_description: "Getting started with angular",
      name: "Demonstration Blog Post",
      postBody: "This is an example blog post.  You can delete this blog post by going to the blog dashboard",
      post_summary: "This is an example blog post.  You can delete this blog post by going to the blog dashboard   <br>",
    },

    {
      id: 4,
      author: 'Angular',
      image: 'https://unsplash.com/photos/cckf4TsHAuw',
      documentationurl: 'https://angular.io/docs',
      links: ['facebook', 'linkedin', 'instagram'],
      date: '13th January 2022',
      slug: 'hub-spot',
      tags: ['angular', 'frontend'],
      meta_description: "Getting started with angular",
      name: "Demonstration Blog Post",
      postBody: "This is an example blog post.  You can delete this blog post by going to the blog dashboard",
      post_summary: "This is an example blog post.  You can delete this blog post by going to the blog dashboard",
    },

    {
      id: 5,
      author: 'Angular',
      image: 'https://unsplash.com/photos/cckf4TsHAuw',
      documentationurl: 'https://angular.io/docs',
      links: ['facebook', 'linkedin', 'instagram'],
      date: '13th January 2022',
      slug: 'hub-spot',
      tags: ['angular', 'frontend'],
      meta_description: "Getting started with angular",
      name: "Demonstration Blog Post",
      postBody: "This is an example blog post.  You can delete this blog post by going to the blog dashboard",
      post_summary: "This is an example blog post.  You can delete this blog post by going to the blog dashboard",

    },
  ]



  // @ts-ignore 
  goTo(id: any) {
    this.router.navigate(['/blog-details', id]);
  }



}
