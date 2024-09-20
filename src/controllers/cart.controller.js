import { homeOwner } from '../models/homeOwner.model.js';
import { interiorDesigner } from '../models/interiorDesigner.model.js';
import { Product } from '../models/products.model.js'

// Adding a product to user's cart
export const getUsersCart = async (req, res) => {

    const { userId } = req.params;
    let user = await homeOwner.findById(userId).populate({ path: 'cart', options: { sort: { createdAt: -1 } } }) ||
        await interiorDesigner.findById(userId).populate({ path: 'cart', options: { sort: { createdAt: -1 } } });

    if (!user) {
        return res.status(404).json({ message: 'User not found', code: 'USER_NOT_FOUND' });
    }

    return res.status(200).json({ cart: user.cart });
};




// Adding a product to user's cart
export const addProductToCart = async (req, res) => {

    const { productId, userId } = req.params;
    let user = await homeOwner.findById(userId) || await interiorDesigner.findById(userId);

    if (!user) {
        return res.status(404).json({ message: 'User not found', code: 'USER_NOT_FOUND' });
    }

    // Add product to cart
    user.cart.push(productId);

    await user.save();

    return res.status(200).json({ message: 'Added to cart', user });

};



// Adding a product to user's cart
export const deleteProductFromCart = async (req, res) => {

    const { productId, userId } = req.params;
    // Check if the user exists as either a homeowner or designer
    let user = await homeOwner.findById(userId) || await interiorDesigner.findById(userId);

    if (!user) {
        return res.status(404).json({ message: 'User not found', code: 'USER_NOT_FOUND' });
    }

    // Use $pull to remove the product from the cart array
    await user.updateOne({ $pull: { cart: productId } });

    return res.status(200).json({ message: 'Product removed from cart' });

};



