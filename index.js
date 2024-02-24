import express from "express"
import cors from "cors";
import {MercadoPagoConfig, Preference} from 'mercadopago';
const client = new MercadoPagoConfig({ accesstoken: "TEST-311271587189856-022401-5dda7901e7780149fa883b485eb8fc1a-624498202"});


const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req,res) => {
    res.send("server :)");
});

app.post("/create_preference", async (req,res)=> {
    try{
      const body = { 
        items: [
            {
                title:req.body.title,
                quantity: Number(req.body.quantity),
                unit_price: Number(req.body.price),
                currency_id: "ARS",
            },
         ],
         back_urls:{
            success:"https://github.com/LudmiJC?tab=repositories",
            failure:"https://github.com/LudmiJC?tab=repositories",
            pending:"https://github.com/LudmiJC?tab=repositories",
         },
         auto_return:"approved",
      };

      const preference = new Preference(client);
      const result = await preference.create({ body });
      res.json({
        id: result.id,
      });
    }catch(erorr) {
        console.log(error);
        res.status(500).json({
            error: "Error al crear la preferencia :(",
        });

    }
});

app.listen(port, ()=>{
    console.log('el servidor esta corriendo en el puerto ${port}');
})