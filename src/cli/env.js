const RSS_PREFIX = 'RSS_';
const ENV_LIST_SEPARATOR = '; ';

const parseEnv = () => {
  const rssEnvKeys = Object.keys(process.env).filter((key) => key.startsWith(RSS_PREFIX));

  console.log(rssEnvKeys.map((key) => `${key}=${process.env[key]}`).join(ENV_LIST_SEPARATOR));
};

parseEnv();
