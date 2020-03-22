let fs = require('fs');

fs.readFile("./src/css/dev.css", 'utf8', (err, data) => {
    if (err) throw err;
    data = `
    @variants responsive,
group-hover,
focus-within,
first,
last,
odd,
even,
hover,
focus,
active,
visited,
disabled {
    ${data}
}`
    fs.writeFile("./src/css/dev.css", data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    })
})