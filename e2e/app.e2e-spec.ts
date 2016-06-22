import { Odessajs2016Page } from './app.po';

describe('odessajs-2016 App', function() {
  let page: Odessajs2016Page;

  beforeEach(() => {
    page = new Odessajs2016Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
