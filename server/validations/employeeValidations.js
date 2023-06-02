import { body, validationResult } from 'express-validator';

// Validate employee input
export const validateEmployeeInput = [
  body('firstName').notEmpty().withMessage('First name is required'),
  body('lastName').notEmpty().withMessage('Last name is required'),
  body('age').isInt({ min: 16 }).withMessage('Age must be at least 18'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export default {
  validateEmployeeInput,
};
