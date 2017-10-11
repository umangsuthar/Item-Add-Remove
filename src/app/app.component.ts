import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = ["java","angular","vue"];
  inputItem = "";

        pushItem = function(){
            if ( this.inputItem != "")
            {
              this.items.push(this.inputItem);
              this.inputItem = "";
            }
          }
        popItem = function(index){
            this.items.splice(index,1);
        }
}
