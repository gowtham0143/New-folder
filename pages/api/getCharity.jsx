import Charity from '@/models/Charitys';
import connectDb from '@/middleware/dbConnect';

const handler = async (req, res) => {
    let charitys = await Charity.find({ isDeleted: 0 }).select('-createdAt -updatedAt -isDeleted');
    res.status(200).json({ charitys });
}

export default connectDb(handler);