import { MattPage } from './app.po';

describe('matt App', function() {
  let page: MattPage;

  beforeEach(() => {
    page = new MattPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
