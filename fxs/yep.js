exports.handler = (event, context, callback) => {
  let tylik = process.env.TYLIK;
  console.log(tylik);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({msg: `yep! yep!!, yep!!! ${tylik}`})
  });
};
