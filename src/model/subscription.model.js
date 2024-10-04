import mongoose, { Schema }from "mongoose"

const subscriptionSchema = new Schema({
    subscriber: {
       type: Schema.Types.ObjectId,   // One who is subscribing
       ref: "User"
    },
    channel: {
        type: Schema.Types.ObjectId,   // One to whom is 'subscriber' is subscribing 
        ref: "User"
    }
    
}, {timeseries: true})

export const subscription = mongoose.model( "subscription", subscriptionSchema )