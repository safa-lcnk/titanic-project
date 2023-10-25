import express from 'express';
const router = express.Router();

import HomeController from '../controllers/home.js';
import LoginController from '../controllers/login.js';
import { CreateUserController, LoginUserController } from '../controllers/user.js';
import DashboardController from '../controllers/dashboard.js';
import LogoutController from '../controllers/logout.js';

import AgeController from '../controllers/chart/age.js';
import ClassControler from '../controllers/chart/class.js';
import SexController from '../controllers/chart/sex.js';


import { authMiddleware } from '../middlewares.js';
import Passenger from '../Models/Passenger.js';

router.get('/', HomeController);
router.get('/login', LoginController);
router.get('/dashboard', authMiddleware, DashboardController);
router.get('/logout', LogoutController);

router.post('/', CreateUserController);
router.post('/login', LoginUserController);

// router.get('/sex', SexController);
router.get('/sex', async function(req, res, next) {
      try{
    const passengers = await Passenger.find();
    res.render('chart/sex', 
    {passengers : JSON.stringify(passengers)})
} catch(err){
    console.log(err)
}
});

router.get('/age', AgeController);


router.get('/class', ClassControler);

export default router;
