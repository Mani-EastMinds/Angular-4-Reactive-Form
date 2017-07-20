import { Angular4reactiveformPage } from './app.po';

describe('angular4reactiveform App', () => {
  let page: Angular4reactiveformPage;

  beforeEach(() => {
    page = new Angular4reactiveformPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
