import {typeDefs} from './typedef'
import {queries} from './queries'
import {mutations} from './mutations.ts'
import {resolvers} from './resolvers'
import User from './user' 
export const User = { 
    typeDefs,
    queries,
    mutations,
    resolvers 
}