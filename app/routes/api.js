var
    express = require('express'),
    apiRouter = express.Router(),
    librariesCtrl = require('../controllers/libraries')
    
apiRouter.get('/', function(req,res){
    res.json({message: 'api root'})
})

apiRouter.route('/libraries')
    .get(librariesCtrl.index)
    .post(librariesCtrl.create)
apiRouter.route('/libraries/:id')
    .get(librariesCtrl.show)
    .put(librariesCtrl.createResource)
    .delete(librariesCtrl.removeResource)

module.exports = apiRouter