import {
  addExternalTransaction,
  getExternalTransaction,
} from '../controller/externalTransactionController.js';

const router = express.Router();

router.post('/external-transactions', addExternalTransaction);
router.get('/external-transactions',  getExternalTransaction);

export default router;
