interface IHttpResponse<T> {
  status: {
    code: number;
    message: string;
    timestamp: Date;
    path: string;
    method: string;
  };
  meta?: {
    requestDuration?: string;
    pagination?: {
      total: number;
      results: number;
      page: number;
      lastPage: number;
      prev?: string;
      next?: string;
    };
    [key: string]: any;
  };
  errors?: {
    code: string;
    title: string;
    detail: string;
    source?: {
      pointer: string;
      parameter?: string;
    };
    [key: string]: any;
  }[];
  data?: T;
}
