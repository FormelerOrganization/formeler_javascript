const Formeler = require("../src").Formeler;
let formeler = new Formeler("YOUR-API-KEY");
formeler.langID.detect("Dies ist ein Test").then((res: any) => {
    console.log(res);
}).catch((err: any) => {
    console.log(err);
});