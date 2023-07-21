import bcrypt from 'bcrypt';
import { ExceptionHandler, HttpError } from '../utils/helpers';
import jwt from 'jsonwebtoken';
import { getUserByEmail, createUser, User, updateUser } from '@my-page/prisma-client';
import { StatusCode } from '../utils/constants';

export class AuthenticationService {

  private saltRounds = 10;
  private Bcrypt = bcrypt;
  private JWT = jwt;
  private exceptionHandler = new ExceptionHandler();
  private jwtSecretKey = process.env.JWT_SECRET_KEY as string;

  private generateHashPassword(password: string) {
    return this.exceptionHandler.handleException(async () => {
      const hash = await this.Bcrypt.hash(password, this.saltRounds);

      return hash;
    });
  }

  private comparePassword(password: string, hash: string) {
    return this.exceptionHandler.handleException<boolean>(async () => {
      const result = await this.Bcrypt.compare(password, hash);

      return result;
    });
  }

  private generateToken(id: string, email: string, expiresIn?: string) {
    const token = this.JWT.sign({email, id}, this.jwtSecretKey, { expiresIn: expiresIn || '7d' });

    return token;
  }

  verifyToken(token: string) {
    const decoded = this.JWT.verify(token, this.jwtSecretKey);

    return decoded;
  }
  
  createUser(newUser: User) {
    return this.exceptionHandler.handleException(async () => {
      const { password, email } = newUser;
      const hash = await this.generateHashPassword(password);
      const user = await getUserByEmail(email);

      if (user) {
        throw new HttpError('User already exists', StatusCode.BAD_REQUEST);
      }

      const result = await createUser({
        email,
        password: hash,
      });

      return result;
    });
  }

  loginUser(user: User) {
    return this.exceptionHandler.handleException(async () => {
      const { email, password } = user;
      const existingUser = await getUserByEmail(email);

      if (!existingUser) {
        throw new HttpError('Login error', StatusCode.BAD_REQUEST);
      }

      const result = await this.comparePassword(password, existingUser.password);

      if (!result) {
        throw new HttpError('Login error', StatusCode.BAD_REQUEST);
      }

      const token = this.generateToken(String(existingUser.id), existingUser.email);

      return token;
    });
  }

  forgotPassword(email: string) {
    return this.exceptionHandler.handleException(async () => {
      const existingUser = await getUserByEmail(email);

      if (!existingUser) {
        throw new HttpError('Forgot password error', StatusCode.BAD_REQUEST);
      }

      const token = this.generateToken(String(existingUser.id), existingUser.email, '60s');

      return token;
    });
  }

  resetPassword(password: string, token: string) {
    return this.exceptionHandler.handleException(async () => {
      const { email, id } = this.verifyToken(token) as { email: string; id: string };

      if (!email) {
        throw new HttpError('Reset password error', StatusCode.BAD_REQUEST);
      }
      
      const hash = await this.generateHashPassword(password);
      const user = await getUserByEmail(email);

      if (user) {
        const result = await updateUser(Number(id), {
          email: user.email,
          password: hash,
        });

        return result;
      }

    });
  }

}