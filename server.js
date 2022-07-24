const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors');

app.use(cors())

const learningDisabilities = {
    'adhd': {
        'disability': 'ADHD - Attention-Deficit Hyperactivity Disorder',
        'explanation': 'ADHD is a common condition that makes it hard to focus, keep still, and think before acting. Some people with ADHD mainly have trouble with focus. (This is also known as ADD.) ADHD can also impact other skills, including managing emotions.',
        'important': 'ADHD is not cause by laziness or lack of discipline.',
        'trouble areas': ['Paying Attention', 'Self-Control', 'Sitting Still', 'Following Directions', 'Managing Emotions', 'Getting or Staying Organized', 'Remembering Information Long Engough to Use it', 'Shifting Focus'],
        'accommodation': ['Fidgets and movement breaks to help with things like staying seated and finishing tasks', 'Strategies for coping with anxiety, which is common in people with ADHD', 'Treatments like ADHD medication or behavior therapy']
    },    
    'dyslexia': {
        'disability': 'Dyslexia',
        'explanation': 'n/a',
        'accommodation': 'Unknown'
    },
    'dyscalculia': {
        'disability': 'Dyscalculia',     
        'explanation': 'n/a',
        'accommodation': 'Unknown'
    },
    'unknown': {
        'disability': 'Unknown',     
        'explanation': 'We apologize, but our database is currently limited and does not include information or accommodations for this at this time.',
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