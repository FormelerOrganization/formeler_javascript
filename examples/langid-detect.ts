import {Formeler} from "../src";

let formeler = new Formeler("YOUR-API-KEY");
async function Run() {
    try {
        const result = await formeler.langID.detect("Dies ist ein Test");
        console.log(result);
    } catch (error) {
        console.log("Something went wrong: ", error);
    }
}

Run();