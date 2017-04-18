import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-bio-link',
    templateUrl: './bio-link.component.html',
    styleUrls: ['./bio-link.component.scss']
})
export class BioLinkComponent implements OnInit {
    @Input('label') label: string;
    @Input('icon') icon: string;
    @Input('url') url: string;

    constructor() { }

    ngOnInit() {
    }

}
