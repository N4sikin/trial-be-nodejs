// externalFunctions.js

// Function to generate SQL INSERT statement
const InsertSQL = (tableName, data) => {
    const columns = Object.keys(data).join(', ');
    const values = Object.values(data).map(value => typeof value === 'string' ? `'${value}'` : value).join(', ');

    return `INSERT INTO ${tableName} (${columns}) VALUES (${values});`;
};

// Function to generate SQL UPDATE statement
const UpdateSQL = (tableName, data, condition) => {
    const setClause = Object.entries(data).map(([key, value]) => `${key} = ${typeof value === 'string' ? `'${value}'` : value}`).join(', ');

    return `UPDATE ${tableName} SET ${setClause} WHERE ${condition};`;
};

// Function to generate SQL DELETE statement
const DeleteSQL = (tableName, condition) => {
    return `DELETE FROM ${tableName} WHERE ${condition};`;
};

// Function to generate SQL SELECT statement
const SelectSQL = (tableName, condition = '') => {
    return `SELECT * FROM ${tableName} ${condition};`;
};

module.exports = {
    InsertSQL,
    UpdateSQL,
    DeleteSQL,
    SelectSQL,
};
