import { connect } from 'mongoose';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig({ path: new URL('.', import.meta.url).pathname + '../.env' });

// Connect to MongoDB
connect(process.env.DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      console.error('Error connecting to MongoDB:', err);
    });

    export default connect;