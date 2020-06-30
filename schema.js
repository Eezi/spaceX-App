const {
     GraphQLObjectType,
     GraphQLInt,
     GraphQLBoolean,
     GraphQLString
    } = require('graphql')

//Launch type
const LunchType = new GraphQLObjectType({
    name: 'Launch',
    fields: () => ({
        flight_number: { type: GraphQLInt },
        mission_name: { type: GraphQLString },
        launch_year: { type: GraphQLString },
        launch_date_local: { type: GraphQLString },
        lauch_success: { type: GraphQLBoolean },
        rocket: { type: RocketType },
    })
})

const RocketType = new GraphQLObjectType({
    name: 'Rocket',
    fields: () => ({
        rocket_id: { type: GraphQLString },
        rocket_name: { type: GraphQLString },
        rocket_type: { type: GraphQLString },
        
    })
})
//https://api.spacexdata.com/v3/launches
