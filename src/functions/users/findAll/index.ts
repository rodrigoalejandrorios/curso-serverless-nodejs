import { handlerPath } from '@libs/handler-resolver';

export const findAll = {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'users/findAll',
      },
    },
  ],
};
