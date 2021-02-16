let input = prompt("What would you like to do?")
const todos = ['Do Laundry', 'Clean House', 'See Doctor', 'Do Groccery'];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log("*******")
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i + 1}: ${todos[i]}`);
        }
    } else if (input === 'new') {
        const newTodo = prompt('What todo do you want to add?')
        todos.push(newTodo);
        console.log(`${newTodo} has been added to the list`)
    } else if (input === 'delete') {
        const indexStr = prompt("Ok, enter the index to delete: ")
        const index = parseInt(indexStr);
        if (!Number.isNaN(index)) {
            while (index < 0 && index > todos.length) {
                const index = prompt("Please enter a valid index! ")
            }
            todos.splice(index, 1)
        } else {
            console.log("Unknow index !!")
        }
    }
    input = prompt("What would you like to do?")
}
console.log("Ok, You have quit the game")