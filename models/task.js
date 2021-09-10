module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    text: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    order: DataTypes.BIGINT
  }, {});
  return Task;
};