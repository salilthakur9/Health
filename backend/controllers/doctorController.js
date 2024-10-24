import doctorModel from '../models/doctorModel.js';
import mongoose from 'mongoose';

const changeAvailability = async (req, res) => {
    try {
        const { docId } = req.body;

        // Validate docId
        if (!docId || !mongoose.Types.ObjectId.isValid(docId)) {
            return res.status(400).json({ success: false, message: "Invalid Doctor ID" });
        }

        // Find the doctor by ID
        const docData = await doctorModel.findById(docId);
        
        // Check if the doctor was found
        if (!docData) {
            return res.status(404).json({ success: false, message: "Doctor not found" });
        }

        // Toggle the availability
        await doctorModel.findByIdAndUpdate(docId, { available: !docData.available });
        
        // Respond with success message
        res.json({ success: true, message: "Availability changed" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

export { changeAvailability };
