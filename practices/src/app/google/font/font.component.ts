import { Component } from '@angular/core';

@Component({
  selector: 'app-font',
  templateUrl: './font.component.html',
  styleUrls: ['./font.component.css'],
})
export class FontComponent {
  text = '';
  textSize = 10;
  textCls = '';
  // operation: string | number | undefined;

  setText(event: any) {
    const val = event.target.value;
    this.text = val;
  }

  // setSize(operation: any) {
  //   if (operation === 'inc') {
  //     this.textSize += 1;
  //   } else {
  //     this.textSize -= 1;
  //   }
  // }

  setSize(event: any) {
    const val = event.target.value;
    this.textSize = val;
  }
  setColor(event: any) {
    const val = event.target.value;
    this.textCls = val;
  }
}
