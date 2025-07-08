// the address of this server connected to the network is : 
// url - http://localhost:8383
// IP -> 127.0.0.1:8383
const express = require('express')
const app = express()
const PORT = 8383

let data = ['james']

// middleware
app.use(express.json())

// HTTP VERBS and routes (or paths)
// the method informs the nature of request and the route is a further sub directory
// basically we direct the request to the body of cod eto respond apprpriately, and these locations or routes are called end points

//  type 1 website endpoints (these endpoints are for sending back html and the typically come when a user enters a url in a browser )
app.get('/', (req, res) => {
// this is endpoint number 1 - /
    res.send(`
        <body style="background:pink;
        color: blue;">
        <h1>DATA</h1>
            <p>${JSON.stringify(data)}</p>
            <a href="/dashboard">Dashboard</a>
        </body>
        `)
})
app.get('/dashboard', (req, res) => {
    res.send(`
        <body>
            <h1>dashboard</h1>
            <a href="/">Home</a>
        </body>`)
})

// type 2 API endpoints (non visual) 

// CRUD-method = create-post read-get update-put and delete-delete

app.get('/api/data', (req, res) => {
    console.log("this was for data")
    res.send(data);
}) 

app.post('/api/data', (req, res) => {
    // someone wants to create a user (for example when they click a sign up button)
    // theuser clicks a sign up button after enetring their credentials, and their browser
    // is wired up to send out a network request to the server to handle that action 
    const newEntry = req.body
    console.log(newEntry)
    data.push(newEntry.name)
    res.sendStatus(201)
})

app.delete('/api/data', (req, res) => {
    data.pop()
    console.log('deleted the element off the end of the array')
    res.sendStatus(203)
})


app.listen(PORT, () => console.log(`Server has started on: ${PORT}`))