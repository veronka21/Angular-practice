import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubsription: Subscription;

  constructor() { }
  
  ngOnInit() {
    // const myNumbers = interval(1000);
    // this.firstObsSubsription = myNumbers.subscribe(
    //   (number: number) => {
    //     console.log(number);
    //   })
    const customIntervalObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count == 2) observer.complete();
        if (count > 3) {
          observer.error(new Error('Count is greater than 3!'));
        }
        count++;
      } ,1000)
    })

    customIntervalObservable.pipe(map((data: number) => {
      return 'Round: ' + (data + 1)
    }))

    this.firstObsSubsription = customIntervalObservable.pipe(filter(data => {
      return data > 0;
    }), map((data: number) => {
      return 'Round: ' + (data + 1)
    })).subscribe(data => {
      console.log(data);
    }, (error) => {
      console.log(error);
      alert(error.message);
    }, () => console.log("completed"))
  }
      
  ngOnDestroy(): void {
    this.firstObsSubsription.unsubscribe();
  }
}
    