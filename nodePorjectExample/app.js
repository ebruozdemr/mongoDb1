const mongoose = require("mongoose");
const express= require('express');
 const utils=require('./utils/db')
const app = express();
mongoose.connect("mongodb://localhost/companydb")
    .then(() => console.log("Veritabanı bağlantısı başarıyla sağlanmıştır..."))
    .catch(error => console.log("Veritabanı bağlantısı sağlanırken beklenmeyen bir hatayla karşılaşıldı...", error.message));
    app.listen(3000, () => console.log("Yayın başladı..."));





