import { TmaBirdPage } from './app.po';

describe('tma-bird App', () => {
  let page: TmaBirdPage;

  beforeEach(() => {
    page = new TmaBirdPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
