const server = require('./src/app');
const {conn} = require('./src/db.js');
const PORT = process.env.PORT || 3001;

conn.sync({ alter: true }).then(async () => {
    try {

        server.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
        });

    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});