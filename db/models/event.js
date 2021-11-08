'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  };
  Event.init({
    title: DataTypes.STRING,
    desc: DataTypes.TEXT,
    imgUrl: DataTypes.STRING //add this line (don't forget the comma above!)
  }, {
    sequelize,
    modelName: 'Event',
    tableName: 'Events'
  });
  Event.associate = function(models) {
    Event.hasMany(models.Rsvp);
  };
  return Event;
};