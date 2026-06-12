import app from './app';
import { env } from './config/env';
import { logger } from './utils/logger';

app.listen(env.PORT, () => {
    console.log(`Server running on port ${env.PORT}`);
});

logger.info(`Server running on port ${env.PORT}`);