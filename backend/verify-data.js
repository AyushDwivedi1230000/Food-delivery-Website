import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Restaurant from './models/Restaurant.js';
import connectDB from './config/db.js';

dotenv.config();

const verifyData = async () => {
  try {
    await connectDB();

    const count = await Restaurant.countDocuments();
    console.log(`\n✅ Total restaurants in database: ${count}\n`);

    const restaurants = await Restaurant.find({}, 'name cuisine menu location rating');
    
    console.log('📋 Restaurant List:');
    console.log('='.repeat(80));
    
    restaurants.forEach((restaurant, index) => {
      console.log(`\n${index + 1}. ${restaurant.name} (${restaurant.cuisine})`);
      console.log(`   Location: ${restaurant.location} | Rating: ${restaurant.rating} ⭐`);
      console.log(`   Menu Items: ${restaurant.menu.length}`);
      console.log(`   Sample Items: ${restaurant.menu.slice(0, 3).map(item => item.name).join(', ')}`);
    });

    console.log('\n' + '='.repeat(80));
    console.log(`\n✅ Database verification complete!`);
    console.log(`Total menu items across all restaurants: ${restaurants.reduce((sum, r) => sum + r.menu.length, 0)}\n`);
    
    process.exit(0);
  } catch (error) {
    console.error('Error verifying data:', error);
    process.exit(1);
  }
};

verifyData();
