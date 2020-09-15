import mongoose from 'mongoose';

const FoodSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    unit_cost: {
        type: Number,
        number: true
    },
    cooking_duration: {
        type: Number,
        required: true
    },
    unit: {
        type: String,
        required: true
    },
    images: [
        {
            type: String,
            required: true
        }
    ],
    rating: {
        type: Number,
        max: 5,
        default: 0
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }
});

FoodSchema.index({
    name: 'text'
});
const Food = mongoose.model('Food', FoodSchema);

export default Food;