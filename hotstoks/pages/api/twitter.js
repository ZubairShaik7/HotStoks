const {spawn} = require('child_process')

const childPython = spawn('python', ['twitterSentiment.py', 'AAPL'])

childPython.stdout.on('data', (data) => {
    console.log(`${data}`)
    console.log(`${data}`)
})

childPython.stderr.on('data', (data) => {
    console.log(`${data}`)
})

