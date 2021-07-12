app.use((req,res,next)=>{
    console.log(`processing request for ${req.url}...`)
    next()
})

app.use((req,res,next)=>{
    console.log('terminating request')
    res.end('Thnkas for playing')
})

app.use((req,res,next)=>{
    console.log('not getting called')
})
