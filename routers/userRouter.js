import { Router } from "express";
import {
  getApplicationStats,
  getCurrentUser,
  updateUser,
} from "../controllers/userController.js";
import { validateUpdateUserInput } from "../middleware/validationMiddleware.js";
import { authorizePermissiions } from "../middleware/authMiddleware.js";
const router = Router();

router.get("/current-user", getCurrentUser);
router.get('/admin/app-stats', [
  authorizePermissiions('admin'),
  getApplicationStats,
]);
router.patch("/update-user", validateUpdateUserInput, updateUser);

export default router;