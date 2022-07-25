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
        'explanation': 'Dyslexia is a learning disability in reading. People with dyslexia have trouble reading at a good pace and without mistakes. They may also have a hard time with reading comprehension, spelling, and writing. But these challenges aren’t a problem with intelligence.',
        'important': 'Dyslexia isn’t a problem of intelligence, laziness, vision, or reading letters backwards.',
        'trouble areas': ['Sounding Out Written Words', 'Recognizing Common Words in Text', 'Spelling', 'Reading Accurately and Smoothly', 'Writing', 'Rhyming', 'Solving Word Problems in Math', 'Learning a Foreign Language'],
        'accommodation': ['Step-by-step instructions on the basics of reading, with each concept mastered before moving on', 'Different ways for people to show what they know, like speaking rather than doing a written report', 'Technology like audiobooks and text-to-speech to level the playing field']
    },
    'dyscalculia': {
        'disability': 'Dyscalculia',     
        'explanation': 'Dyscalculia is a learning disability in math. People with have trouble with math at many levels. They often struggle with key concepts like bigger vs. smaller. And they can have a hard time doing basic math problems and more abstract math.',
        'important': 'Dyscalculia isn’t a problem of intelligence or lack of effort.',
        'trouble areas': ['Seeing How Numbers Fit Together', 'Counting', 'Calculating', 'Recalling Math Facts Like 2 + 4 = 6', 'Using Concepts Like Less Than', 'Using Symbols Like + and -', 'Telling Left From Right', 'Reading a Clock', 'Working with Dollars and Coins'],
        'accommodation': ['Blocks, number lines, and other tools to visualize how to solve math problems', 'Extra time for tests and other tasks that involve math', 'Technology like calculators and math apps to help make math easier to navigate']
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