const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireLogin')
const requireCredits = require('../middlewares/requireCredits')


const Survey = mongoose.model('surveys')

module.exports = app =>{
  app.post('/api/surveys', requireLogin, requireCredits, (req,res)=>{
    const{title,subject,body,recipients} = req.body;


    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email=>({email.trim()})),
      _user: req.user.id,
      dateSent:Date.now()

    })
  })
}


//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
