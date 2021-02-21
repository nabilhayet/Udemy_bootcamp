const args = process.argv.slice(2) // ignoring first two eleemnts which are command line interface
for (let arg of args) {
    console.log(`Hi there, ${arg}`)
}