import httpServer from "#config/http.js";
import '#config/env.js'
import conectMongo from "#config/db.js";

const PORT=process.env.PORT;
const URL=process.env.MONGODB_URL;


const initial= async()=>{
      await conectMongo(URL);
      httpServer.listen(PORT,()=>{
            console.log(`SERVIDOR LEVANTADO EN EL PUERTO ${PORT}`)
      })

}

initial();