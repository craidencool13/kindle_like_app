import Constants from './Constants';
import {DEBUG, PROD} from './Endpoints';

export const getEnvironment = () => {
  return Constants.ENVIRONMENT;
};

export const getEnvironmentApi = () => {
  return getEnvironment() === Constants.DEBUG
    ? Constants.DEBUG_API
    : Constants.PROD_API;
};

export const getEndpoint = identifier => {
  return getEnvironment() === Constants.DEBUG
    ? DEBUG[identifier]
    : PROD[identifier];
};
