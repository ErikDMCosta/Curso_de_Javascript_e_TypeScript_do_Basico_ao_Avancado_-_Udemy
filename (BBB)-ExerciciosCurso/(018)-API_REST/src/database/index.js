import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';

const modls = [Aluno];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.int(connection))
