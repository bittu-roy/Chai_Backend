import express from 'express';

const app= express();

const port= process.env.PORT || 3000

// app.get('/', (req, res)=>{
//     res.send('Hello Everyone I am learning Backend!!..')
// })

app.get('/api/jokes', (req, res)=>{
    const jokes= [
        {
            id: 1,
            title: 'A joke',
            content: 'This 1st joke'
        },
        {
            id: 2,
            title: 'A joke',
            content: 'This 2nd joke'
        },
        {
            id: 3,
            title: 'A joke',
            content: 'This 3rd joke'
        },
        {
            id: 4,
            title: 'A joke',
            content: 'This 4th joke'
        },
        {
            id: 5,
            title: 'A joke',
            content: 'This 5th joke'
        },
    ]
    res.send(jokes);
});

app.listen(port, ()=>{
    console.log(`Server runing at http://localhost:${port}`)
})