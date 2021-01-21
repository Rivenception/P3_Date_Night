module.exports = function (sequelize, DataTypes) {
  const Blog = sequelize.define("Blog",
    {
      user: {
        allowNull: false,
        type: DataTypes.STRING
      },
      date: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      blog: {
        allowNull: false,
        type: DataTypes.STRING(5000),
      },
    },
    {
      timestamps: false
    });
  return Blog;
};
