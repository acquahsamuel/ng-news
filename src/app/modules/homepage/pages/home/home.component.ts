import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  images = [
    {
      backgroundImage:
        'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
      likeTag: 'Demo',
      title:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ipsa temporibus saepe.',
      popupImage: 'Demo',
      user: {
        name: 'Samuel',
      },
    },
    {
      backgroundImage:
        'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
      likeTag: 'Demo',
      title:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ipsa temporibus saepe.',
      popupImage: 'Demo',
    },
    {
      backgroundImage:
        'https://images.unsplash.com/photo-1661961110218-35af7210f803?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      likeTag: 'Demo',
      title: '13th January 2022',
      popupImage: 'Demo',
    },

    {
      backgroundImage:
        'https://images.unsplash.com/photo-1661956601349-f61c959a8fd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
      likeTag: 'Demo loooo',
      title:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ipsa temporibus saepe.',
      popupImage: 'Demo',
    },
    {
      backgroundImage:
        'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
      likeTag: 'Demo loooo',
      title:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ipsa temporibus saepe.',
      popupImage: 'Demo',
    },

    {
      backgroundImage:
        'https://images.unsplash.com/photo-1661961110218-35af7210f803?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      likeTag: 'Demo',
      title: '13th January 2022',
      popupImage: 'Demo',
    },

    {
      backgroundImage:
        'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
      likeTag: 'Demo loooo',
      title:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ipsa temporibus saepe.',
      popupImage: 'Demo',
    },
    {
      backgroundImage:
        'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
       likeTag: 'Demo loooo',
      title:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ipsa temporibus saepe.',
      popupImage: 'Demo',
    },
  ];
}
