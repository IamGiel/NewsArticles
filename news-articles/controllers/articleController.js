// const db = require("../models");

// module.exports = {
//   findAll: function(req,res){
// 		db.Article
// 		.find(req.query)
// 		.sort({date: -1})
// 		.then(dbModel => res.json(dbModel)) //?
// 		.catch(err => res.status(422).json(err)) //422?
//   },
//   findById: function(re, res){
// 		db.Article
// 		.findById(req.params.id)
// 		.then(dbModel => res.json(dbModel))
// 		.catch(err => res.status(422).json(err))
// 	},
//   create: function(req, res){
// 		db.Article
// 		.create(req.body)
// 		.then(dbModel => res.json(dbModel))
// 		.catch(err => res.status(422).json(err))
// 	},
//   update: function(req,res){
// 		db.Article
// 		.findOneAndUpdate({ _id: req.params.id }, req.body)
// 		.then(dbModel => res.json(dbModel))
// 		.catch(err => res.status(422).json(err))
// 	},
//   remove: function(req,res) {
// 		db.Article
// 		.findById({ _id: req.params.id})
// 		.then(dbModel => dbModel.remove())
// 		.then(dbModel => res.json(dbModel))
// 		.catch(err => res.status(422))
// 	}
// };

const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Article
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Article
      .findOneAndUpdate({articleId: req.body._id}, {
        articleId: req.body._id,
        title: req.body.headline.main,
        date: req.body.pub_date,
        url: req.body.web_url,
        author: req.body.byline.original || "Unknown"}, {upsert: true})
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log(err));
  },
  remove: function(req, res) {
    db.Article
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log(err));
  }
};
