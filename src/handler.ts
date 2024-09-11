import { APIGatewayProxyEvent } from "aws-lambda";
import { ErrorCatch, formatJSONResponse } from "./libs/apiGateway.lib";

export const sayHello = async (event: APIGatewayProxyEvent) => {
  try {
    return formatJSONResponse({
      response: {
        say: "hello!",
      },
      statusCode: "CREATED",
    });
  } catch (error) {
    return formatJSONResponse<ErrorCatch>({
      response: {
        errorName: error.name,
        errorMessage: error.message,
        internalErrorCode: "USER",
      },
      statusCode: "INTERNAL_SERVER_ERROR",
    });
  }
};
