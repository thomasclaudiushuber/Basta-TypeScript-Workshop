import { GithubbrowserPage } from './app.po';

describe('githubbrowser App', () => {
  let page: GithubbrowserPage;

  beforeEach(() => {
    page = new GithubbrowserPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
