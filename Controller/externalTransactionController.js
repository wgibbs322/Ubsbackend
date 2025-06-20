import ExternalTransaction from '../model/Addexternaltransaction.js';

export const addExternalTransaction = async (req, res) => {
  try {
    const { description, amount, balance, status } = req.body;

    const newTransaction = new ExternalTransaction({
      description,
      amount,
      balance,
      status,
    });

    await newTransaction.save();

    res.status(201).json({
      message: 'Transaction added successfully',
      transaction: newTransaction,
    });
  } catch (error) {
    console.error('Error adding transaction:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const getExternalTransaction = async (req, res) => {
  try {
    const transactions = await ExternalTransaction.find().sort({ createdAt: -1 });
    res.status(200).json(transactions);
  } catch (error) {
    console.error('Error fetching transactions:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
