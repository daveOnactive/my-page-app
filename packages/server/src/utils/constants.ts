export enum StatusCode {
  SUCCESS = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

export enum ErrorMessage {
  BAD_REQUEST = 'Bad Request',
  UNAUTHORIZED = 'Unauthorized',
  FORBIDDEN = 'Forbidden',
  NOT_FOUND = 'Not Found',
  INTERNAL_SERVER_ERROR = 'Internal Server Error',
}

export enum SuccessMessage {
  
}

export const ENDPOINT_ENTRY = '/app';