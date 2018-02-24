const orm = require('../config/orm.js');


const burger = {

  all: function(callback) {
    orm.selectAll('burgers', callback);
  },

  create: function(burgerText, callback) {
    orm.insertOne('burgers', 'burger_name', burgerText, callback);
  },

  update: function(devoured, id, callback) {
    orm.updateOne('burgers', 'devoured', devoured, id, callback);
  }

}

module.exports = burger;