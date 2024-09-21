import { interiorDesigner } from '../models/interiorDesigner.model.js';

export const getDesigners = async (req, res) => {
    const AllDesigners=await interiorDesigner.find({})
    if(AllDesigners){
    res.status(201).json({  AllDesigners })
    }else{
        res.json({message:'No designer Available'})
    }
}
