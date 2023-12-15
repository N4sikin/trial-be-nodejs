const db = require('../config/database');
const {v4: uuid} = require('uuid');
const { format } = require('date-fns');
const sha256 = require('../utils/encrypt');
const query = require('../utils/query');

const getAllUsers = () => {
    const SQLQuery = query.SelectSQL('user');
    return db.execute(SQLQuery);
};

const getDetailUser = (id) => {
    const SQLQuery = query.SelectSQL('user', `Where id_user = '${id}'`);
    return db.execute(SQLQuery);
};

const createNewUser = (data) => {
    const id = uuid();
    const currentDate = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
    const encryprtPass = sha256(data.password);
    const values = { id_user: id, nama: data.nama, email: data.email, password: encryprtPass, created_date: currentDate, created_by: id, modified_date: currentDate, modified_by: id };
    const SQLQuery = query.InsertSQL('user', values);
    
    return db.execute(SQLQuery);
};

const updateUser = async (data, id) => {
    const queryGetDetailUser = query.SelectSQL('user', `Where id_user = '${id}'`);
    const [rows] = await db.execute(queryGetDetailUser);
    const currentDate = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
    const values = { id_user: id, nama: data.nama, email: data.email, password: rows[0].password, created_date: format(rows[0].created_date, 'yyyy-MM-dd HH:mm:ss'), created_by: rows[0].created_by, modified_date: currentDate, modified_by: rows[0].modified_by };
    const SQLQuery = query.UpdateSQL('user', values, `id_user = '${id}'`);
    await db.execute(SQLQuery);
    return await db.execute(queryGetDetailUser);
};

const deleteUser = (id) => {
    const SQLQuery = query.DeleteSQL('user', `id_user = '${id}'`);
    return db.execute(SQLQuery);
};

module.exports = {
    getAllUsers,
    createNewUser,
    getDetailUser,
    updateUser,
    deleteUser
};