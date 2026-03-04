import { DataTypes } from 'sequelize';

async function up({context: QueryInterface}) {
  await QueryInterface.createTable('customers', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    idNumber: { type: DataTypes.STRING,  allowNull: false  },
    fullname: { type: DataTypes.STRING, allowNull: false},
    email: { type: DataTypes.STRING, allowNull: false},
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }    
  });
}

async function down({context: QueryInterface}) {
  await QueryInterface.dropTable('customers');
}

export { up, down }
