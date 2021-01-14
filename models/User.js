module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define("User", {
    //   location: {
    //     allowNull: false,
    //     type: DataTypes.STRING
    //   },
    //   instructions: {
    //     allowNull: false,
    //     type: DataTypes.STRING(5000)
    //   },
    //   budget: {
    //     type: DataTypes.STRING,
    //   },
    //   items: {
    //     type: DataTypes.STRING,
    //   },
    //   links: {
    //     type: DataTypes.STRING,
    //   }
    },
    {
      timestamps: false
    });
    return User;
  };
  
  