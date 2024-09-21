import express from 'express'
import { ApolloServer } from '@apollo/server'

import { User } from './user'

export async function createApolloGraphQlServer(){ 
    const app = express()
    app.use(express.json())
    const server = new ApolloServer({
        typeDefs: `
    type Query{ 
     ${User.queries} 
    }
        type Mutation{ 
            ${User.mutations}
        }
    `,
        resolvers: {
            Query: {
               ...User.resolvers.queries 
            },
            Mutation: {
                ...User.resolvers.mutations 
            }

        }
    })
    await server.start()
    return server 
}