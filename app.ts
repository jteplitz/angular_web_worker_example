/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrapWebWorker} from 'angular2/web_worker/worker';

@Component({
  selector: "hello-world"
})
@View({
  template: '<h1>Hello {{name}}</h1>'
})
class HelloWorldComponent {
  name: string;

  constructor() {
    this.name = 'Jason';
  }
}
bootstrapWebWorker(HelloWorldComponent);
