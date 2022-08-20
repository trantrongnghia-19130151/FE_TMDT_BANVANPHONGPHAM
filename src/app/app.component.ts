import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {HeaderComponent} from "./component/header/header.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  @ViewChild(HeaderComponent) child: { pName: string; } | undefined;

  p: string = "";
  title = 'mdb5-angular-ui-kit-pro-advanced';

  ngAfterViewInit(): void {
    // @ts-ignore
    this.p = this.child.pName;
  }
}
