app.get('/api/profile/:user_id', async (req, res) => {
    const userId = req.params.user_id;

    try {
        // Fetch user profile data from the database based on userId
        const user = await db('users').where('id', userId).first();

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(user);
    } catch (error) {
        console.error('Error retrieving user profile:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
