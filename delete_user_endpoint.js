app.delete('/api/profile/:user_id', async (req, res) => {
    const userId = req.params.user_id;

    try {
        // Delete user profile data from the database based on userId
        const deleteResult = await db('users').where('id', userId).del();

        if (deleteResult === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json({ message: 'User profile deleted successfully' });
    } catch (error) {
        console.error('Error deleting user profile:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
