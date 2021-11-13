import Nconf from 'nconf';
import config from './defaults';

/**
 * loads the config according to the defaults and the environment
 * @type {void}
 */
function loadConfig(): void {
  const conf: Nconf.Provider = Nconf.argv().env();
  const envtype: string | undefined = conf.get('NODE_ENV');

  if (envtype) Nconf.overrides({ store: config[envtype] });

  const defaultConfig: any = config.default;
  Nconf.defaults({ store: defaultConfig });
  console.log(Nconf.get());
}

export default loadConfig();
