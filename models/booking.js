'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, Room}) {
      // define association here
      Booking.Users = Booking.belongsTo(User, {foreignKey: 'guest_id'}) // Можно без левой части от равно
      Booking.Rooms = Booking.belongsTo(Room, {foreignKey: 'room_id'}) // Можно без левой части от равно
    }
  }
  Booking.init({
    guest_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    room_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Rooms',
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
    modelName: 'Booking',
  });
  return Booking;
};
