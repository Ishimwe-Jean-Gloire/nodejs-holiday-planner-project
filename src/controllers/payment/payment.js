const PaypackJs = require("paypack-js").default;
import dotenv from "dotenv";
dotenv.config();
const paypack = PaypackJs.config({
  client_id:process.env.CLIENT_ID,
  client_secret:process.env.CLIENT_SECRET
});

export const cashIn = (req,res)=>{
    paypack
      .cashin({
        number: req.body.number,
        amount: req.body.amount,
        environment: "production",
      })
      .then((response) => {
        console.log(response.data);
        res.status(200).json(response.data)
      })
      .catch((err) => {
        console.log(err);
      });
}

export const cashOut = (req, res) => {
  paypack
    .cashout({
      number: req.body.number,
      amount: req.body.amount,
      environment: "production",
    })
    .then((response) => {
      console.log(response.data);
      res.status(200).json(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const paymentTransactions = (req,res)=>{
  paypack.transactions({ offset: 0, limit: 100 })
  .then((response) => {
    console.log(response.data);
    res.status(200).json(response.data);
  })
  .catch((err) => {
    console.log(err);
  });
}