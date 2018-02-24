import { Component, OnInit, Input, Pipe, PipeTransform } from '@angular/core';
import {Dish} from '../shared/dish'
import { DishService } from '../services/dish.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Pipe({ name: 'values',  pure: false })
export class ValuesPipe implements PipeTransform {
  transform(value: any, args: any[] = null): any {
    return Object.keys(value).map(key => value[key]);
  }
}

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  dish: Dish;

  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    this.dish = this.dishservice.getDish(id);
  }

  goBack(): void {
    this.location.back();
  }

}
