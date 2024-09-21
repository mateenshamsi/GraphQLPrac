import express from 'express'
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import { PrismaClient } from '@prisma/client'
import { prismaClient } from './lib/db'
import {createApolloGraphQlServer} from './graphql/index'
async function start() {
    const app = express()
    app.use(express.json())
  
    const server = await  createApolloGraphQlServer()
    app.use('/graphql', expressMiddleware(server))
    app.listen(3000, () => {
        console.log("listeniong on port 3000")
    })
}
start()