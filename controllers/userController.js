const User = require('../models/Data');

exports.getUsers = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const users = await User.find()
      .skip((page - 1) * limit)
      .limit(Number(limit));
    const total = await User.countDocuments();

    res.json({ data: users, total });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getGenderStats = async (req, res) => {
  try {
    const stats = await User.aggregate([
      { $group: { _id: '$gender', count: { $sum: 1 } } }
    ]);

    res.json({ data: stats });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
