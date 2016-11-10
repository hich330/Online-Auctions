import { SmartBidPage } from './app.po';

describe('smart-bid App', function() {
  let page: SmartBidPage;

  beforeEach(() => {
    page = new SmartBidPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
