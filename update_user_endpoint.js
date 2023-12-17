app.put('/api/profile/:user_id', async (req, res) => {
    const userId = req.params.user_id;
    const updatedProfileData = req.body;

    try {
        // Update user profile data in the database based on userId
        const updateResult = await db('users').where('id', userId).update(updatedProfileData);

        if (updateResult === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json({ message: 'User profile updated successfully' });
    } catch (error) {
        console.error('Error updating user profile:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
