import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';

@Injectable()
export class SuccessInterceptor<T> implements NestInterceptor<T, IHttpResponse<T>> {
  intercept(context: ExecutionContext, next: CallHandler<T>): Observable<IHttpResponse<T>> {
    const start = process.hrtime();
    return next.handle().pipe(
      map((data: any) => {
        const httpContext = context.switchToHttp();
        const request = httpContext.getRequest();
        const isGetRequest = request.method === 'GET';
        const diff = process.hrtime(start);
        const durationInMilliseconds = diff[0] * 1000 + diff[1] * 1e-6;
        const response: IHttpResponse<T> = {
          status: {
            code: request.method === 'POST' ? 201 : 200,
            message: request.method === 'POST' ? 'Created' : 'OK',
            timestamp: new Date(),
            path: request.url,
            method: request.method,
          },
        };
        if (isGetRequest && data.total !== undefined) {
          const basePath = `${request.protocol}://${request.get('host')}${request.baseUrl}`;
          response.meta = {
            requestDuration: `${durationInMilliseconds}ms`,
            pagination: {
              total: data.total,
              results: data.results.length,
              page: +data.page,
              lastPage: data.lastPage,
            }
          };
          if (data.page > 1) {
            response.meta.pagination.prev = `${basePath}?page=${+data.page - 1}&limit=${data.results.length}`;
          }
          if (data.page < data.lastPage) {
            response.meta.pagination.next = `${basePath}?page=${+data.page + 1}&limit=${data.results.length}`;
          }
          delete data.total;
          delete data.page;
          delete data.lastPage;
        }
        response.data = data.results || data;
        return response;
      }),
    );
  }
}

