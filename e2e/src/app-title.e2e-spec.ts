import { browser, logging } from 'protractor';

describe('Angular App', function () {
  it('check title', async () => {
    browser.waitForAngularEnabled(false);
    browser.get(browser.baseUrl);

    let expected = 'BBC - Home';
    let actual = browser.getTitle();

    expect(actual).toContain(expected);
  });

  afterEach(async () => {
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
