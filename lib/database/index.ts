import mongoose from "mongoose"

const MONDODB_URI = process.env.MONGODB_URI;

let cached = (global as any ).mongoose || {conn: null, promise: null};

export const connectToDatabase = async () => {
    if(cached.conn ) return cached.conn;

    if(!MONDODB_URI) throw new Error("MONDODB_URI is missing");

    cached.promise = cached.promise || mongoose.connect(MONDODB_URI, {
        dbName: "clerk-auth",
        bufferCommands: false
    })

    cached.conn = await cached.promise;
    return cached.conn
}


// Server actions 
// connsectToDatabase( ) .... 
