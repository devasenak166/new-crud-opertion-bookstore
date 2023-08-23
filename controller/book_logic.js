import books from "../model/book_store.js"
export const getAllbooks= (req,res)=>{
    books.find().then((books)=>res.status(200).json({message:"Success",books:books})).catch((err)=>console.log(err))
   
}
export const addBooks=(req,res)=>{
    const newBook=new books(req.body).save().then(()=>res.status(200).json({success:true,message:"Books added successfully"})).catch((err)=>console.log(err))
}
export const getBookbyid=(req,res)=>{
    const {id} =req.params;
    books.findById(id).then((book)=>res.status(200).json({message:"success",book})).catch((error)=>console.log(error))
}
export const updateBookdetails=(req,res)=>{
const {id}=req.params;
const{name,author,description,price,available}=req.body
books.findByIdAndUpdate(id,{
    name,
    author,
    description,
    price,
    available
},  { new: true }).then((book)=>res.status(200).json({message:"Book updated successfully done ",book:book})).catch((err)=>console.log(err));
}
export const deleteBook=(req,res)=>{
    const {id}=req.params;
    books.findByIdAndRemove(id).then(()=>res.status(200).json({message:"success"})).catch((err)=>console.log(err))
}