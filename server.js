const express = require('express')
const app = express()
const PORT = 8000

const learningDisabilities = {
    'adhd': {
        'disability': 'ADHD',
        'explanation': 'n/a',
        'signs': 'n/a',
        'accommodation': 'Fidget Toys'
    },    
    'dyslexia': {
        'disability': 'Dyslexia',
        'explanation': 'n/a',
        'signs': 'n/a',
        'accommodation': 'Unknown'
    },
    'dyscalculia': {
        'disability': 'Dyscalculia',     
        'explanation': 'n/a',
        'signs': 'n/a',
        'accommodation': 'Unknown'
    },
    'unknown': {
        'disability': 'Unknown',     
        'explanation': 'Unknown',
        'signs': 'n/a',
        'accommodation': 'Unknown'
    }
}

//looks very similar to an event listener in js but it is network request instead of click

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
    const disabilityName = request.params.name.toLowerCase()
    if(learningDisabilities[disabilityName]) {
        response.json(learningDisabilities[disabilityName])
    } else {
        response.json(learningDisabilities['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}.`)
})