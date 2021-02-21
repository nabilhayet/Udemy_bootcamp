const fs = require('fs');
const folderName = process.argv[2] || 'Project'
// fs.mkdtemp(path.join(os.tmpdir(), 'foo-'), (err, directory) => {
//     if (err) throw err;
//     console.log(directory);
//     // Prints: /tmp/foo-itXde2 or C:\Users\...\AppData\Local\Temp\foo-itXde2
// });


// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log('IN the Callback')
//     if (err) throw err;
// })
// console.log('I come after mkdir')

try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`)
    fs.writeFileSync(`${folderName}/app.js`)
    fs.writeFileSync(`${folderName}/style.css`)
} catch (e) {
    console.log('Something went wrong', e)
}


