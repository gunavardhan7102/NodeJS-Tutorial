const authorize = (req, res, next) => {
  const {user} = req.query;
  if(user === 'guna'){
    // res.send('Hello Guna')
    console.log('Authorized');
    next()
  }
  else
   console.log('UnAuthorized');
       
}

module.exports = authorize