module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define("User", {
      email: {
        allowNull: false,
        type: DataTypes.STRING
      },
      username: {
        allowNull: false,
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING
      }
    },
    );
    return User;
  };
  
  