import { prisma } from "../prisma/db";
import { app } from "./app";
import { env } from "./config/env";

async function connectToDatabase() {
   try {
      await prisma.$connect();
      console.log("🎲 Connected to database");
   } catch (error) {
      console.error("❌ Failed to connect to database", error);
   }
}

async function startServer() {
   await connectToDatabase();

   app.listen(env.PORT, () => {
      console.log(`🚀 Server started on port ${env.PORT}`);
   });

}

startServer()