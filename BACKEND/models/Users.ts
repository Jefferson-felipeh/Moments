import { Model, Sequelize, DataTypes } from "sequelize";
import { UserAttributes } from "../interfaces/UserAttributes ";

export class User extends Model<UserAttributes> implements UserAttributes{
    public id?: number;
    public name!: string;
    public email!: string;
    public age!: number;
    public password!: string;
    public created_at!: Date;
    public updated_at!: Date;
}

export default(sequelize: Sequelize) => {
    User.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Date.now(),
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Date.now()
        }
    }, {
        sequelize,
        tableName: "Users",
        timestamps: true
    });

    return User;
};