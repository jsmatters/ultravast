import { UltravastPage } from './app.po';

describe('ultravast App', () => {
  let page: UltravastPage;

  beforeEach(() => {
    page = new UltravastPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
