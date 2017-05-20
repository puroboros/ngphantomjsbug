import { KarmaphantomPage } from './app.po';

describe('karmaphantom App', () => {
  let page: KarmaphantomPage;

  beforeEach(() => {
    page = new KarmaphantomPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
