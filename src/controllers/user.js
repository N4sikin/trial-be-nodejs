const getAllUsers = (req, res) => {
    res.json({
        message: "Get user success"
    })
};

const createNewUser = (req, res) => {
    res.json({
        message: "Add new user success"
    })
};

module.exports = {
    getAllUsers,
    createNewUser
}