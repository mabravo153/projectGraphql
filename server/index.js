const { GraphQLServer } = require('graphql-yoga');


//crear el resolver 
/*
const resolvers = {
    Query:{
        feed:
        link:
        }
    },
    Mutation: {
        post: 

        updatePost: 

        deletePost:
    }
}

*/
//crear el servidor 


const server = new GraphQLServer({
    typeDefs: './server/schema/schema.graphql',
    resolvers
})


server.start(() => console.log('El servidor esta corriendo en el puerto 4000'))         