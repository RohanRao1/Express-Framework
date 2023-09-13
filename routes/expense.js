const express = require('express')

const expController = require('../controllers/expense')


const router = express.Router()

router.post("/user/add-expense", expController.postExpense);

router.get("/user/get-expense", expController.getExpenses);

router.delete("/user/delete-expense/:expenseId", expController.deleteExpense);

// router.put("/user/update-expense/:expenseId", expController.);

module.exports = router