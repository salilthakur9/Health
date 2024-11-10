import doctorModel from '../models/doctorModel.js';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import appointmentModel from '../models/appointmentModel.js';

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

const doctorList = async (req, res) => {
    try {
        // Fetch doctors, excluding password and email
        const doctors = await doctorModel.find({}).select('-password -email');

        res.json({ success: true, doctors });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// api for doctor login:
const loginDoctor = async(req,res)=>{

    try {
        
        const {email, password} = req.body
        const doctor= await doctorModel.findOne({email})

        if(!doctor){
            return res.json({success:false, message:'invalid credentials'})
        }
        const isMatch = await bcrypt.compare(password, doctor.password)

        if(isMatch){
            const token = jwt.sign({id:doctor._id}, process.env.JWT_SECRET)

            res.json({success:true, token})
        }else{
            return res.json({success:false, message:'invalid credentials'})
        }
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

//api to get doctor appointments for doctor panel;
const appointmentsDoctor = async (req,res)=>{
    try {
        
        const {docId} = req.body
        const appointments = await appointmentModel.find({docId})

        res.json({success:true, appointments})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

//api to mark appointment completed for doc pannel:
const appointmentComplete = async (req, res)=>{
    try {
        
        const {docId, appointmentId} = req.body
        const appointmentData = await appointmentModel.findById(appointmentId)

        if(appointmentData && appointmentData.docId === docId){
            await appointmentModel.findByIdAndUpdate(appointmentId,{isCompleted:true})
            return res.json({success:true,message:'Appointment Completed'})
        }else{
            return res.json({success:false,message:'Mark Failed'})
        }
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}


//api to cancel appointment completed for doc pannel:
const appointmentCancel = async (req, res)=>{
    try {
        
        const {docId, appointmentId} = req.body
        const appointmentData = await appointmentModel.findById(appointmentId)

        if(appointmentData && appointmentData.docId === docId){
            await appointmentModel.findByIdAndUpdate(appointmentId,{cancelled:true})
            return res.json({success:true,message:'Appointment Cancelled'})
        }else{
            return res.json({success:false,message:'Cancellation Failed'})
        }
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

export { changeAvailability, doctorList, loginDoctor, appointmentsDoctor, appointmentCancel, appointmentComplete};
