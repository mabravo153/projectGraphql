const { GraphQLServer } = require('graphql-yoga');
const { PrismaClient } = require('./prisma/node_modules/@prisma/client')
const prisma = new PrismaClient()

//crear el resolver 

const resolvers = {
    Query: {
        feed: async (root, args, context, info ) => await context.prisma.link.findMany()
        
    },
    Mutation:{
        post: async (root, args, context) => await context.prisma.link.create({
            data:{
                url: args.url,
                description: args.description
            },

        }) 
    }


}


//crear el servidor 

const server = new GraphQLServer({
    typeDefs: './server/schema/schema.graphql',
    resolvers,
    context: { prisma }
})


server.start(() => console.log('El servidor esta corriendo en el puerto 4000'))         