import Product from "../models/product.model.js"

export const getProducts = async(req, res) => {
    try {
       const products = await Product.find({})
        res.status(200).json({success: true, data: products})
    } catch(error) {
        console.log('Error in fetching products', error.message)
        res.status(500).json({success: false, message: 'Products not found'})
    }
}

export const createProduct = async (req, res) => {

    const product = req.body // user will send this data

    // check fields 
    if(!product.name || !product.price || !product.image) {
        return res.status(400).json({success: false, message: "Please provide all fields"})
    }

    // create new product
    const newProduct  = new Product(product)

    //save to database
    try {
        await newProduct.save();
        res.status(201).json({success: true, data: newProduct})
    } catch(error) {
        console.error(`Error in creating product:`, error.message );
        res.status(500).json({success: false, message: "Sever Error"})
    }
}

export const updateProduct = async(req, res) => {
    const {id} = req.params;
    const updateData = req.body;
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, updateData, {new: true})

        if(!updatedProduct) {
            res.status(404).json({status: false, message: 'Product not found'})
        }

        res.status(200).json({success: true, data: updatedProduct})
    } catch(error){
        console.log('Error in updating product', error.message)
        res.status(500).json({success: false, message: "Server Error"})
    }
}

export const deleteProduct = async(req, res) => {
    const {id} = req.params

    try {
        await Product.findByIdAndDelete(id)
        res.status(200).json({success: true, message: 'Product deleted'})
    } catch(error) {
        console.log('Error in deleting product', error.message)
        res.status(404).json({status:false, message:'Product not found'})
    }
}