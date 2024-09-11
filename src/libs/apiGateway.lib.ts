import { HttpStatus } from "../constants/http-status";

export interface ErrorCatch {
  errorName: string;
  errorMessage: string;
  internalErrorCode: string;
}
export type lambdaResponse = {
  statusCode: number;
  headers: Record<string, unknown>;
  body: string;
};

export const formatJSONResponse = <T>({
  response,
  statusCode,
}: {
  response: T;
  statusCode: keyof typeof HttpStatus;
}) => {
  return {
    statusCode: HttpStatus[statusCode],
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify(response),
  };
};
