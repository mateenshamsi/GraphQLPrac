import express from 'express'
import {ApolloServer} from '@apollo/server'
import {expressMiddleware} from '@apollo/server/express4'
async function start(){ 
    const app = express()
    app.use(express.json())
const server = new ApolloServer({
    typeDefs:`
    type Query{ 
        hello:String
        say(name:String):String
    }
    `,
    resolvers:{
        Query:{
            hello:()=>`Hey there I am grahql`,
            say:(_,{name}:{name:String})=>`hi ${name} `
        }
    }
})
await server.start() 
app.use('/graphql',expressMiddleware(server)) 
app.listen(3000,()=>{ 
    console.log("listeniong on port 3000")
})
}
start()