import Restaurant from '../models/Restaurant.js';

export const getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find().select('-menu');
    res.json(restaurants);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

export const getRestaurantById = async (req, res) => {
  try {
    const { id } = req.params;
    const restaurant = await Restaurant.findById(id);

    if (!restaurant) {
      return res.status(404).json({ error: 'Restaurant not found' });
    }

    res.json(restaurant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};
