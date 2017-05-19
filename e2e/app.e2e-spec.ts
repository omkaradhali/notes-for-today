import { NotesForTodayPage } from './app.po';

describe('notes-for-today App', () => {
  let page: NotesForTodayPage;

  beforeEach(() => {
    page = new NotesForTodayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
