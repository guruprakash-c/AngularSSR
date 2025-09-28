import { afterNextRender, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  productId:any;
  router = inject(ActivatedRoute);
  ngOnInit(){
    this.productId = this.router.snapshot.paramMap.get('id');
  }
}

