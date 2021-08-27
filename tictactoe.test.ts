import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
     await driver.sleep(2000)
    
});

test('Check X input', async () => {
    let x = await driver.findElement(By.id('cell-0'));
    await x.click()
     await driver.sleep(2000)

     await driver.findElement(By.id('cell-8')).click()
     await driver.sleep(2000)

     expect(await driver.findElement(By.id('cell-1')).getText()).toContain('O')
     await driver.sleep(2000)



     await driver.findElement(By.id('cell-2')).click()
     await driver.sleep(2000)


})