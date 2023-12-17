app.post('/api/meal-logs', async (req, res) => {
    const { userId, date_time, food_items, nutritional_information } = req.body;

    try {
        // Insert the new meal log into the database
        const newMealLog = await db('meal_logs').insert({
            user_id: userId,
            date_time: date_time, // Use the provided date and time
            food_items: food_items,
            nutritional_information: nutritional_information,
        }).returning('*'); // Return the inserted meal log

        res.json(newMealLog[0]); // Respond with the created meal log
    } catch (error) {
        console.error('Error creating meal log:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
