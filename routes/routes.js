const router = require('express').Router();
const MainControllers = require('../controllers/MainControllers');

router.get('/',MainControllers.Home.home);
//Portfolio Sender
router.get('/api/projects', MainControllers.Portfolio.sendPortfolio);
//Email Sender
router.post('/sendEmail',MainControllers.EmailSender.emailSender);
//User API
router.get('/users', MainControllers.UserControllers.showPerson);
router.post('/register', MainControllers.UserControllers.registerUser);

module.exports = router;