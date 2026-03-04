import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const Customer = sequelize.define('customers', {
    idNumber: { type: DataTypes.STRING,  allowNull: false  },
    fullname: { type: DataTypes.STRING, allowNull: false},
    email: { type: DataTypes.STRING, allowNull: false}
 }, {
    timestamps: true,
    freezeTableName: true
})

export default Customer
