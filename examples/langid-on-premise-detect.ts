import {Formeler} from "../src";

let formeler = new Formeler("YOUR-API-KEY", "http://localhost:3000");
formeler.langID.detect("Dies ist ein Test").then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});