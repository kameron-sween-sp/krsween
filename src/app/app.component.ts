// NG2
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    bioLinks = [
        { label: 'Boston, MA', icon: 'map-marker', url: '' },
        { label: 'Email me', icon: 'envelope', url: 'mailto:kameron@krsween.com' },
        { label: 'krsween', icon: 'twitter', url: 'https://twitter.com/krsween' },
        { label: 'krsween', icon: 'github', url: 'http://github.com/krsween/' },
        { label: 'krsween', icon: 'linkedin', url: 'https://www.linkedin.com/in/krsween/' },
        { label: 'krsween', icon: 'dribbble', url: 'https://dribbble.com/krsween' },
        { label: 'krsween', icon: 'behance', url: 'https://www.behance.net/krsween' },
        { label: 'krsween', icon: 'bitbucket', url: 'https://bitbucket.org/krsween/' },
        { label: 'krsween', icon: 'stack-overflow', url: 'https://stackoverflow.com/users/4368410/krsween' }
    ];
    today = new Date();
}
