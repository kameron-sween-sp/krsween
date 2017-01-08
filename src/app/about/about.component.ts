// NG2
import { Component } from '@angular/core';
// App
import { LinkItem } from '../interfaces';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent {
    links: Array<LinkItem> = [
        {
            order: 100,
            icon: 'fa-github',
            url: 'https://github.com/krsween'
        },
        {
            order: 200,
            icon: 'fa-twitter',
            url: 'https://twitter.com/krsween'
        },
        {
            order: 300,
            icon: 'fa-linkedin',
            url: 'https://www.linkedin.com/in/krsween'
        }
    ].sort((firstLink, secondLink) => {
        return firstLink.order - secondLink.order;
    });
}
