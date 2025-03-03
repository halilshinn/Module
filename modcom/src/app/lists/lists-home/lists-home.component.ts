import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists-home',
  standalone: false,
  templateUrl: './lists-home.component.html',
  styleUrl: './lists-home.component.css'
})
export class ListsHomeComponent implements OnInit { 

  numbers=[
    {value: 50 , label: 'Müşteri'},
    {value: '3500 tl' , label: 'Ciro'},
    {value: 65 , label: 'Yorumlar'}
    

  ];

  images=[
    {image:'/src/assets/images/dresser.jpeg',
    title:'Şifonyer',
    description:'Her türlü eşyayı koyabilirsin.'},
    {image:'modcom/src/assets/images/couch.jpeg',
      title:'kanepe',
      description:'Oturması muhteşem rahat koltuk.'}
  ]

  constructor () {


  }

  ngOnInit(): void {
    
  }

}
