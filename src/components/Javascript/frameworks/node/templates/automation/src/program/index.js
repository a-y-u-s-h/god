import puppeteer from "puppeteer"
import csv from "@/components/elements/csv"
import text from "@/components/elements/text"
import shell from "@/components/elements/shell"
import application from "@/settings/application.yaml"

export default async data => {
  /*
    ======================================
      Whatever data that the user wants
      to pass in through `options.js` route,
      will be available in the data variable.
      Following code opens up a browser with
      a tab that opens "about:blank", because
      there HAS to be at least one tab opened
      all the time.
    ======================================
  */
  const { options } = data
  const { information, settings } = application.automation

  const browser = await puppeteer.launch(settings.browser)
  const page = await browser.newPage()

  try {
    /*
      ======================================
        This is where you should start writing
        code. Whenever you create a page, you
        should pass in its settings as well so
        that you get expected behavior.
        Unless you change the root variable's value,
        it'll open another blank tab.
      ======================================
    */
    await page.goto(information.root, settings.page.static)
    /*
      ======================================
        The line "await page.waitForNavigation()"
        pauses the browser in this case, so developer
        can debug the page he's navigating to. You
        can remove if you just want the browser to
        close after it's done with everything.
      ======================================
    */
    await page.waitForNavigation()
  } catch (e) {
    throw new Error(e)
  } finally {
    await page.close()
    await browser.close()
  }
  /*
    ======================================
      You can change the return value here
      if you want. And then later use that
      return value to write something else
      in another companion script.
    ======================================
  */
  return {}
}
