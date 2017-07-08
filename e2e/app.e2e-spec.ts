import { MealAppPage } from './app.po';

describe('meal-app App', () => {
  let page: MealAppPage;

  beforeEach(() => {
    page = new MealAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
