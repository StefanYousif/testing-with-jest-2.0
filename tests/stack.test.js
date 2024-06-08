const stack = require('../src/stack');

test('peek on empty stack returns undefined', () => {
    expect(stack.peek()).toBeUndefined();
});

beforeEach(() => {
    //Rensa stacken innan varje test körs
    while(stack.size() > 0) {
        stack.pop();
    }
});

test('peek on stack with one element returns that element', () => {
    stack.push(1);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(1);
});

test('peek on stack with two or more elements returns the top element', () => {
    stack.push(1);
    stack.push("wow");
    stack.push(42);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(42);
});

//Testa att push-funktinen fungerar korrekt
test('Pushing a new element onto the stack should increase by 1', () => {
    //lägg till ett element på stacken
    stack.push(10);

    //kontrollera att storleken ökade genom att kontrollera om det översta elementet är definierat
    //expect(stack.peek()).toBeDefined();

    //Kontrollera att storleken ökade genom att kontrollera storleken på stacken
    expect(stack.size()).toBe(1);
    
})