import { UseCaseError } from 'src/core/errors/use-case-error';

export class NotEnoughOptionsError extends Error implements UseCaseError {
  constructor() {
    super('Not enough options error');
  }
}
