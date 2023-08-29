import { APIGatewayProxyEvent } from "aws-lambda";
import { formatJSONResponse } from "../../../libs/apiGateway.lib";
import { container } from "../../../config/inversify.config";
import { UserFindAll } from "../../applications/find-all/findAll.use-case";
import { UserFindById } from "../../applications/find-by-id/findById.use-case";

export const findAll = async (_event: APIGatewayProxyEvent) => {
  try {
    const users = container.get<UserFindAll>(UserFindAll).execute()
    return formatJSONResponse({
      response: [...users],
      statusCode: "OK",
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const findById = async (event: APIGatewayProxyEvent) => {
  try {
    const user = container.get<UserFindById>(UserFindById).execute(event.pathParameters!.id!)
    return formatJSONResponse({
      response: user,
      statusCode: "OK",
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
};

