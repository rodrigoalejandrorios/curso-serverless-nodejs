import { formatJSONResponse } from "@libs/api-gateway";
import { APIGatewayProxyEvent, Context } from "aws-lambda";
import { container } from "src/config/inversify.config";
import { UserService } from "src/users/services/user.service";

export const main = async (event: APIGatewayProxyEvent, _context: Context) => {
  try {
    const { id } = event.pathParameters;
    const userService = container.get(UserService)
    return formatJSONResponse({
      result: userService.findById(id),
    });
  } catch (error) {
    return formatJSONResponse({
      error: error.message,
    });
  }
};

