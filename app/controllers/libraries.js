var
    mongoose = require('mongoose'),
    Library = require('../models/Library')
    
module.exports = {
    index: function(req,res){
        Library.find({}, function(err, libraries){
            if(err) res.json(err)
            res.json(libraries)
        })
    },
    
    show: function(req,res){
        Library.findOne({_id: req.params.id})
        .populate('resources')
        .exec(function(err,library){
            if(err) res.json(err)
            res.json(library)
        })
    },
    create: function(req,res){
        var library = new Library(req.body.library)
        library.save(function(err,lib){
            if(err) res.json(err)
            res.json(lib)
        })
    },
    
    createResource: function(req,res){
        console.log(req.body)
        // var newResource = new Library()
        Library.findOne({_id: req.params.id})
        .exec(function(err,library){
            if(err) res.json(err)
            if(req.body)
            {
                
                library.resources.push(req.body)
                library.save(function(err,lib){
                    if(err) res.json(err)
                    res.json(lib)
                })
            }
            else
            {
                res.json(library)
            }
            
        })
    },
    removeResource: function(req,res){
        // var newResource = new Library()
        Library.update({_id: req.params.id}, {$pull: {resources:{_id: req.body.id}}},function(err,library){
            res.json(library)
        })

    }
}