// Protractor
import { browser, element, by } from 'protractor';

export class KrsweenPage {
    navigateTo() {
        return browser.get('/');
    }

    getHeadingText() {
        return element(by.css('app-root h1')).getText();
    }
}
