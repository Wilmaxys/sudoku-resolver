import colors from 'colors/safe';
import { createLogger, format, transports, Logger } from 'winston';
const { combine, timestamp, printf, splat } = format;

/**
 * Array of string to obfuscate in log
 */
const stringsToObfuscate: Array<any> = [];

export const obfuscateStringInLog = (...strings: string[]) =>
  strings
    ?.filter((string) => string.trim())
    .forEach((string) => stringsToObfuscate.push(string));

export const logObfuscation = (log: string) => {
  if (Object.prototype.toString.call(log) === '[object String]') {
    let logToObfuscate = log?.slice();
    logToObfuscate.replaceAll &&
      stringsToObfuscate.forEach((string) => {
        logToObfuscate = logToObfuscate?.replaceAll(string, '********');
      });
    return logToObfuscate;
  }
  return log;
};

const logObfuscationFormat = format((info) => {
  JSON.parse(JSON.stringify(info)) &&
    (info = JSON.parse(logObfuscation(JSON.stringify(info))));
  return info;
});

const infoLogFormat = printf(({ message }) => {
  const date = `[${new Date().toLocaleTimeString()}]`;
  return `${colors.gray(date)}\t${message}`;
});

const warnLogFormat = printf(({ message }) => {
  const date = `[${new Date().toLocaleTimeString()}]`;
  return `${colors.gray(date)}\t🚨 ${colors.yellow(message)}`;
});

const errorLogFormat = printf(({ message }) => {
  const date = `[${new Date().toLocaleTimeString()}]`;
  return `${colors.red(date)}\t🔥 ${colors.red(message)}`;
});

export const logger = createLogger({
  transports: [
    new transports.Console({
      level: 'info',
      format: combine(
        format((info) => (info.level !== 'info' ? false : info))(),
        format.simple(),
        logObfuscationFormat(),
        splat(),
        infoLogFormat
      )
    }),
    new transports.Console({
      level: 'error',
      format: combine(format.simple(), logObfuscationFormat(), errorLogFormat)
    })
  ]
});

export const initializeLogger = () => {
  [
    new transports.Console({
      level: 'warn',
      format: combine(
        format((info) => (info.level !== 'warn' ? false : info))(),
        format.simple(),
        logObfuscationFormat(),
        warnLogFormat
      )
    }),
    new transports.File({
      level: 'error',
      format: combine(
        format((info) => (info.level !== 'error' ? false : info))(),
        format.simple(),
        logObfuscationFormat(),
        timestamp(),
        format.json()
      ),
      filename: `${process.cwd()}/logs/output.log`
    }),
    new transports.File({
      level: 'debug',
      format: combine(
        format((info) => {
          return info.level !== 'debug' ? false : info;
        })(),
        format.simple(),
        logObfuscationFormat(),
        timestamp(),
        format.json()
      ),
      filename: `${process.cwd()}/logs/output.log`
    })
  ].forEach((transport) => logger.add(transport));
};
