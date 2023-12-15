const userModels = require('../models/user');

const getAllUsers = async (req, res) => {
    try {
        const [rows] = await userModels.getAllUsers();
        res.json({
            data: rows
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            serverMessage: error
        }) 
    }
};

const getDetailUser = async (req, res) => {
    const {id} = req.params;
    try {
        const [rows] = await userModels.getDetailUser(id);
        res.json({
            data: rows
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            serverMessage: error
        }) 
    }
};

const createNewUser = async (req, res) => {
    const {body} = req;
    try {
        await userModels.createNewUser(body);
        res.json({
            message: "Add new user success",
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            serverMessage: error
        }) 
    }
};

const updateUser = async (req, res) => {
    const {id} = req.params;
    const {body} = req;
    try {
        const [result] = await userModels.updateUser(body, id);
        res.json({
            message: "Update user success",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            serverMessage: error
        }) 
    }
};

const deleteUser = async (req, res) => {
    const {id} = req.params;
    try {
        const [result] = await userModels.deleteUser(id);
        const { affectedRows } = result;
        if (affectedRows > 0) {
            res.json({
                message: "Delete user success"
            })
        } else {
            res.json({
                message: "No Data removed"
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            serverMessage: error
        }) 
    }
};

module.exports = {
    getAllUsers,
    createNewUser,
    getDetailUser,
    updateUser,
    deleteUser
}