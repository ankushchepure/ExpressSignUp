const { check, validationResult } = require('express-validator');
exports.validateUser = [
    check('firstName')
        .not()
        .isEmpty()
        .withMessage('First Name is required.'),
    check('lastName')
        .not()
        .isEmpty()
        .withMessage('Last Name is required.'),
    check('email')
        .not()
        .isEmpty()
        .withMessage('Email is required.'),
    check('password')
        .not()
        .isEmpty()
        .withMessage('password is required.')
        .isLength({ min: 8 })
        .withMessage('At leat 8 characters required!')
]