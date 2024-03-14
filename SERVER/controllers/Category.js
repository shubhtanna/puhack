import {Category} from "../models/Category.js"
import { respond } from '../utils/response.js';

export const createCategory = async(req,res)=>{
    try{
        const {categoryName} = req.body;

        if(!categoryName){
            return respond(res,"category name is not mentioned",404,false);
        }
        
        const category = Category.create({categoryName});

        return respond(res,"Categories added successfully",200,true,categoryName);

    }catch(error){
        console.log("Error in creating category : ",error);
        return respond(res,"Error while creating category",500,false);
    }
}


export const updateCategory = async(req,res)=>{
    try{

        const {categoryId,categoryName} = req.body;

        if(!categoryId){
            return respond(res,"update category",404,false);
        }

        await Category.findByIdAndUpdate(categoryId,{
            categoryName: categoryName
        },
        {new : true});
        
        return respond(res,"Update category ",200,true,categoryName);
       
    }catch(error){
        console.log("Error in creating category : ",error);
        return respond(res,"Error while update category",500,false);
    }
}

export const deleteCategory = async(req,res)=>{
    try{
        const {categoryId} = req.body;

        await Category.findByIdAndDelete({_id : categoryId});
        

        return respond(res,"delete category ",200,true);


    }catch(error){
        console.log("Error in deleting category : ",error);
        return respond(res,"Error while deleting category",500,false);

    }
}

export const getAllCategory = async(req,res) => {
    try {

        const allCategory = await Category.find({});

        return res.status(200).json({
            success:true,
            message:"all category frtched successfully",
            allCategory
        })
    } catch {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"All category not found",
            error:error.message
        })
    }
}
