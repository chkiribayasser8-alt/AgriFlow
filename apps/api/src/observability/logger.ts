import pino from 'pino';
import pinoHttp from 'pino-http';

const pinoInstance = pino({
  transport: process.env.NODE_ENV === 'development' ? { target: 'pino-pretty' } : undefined,
  level: process.env.LOG_LEVEL ?? 'info'
});

export const httpLogger = pinoHttp({
  logger: pinoInstance,
  customSuccessMessage: () => 'request completed',
  customErrorMessage: () => 'request errored'
});

