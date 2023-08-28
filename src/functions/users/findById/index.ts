import { handlerPath } from '@libs/handler-resolver';

export const findById = {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'users/findById/{id}',
      },
    },
  ],
};
