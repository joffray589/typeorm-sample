import {FooEntity} from "./FooEntity";
import {ConnectionOptions, createConnection} from "typeorm";

let dbOptions: ConnectionOptions = {
    driver: {
        type: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: '',
        database: 'test'
    },
    entities: [
        __dirname + "/FooEntity.js",
    ],

    autoSchemaSync: true
};

(async () => {
    try{
        let connection = await createConnection(dbOptions);

        console.log("connection.isConnected = " + connection.isConnected);

        await connection.getRepository(FooEntity).find(); // this will throw ECONNREFUSED

        console.log("Mysql connection ok");
    }
    catch(e){
        console.error("Mysql connection error : " + e );
    }
})();