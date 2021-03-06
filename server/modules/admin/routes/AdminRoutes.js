import {Router} from 'express';
import AdminController from "../controllers/AdminController";
import verify from "../../../middlewares/verify";
import {authorize} from '../../../middlewares/authorize';
import Roles from '../../../helpers/roles';
import {checkCache} from "../../../middlewares/cache";

const router = Router();
const {registerAdmin, updateProfile, uploadProfilePhoto, changePassword, getCooks, getCustomers} = AdminController;

router.post('/', registerAdmin);
router.get('/customers', [verify, authorize(Roles.Admin), checkCache], getCustomers);
router.get('/cooks', [verify, authorize(Roles.Admin), checkCache], getCooks);
router.put('/upload', verify, uploadProfilePhoto);
router.put('/password', verify, changePassword);
router.put('/', verify, updateProfile);

export default router;