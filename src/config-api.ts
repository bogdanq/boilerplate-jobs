export const initialApis = [];

const initialApi = {};

export const configureApi = (baseApi: any, apis = []) => {
  return apis.reduce(
    (acc, Api: any) => ({
      ...acc,
      [Api.apiName]: new Api(baseApi),
    }),
    initialApi,
  );
};
