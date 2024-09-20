import mongoose from 'mongoose';
import Product from './models/products.model.js';


// MongoDB connection
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://som:muscle090@decorvistacluster.4h62d.mongodb.net/?retryWrites=true&w=majority&appName=decorvistacluster', { // Replace with your MongoDB connection string
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection failed', err);
        process.exit(1);
    }
};


// Product data
const productData = [
    {
        productName: 'Elegant Sofa',
        category: 'Furniture',
        brand: 'Modern Comfort',
        price: 1200,
        description: 'A comfortable and stylish sofa perfect for living rooms.',
        image: 'https://cdn.decorilla.com/images/1200x740/2d8bb3bd-f143-4d72-b9fb-f39b1b5a484e/Glam-Elegant-Home-Interior-Design-Rendering.jpg?cv=1',
    },
    {
        productName: 'Dining Table',
        category: 'Furniture',
        brand: 'WoodenCraft',
        price: 750,
        description: 'A wooden dining table that accommodates 6 people.',
        image: 'https://cdn.decorilla.com/images/1200x740/2d8bb3bd-f143-4d72-b9fb-f39b1b5a484e/Glam-Elegant-Home-Interior-Design-Rendering.jpg?cv=1',
    },
    {
        productName: 'Office Chair',
        category: 'Furniture',
        brand: 'ErgoTech',
        price: 300,
        description: 'An ergonomic office chair with lumbar support.',
        image: 'https://cdn.decorilla.com/images/1200x740/2d8bb3bd-f143-4d72-b9fb-f39b1b5a484e/Glam-Elegant-Home-Interior-Design-Rendering.jpg?cv=1',
    },
    {
        productName: 'Recliner Sofa',
        category: 'Furniture',
        brand: 'RelaxHub',
        price: 850,
        description: 'A plush recliner sofa for maximum comfort.',
        image: 'https://cdn.decorilla.com/images/1200x740/2d8bb3bd-f143-4d72-b9fb-f39b1b5a484e/Glam-Elegant-Home-Interior-Design-Rendering.jpg?cv=1',
    },
    {
        productName: 'Coffee Table',
        category: 'Furniture',
        brand: 'GlassWorks',
        price: 250,
        description: 'A modern glass coffee table.',
        image: 'https://cdn.decorilla.com/images/1200x740/2d8bb3bd-f143-4d72-b9fb-f39b1b5a484e/Glam-Elegant-Home-Interior-Design-Rendering.jpg?cv=1',
    },
    {
        productName: 'Chandelier',
        category: 'Lighting',
        brand: 'BrightLight',
        price: 400,
        description: 'A luxurious chandelier for dining rooms.',
        image: 'https://cdn.decorilla.com/images/1200x740/2d8bb3bd-f143-4d72-b9fb-f39b1b5a484e/Glam-Elegant-Home-Interior-Design-Rendering.jpg?cv=1',
    },
    {
        productName: 'Floor Lamp',
        category: 'Lighting',
        brand: 'GlowUp',
        price: 150,
        description: 'A contemporary floor lamp for living rooms.',
        image: 'https://cdn.decorilla.com/images/1200x740/2d8bb3bd-f143-4d72-b9fb-f39b1b5a484e/Glam-Elegant-Home-Interior-Design-Rendering.jpg?cv=1',
    },
    {
        productName: 'Desk Lamp',
        category: 'Lighting',
        brand: 'FocusLite',
        price: 70,
        description: 'A simple desk lamp with adjustable brightness.',
        image: 'https://cdn.decorilla.com/images/1200x740/2d8bb3bd-f143-4d72-b9fb-f39b1b5a484e/Glam-Elegant-Home-Interior-Design-Rendering.jpg?cv=1',
    },
    {
        productName: 'Ceiling Fan with Light',
        category: 'Lighting',
        brand: 'CoolBreeze',
        price: 250,
        description: 'A ceiling fan with an integrated light fixture.',
        image: 'https://cdn.decorilla.com/images/1200x740/2d8bb3bd-f143-4d72-b9fb-f39b1b5a484e/Glam-Elegant-Home-Interior-Design-Rendering.jpg?cv=1',
    },
    {
        productName: 'Wall Sconces',
        category: 'Lighting',
        brand: 'AmbientGlow',
        price: 100,
        description: 'Elegant wall sconces for soft lighting.',
        image: 'https://cdn.decorilla.com/images/1200x740/2d8bb3bd-f143-4d72-b9fb-f39b1b5a484e/Glam-Elegant-Home-Interior-Design-Rendering.jpg?cv=1',
    },
    {
        productName: 'Decorative Vase',
        category: 'Decor',
        brand: 'Artisan Pottery',
        price: 80,
        description: 'A handmade decorative vase.',
        image: 'https://cdn.decorilla.com/images/1200x740/2d8bb3bd-f143-4d72-b9fb-f39b1b5a484e/Glam-Elegant-Home-Interior-Design-Rendering.jpg?cv=1',
    },
    {
        productName: 'Wall Clock',
        category: 'Decor',
        brand: 'TimeStyle',
        price: 120,
        description: 'A large wall clock with a rustic finish.',
        image: 'https://cdn.decorilla.com/images/1200x740/2d8bb3bd-f143-4d72-b9fb-f39b1b5a484e/Glam-Elegant-Home-Interior-Design-Rendering.jpg?cv=1',
    },
    {
        productName: 'Throw Pillows',
        category: 'Decor',
        brand: 'ComfortCushion',
        price: 60,
        description: 'Set of 4 throw pillows in vibrant colors.',
        image: 'https://cdn.decorilla.com/images/1200x740/2d8bb3bd-f143-4d72-b9fb-f39b1b5a484e/Glam-Elegant-Home-Interior-Design-Rendering.jpg?cv=1',
    },
    {
        productName: 'Sculpture',
        category: 'Decor',
        brand: 'FineArts',
        price: 500,
        description: 'A contemporary art sculpture.',
        image: 'https://cdn.decorilla.com/images/1200x740/2d8bb3bd-f143-4d72-b9fb-f39b1b5a484e/Glam-Elegant-Home-Interior-Design-Rendering.jpg?cv=1',
    },
    {
        productName: 'Mirror',
        category: 'Decor',
        brand: 'Reflections',
        price: 300,
        description: 'A large wall mirror with a wooden frame.',
        image: 'https://cdn.decorilla.com/images/1200x740/2d8bb3bd-f143-4d72-b9fb-f39b1b5a484e/Glam-Elegant-Home-Interior-Design-Rendering.jpg?cv=1',
    },
    {
        productName: 'Persian Rug',
        category: 'Rugs and Carpets',
        brand: 'RoyalRugs',
        price: 1000,
        description: 'An authentic Persian rug made from wool.',
        image: 'https://cdn.decorilla.com/images/1200x740/2d8bb3bd-f143-4d72-b9fb-f39b1b5a484e/Glam-Elegant-Home-Interior-Design-Rendering.jpg?cv=1',
    },
    {
        productName: 'Shaggy Carpet',
        category: 'Rugs and Carpets',
        brand: 'SoftTouch',
        price: 450,
        description: 'A soft, plush shaggy carpet for bedrooms.',
        image: 'https://cdn.decorilla.com/images/1200x740/2d8bb3bd-f143-4d72-b9fb-f39b1b5a484e/Glam-Elegant-Home-Interior-Design-Rendering.jpg?cv=1',
    },
    {
        productName: 'Doormat',
        category: 'Rugs and Carpets',
        brand: 'WelcomeMat',
        price: 30,
        description: 'A durable doormat with a welcome message.',
        image: 'https://cdn.decorilla.com/images/1200x740/2d8bb3bd-f143-4d72-b9fb-f39b1b5a484e/Glam-Elegant-Home-Interior-Design-Rendering.jpg?cv=1',
    },
    {
        productName: 'Area Rug',
        category: 'Rugs and Carpets',
        brand: 'ModernWeave',
        price: 220,
        description: 'A stylish area rug for living rooms.',
        image: 'https://cdn.decorilla.com/images/1200x740/2d8bb3bd-f143-4d72-b9fb-f39b1b5a484e/Glam-Elegant-Home-Interior-Design-Rendering.jpg?cv=1',
    },
    {
        productName: 'Outdoor Rug',
        category: 'Rugs and Carpets',
        brand: 'PatioPerfect',
        price: 150,
        description: 'A weather-resistant rug for outdoor spaces.',
        image: 'https://cdn.decorilla.com/images/1200x740/2d8bb3bd-f143-4d72-b9fb-f39b1b5a484e/Glam-Elegant-Home-Interior-Design-Rendering.jpg?cv=1',
    },
    {
        productName: 'Abstract Painting',
        category: 'Wall Art',
        brand: 'Artistry',
        price: 300,
        description: 'An abstract painting in vibrant colors.',
        image: 'https://cdn.decorilla.com/images/1200x740/2d8bb3bd-f143-4d72-b9fb-f39b1b5a484e/Glam-Elegant-Home-Interior-Design-Rendering.jpg?cv=1',
    },
    {
        productName: 'Framed Photograph',
        category: 'Wall Art',
        brand: 'PicturePerfect',
        price: 120,
        description: 'A framed photograph of a serene landscape.',
        image: 'https://cdn.decorilla.com/images/1200x740/2d8bb3bd-f143-4d72-b9fb-f39b1b5a484e/Glam-Elegant-Home-Interior-Design-Rendering.jpg?cv=1',
    },
    {
        productName: 'Canvas Print',
        category: 'Wall Art',
        brand: 'GalleryWrap',
        price: 200,
        description: 'A canvas print of modern art.',
        image: 'https://cdn.decorilla.com/images/1200x740/2d8bb3bd-f143-4d72-b9fb-f39b1b5a484e/Glam-Elegant-Home-Interior-Design-Rendering.jpg?cv=1',
    },
    {
        productName: 'Metal Wall Sculpture',
        category: 'Wall Art',
        brand: 'MetalWorks',
        price: 450,
        description: 'A unique metal wall sculpture.',
        image: 'https://cdn.decorilla.com/images/1200x740/2d8bb3bd-f143-4d72-b9fb-f39b1b5a484e/Glam-Elegant-Home-Interior-Design-Rendering.jpg?cv=1',
    },
    {
        productName: 'Tapestry',
        category: 'Wall Art',
        brand: 'BohoVibes',
        price: 180,
        description: 'A bohemian-style wall tapestry.',
        image: 'https://cdn.decorilla.com/images/1200x740/2d8bb3bd-f143-4d72-b9fb-f39b1b5a484e/Glam-Elegant-Home-Interior-Design-Rendering.jpg?cv=1',
    },
    {
        productName: 'Sheer Curtains',
        category: 'Curtains and Blinds',
        brand: 'WindowElegance',
        price: 120,
        description: 'Sheer curtains that allow soft light through.',
        image: 'https://cdn.decorilla.com/images/1200x740/2d8bb3bd-f143-4d72-b9fb-f39b1b5a484e/Glam-Elegant-Home-Interior-Design-Rendering.jpg?cv=1',
    },
    {
        productName: 'Blackout Blinds',
        category: 'Curtains and Blinds',
        brand: 'NightShade',
        price: 180,
        description: 'Blackout blinds for complete darkness.',
        image: 'https://cdn.decorilla.com/images/1200x740/2d8bb3bd-f143-4d72-b9fb-f39b1b5a484e/Glam-Elegant-Home-Interior-Design-Rendering.jpg?cv=1',
    },
    {
        productName: 'Roman Shades',
        category: 'Curtains and Blinds',
        brand: 'ClassicLook',
        price: 150,
        description: 'Roman shades with a classic design.',
        image: 'https://cdn.decorilla.com/images/1200x740/2d8bb3bd-f143-4d72-b9fb-f39b1b5a484e/Glam-Elegant-Home-Interior-Design-Rendering.jpg?cv=1',
    },
    {
        productName: 'Velvet Curtains',
        category: 'Curtains and Blinds',
        brand: 'LuxuryDrapes',
        price: 200,
        description: 'Velvet curtains for a luxurious feel.',
        image: 'https://cdn.decorilla.com/images/1200x740/2d8bb3bd-f143-4d72-b9fb-f39b1b5a484e/Glam-Elegant-Home-Interior-Design-Rendering.jpg?cv=1',
    },
    {
        productName: 'Venetian Blinds',
        category: 'Curtains and Blinds',
        brand: 'WindowCharm',
        price: 140,
        description: 'Wooden Venetian blinds for a traditional look.',
        image: 'https://cdn.decorilla.com/images/1200x740/2d8bb3bd-f143-4d72-b9fb-f39b1b5a484e/Glam-Elegant-Home-Interior-Design-Rendering.jpg?cv=1',
    },
];

// Function to add products to the database
const addProducts = async () => {
    try {
        await Product.insertMany(productData);
        console.log('Products added successfully');
    } catch (err) {
        console.error('Error adding products:', err);
    } finally {
        mongoose.connection.close();
    }
};
// Connect to DB and insert products
connectDB().then(addProducts);