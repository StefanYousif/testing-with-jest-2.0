#testing-with-jest
A Jest + npm lab session


lade till två tester
browser.test.js

// Kontrollera att titeln på sidan är rätt
test('page title should be "En stack"', async () => {
    //Hitta titeln och hämta dess innehåll
    const title = await driver.findElement(By.css('h1')).getText();

    //Jämför titeln med den förväntade titeln
    expect(title).toBe('Här kan vi leka med en stack');
})

stack.test.js
//Testa att push-funktinen fungerar korrekt
test('Pushing a new element onto the stack should increase by 1', () => {
    //lägg till ett element på stacken
    stack.push(10);

    //kontrollera att storleken ökade genom att kontrollera om det översta elementet är definierat
    //expect(stack.peek()).toBeDefined();

    //Kontrollera att storleken ökade genom att kontrollera storleken på stacken
    expect(stack.size()).toBe(1);
    
})
