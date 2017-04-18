import { Component, OnInit, NgZone } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    isShrunk = false;

    constructor(zone: NgZone) {
        window.onscroll = () => {
            zone.run(() => {
                this.isShrunk = (window.pageYOffset > 0);
            });
        };
    }

  ngOnInit() {
  }

}
