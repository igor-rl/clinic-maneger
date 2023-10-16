import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.getStatus();

    // Considerando que o startTime é definido no começo da requisição
    const diff = process.hrtime(request.startTime);
    const durationInMilliseconds = diff[0] * 1000 + diff[1] * 1e-6;

    const errorResponse = {
      status: {
        code: status,
        message: exception.message,
        timestamp: new Date(),
        path: request.url,
        method: request.method,
      },
      errors: exception.getResponse(),
      meta: {
        requestDuration: `${durationInMilliseconds}ms`,
      },
    };

    response.status(status).json(errorResponse);
  }
}
