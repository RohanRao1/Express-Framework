const Expense = require('../models/expense')

exports.postExpense = async (req, res) => {
    try {
        if (!req.body.amount || !req.body.description || !req.body.category){
            throw new Error('Fill all Fields')
        }
      const amount = req.body.amount 
    const description = req.body.description
    const category = req.body.category

    const data = await Expense.create({
        amount : amount,
        description : description,
        category : category  
    })
    res.status(201).json({ newExpenses : data});  
    } 
    catch(err) {
        console.log(err)
        res.status(500).json({
          error: err,
        });
    } 
}

exports.getExpenses = async(req, res) => {
    try {
        const data = await Expense.findAll()
    res.status(200).json({allExpenses : data})
    }
    catch(err) {
        console.log(err)
        res.send(err)
    }
}

exports.deleteExpense = async(req,res) => {
    try {
        const expId = req.params.expenseId
    await Expense.destroy({where : {
        id : expId
    }})
    res.sendStatus(200)
    }
    catch(err) {
        console.log(err)
        res.status(500).json(err)
    }   
}