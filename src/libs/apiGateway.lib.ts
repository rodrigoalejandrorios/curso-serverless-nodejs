import { HttpStatus } from "../shared/infrastructure/constants/http-status";

export const formatJSONResponse = <T>({
    response,
    statusCode,
  }: {
    response: T;
    statusCode: keyof typeof HttpStatus;
  }) => {
    return {
      statusCode: HttpStatus[statusCode],
      body: JSON.stringify(response),
    };
  };
  