'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Booking, Hotel}) {
      // define association here
      Room.Bookings = Room.hasMany(Booking, {foreignKey: 'id'}) // Можно без левой части от равно
      Room.Hotels = Room.belongsTo(Hotel, {foreignKey: 'hotel_id'}) // Можно без левой части от равно
    }
  }
  Room.init({
    rate: {
      allowNull: true,
      type: DataTypes.INTEGER
    },
    number: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    hotel_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Hotels',
        key: 'id',
      },
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Room',
  });
  return Room;
};
