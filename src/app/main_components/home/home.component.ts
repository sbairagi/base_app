import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images = [
    {path: '/assets/photo-1444065707204-12decac917e8.jfif'},
    {path: '/assets/photo-1445452916036-9022dfd33aa8.jfif'},
    {path: '/assets/photo-1443996104801-80c82e789b18.jfif'},
    {path: '/assets/photo-1505839673365-e3971f8d9184.jfif'},
    {path: '/assets/photo-1545420333-23a22b18b8fa.jfif'},
    {path: '/assets/photo-1548625149-d37da68f9a7f.jpg'},
    {path: '/assets/photo-1489365091240-6a18fc761ec2.jpg'},
    {path: '/assets/photo-1547691889-841a6f1c5ca6.jpg'},
    {path: '/assets/photo-1595433562696-a8b1cb8bdad1.jpg'},
    {path: '/assets/photo-1495563381401-ecfbcaaa60f2.jpg'},
    {path: '/assets/photo-1534801022022-6e319a11f249.jpg'},
    {path: '/assets/photo-1524324463413-57e3d8392df1.jpg'},
    {path: '/assets/photo-1506086679524-493c64fdfaa6.jpg'},
    {path: '/assets/photo-1569749450723-1836b067fb64.jpg'}
];   

imagesForSlider = [
    {path: 'https://thumbs.dreamstime.com/b/mountain-nature-panorama-dolomites-alps-italy-69046581.jpg'},
    {path: 'https://wallpapercave.com/wp/wp2532971.jpg'},
    {path: 'https://wallpapercave.com/wp/wp2068958.jpg'},
    {path: 'https://wallpaper.dog/large/10991978.jpg'},
    {path: 'https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?cs=srgb&dl=pexels-creative-vix-9754.jpg&fm=jpg'}
];


  constructor(private Router: Router) { }

  ngOnInit(): void {
  }

  productdetail(){
    this.Router.navigate(['/productdetail'])
  }

  handleCarouselEvents(event:any) {
    console.log(event);
  }

}
