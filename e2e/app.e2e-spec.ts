// Page Object
import { KrsweenPage } from './app.po';

describe('krsween App', function() {
    let page: KrsweenPage;

    beforeEach(() => {
        page = new KrsweenPage();
    });

    it('should display message saying app works', () => {
        page.navigateTo();
        expect(page.getHeadingText()).toEqual('@krsween');
    });
});
