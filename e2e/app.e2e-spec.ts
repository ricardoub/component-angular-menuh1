import { Menuh1Page } from './app.po';

describe('menuh1 App', () => {
  let page: Menuh1Page;

  beforeEach(() => {
    page = new Menuh1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
