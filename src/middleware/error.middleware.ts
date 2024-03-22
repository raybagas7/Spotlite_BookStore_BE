import { NextFunction, Request, Response } from 'express';
import { QueryFailedError } from 'typeorm';

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof QueryFailedError) {
    console.log(error);

    // Handle QueryFailedError (duplicate key violation)
    return res.status(400).json({ message: 'Email already exists' });
  }
  console.error(`Error: ${error.message}`);
  return res.status(500).json({ message: 'Internal server error' });
};
