const DEFAULT_CONTENT_TYPE = 'application/json';

type HttpRequest<T> = {
  method: string;
  content_type?: string;
  uri?: string;
  data?: T;
};

export default async function httpRequest<T>({ method, uri, data, content_type = DEFAULT_CONTENT_TYPE }: HttpRequest<T>): Promise<T> {
  const options: RequestInit = {
    method: method,
    headers: {
      'Content-Type': content_type
    }
  };
  if (data) {
    options.body = JSON.stringify(data);
  }
  const response = await fetch(`${process.env.NEXTAUTH_URL as string}/${uri}`, options);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json() as Promise<T>;
}

