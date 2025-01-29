import "reflect-metadata";
import app from "./app";
import { myDatabase } from "./database/db";

const main = async () => {
    try {
        await myDatabase.initialize();
        console.log('Connection with ormdb success');
        app.listen(3000);
        console.log('Hello express JS')
    } catch (err) {
        console.error("Error during Data Source initialization", err);
    }
}

main();