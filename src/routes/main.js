const router = require('express').Router();
const { index, contact,  about, admin, login, noEntry } = require('../controllers/mainController');
const accessAdmin = require('../middlewares/accessAdmin')
router
     .get('/', index)
     .get('/about', about)
     .get('/contact', contact)
     .get('/admin', accessAdmin, admin)
     .get('/login', login)
     .get('/no_entry', noEntry)

module.exports = router