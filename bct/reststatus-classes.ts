type ErrorTag = 'NoSuchItem' | 'NoSuchUser';

abstract class Status<T> { }

class Loading<T> extends Status<T> {
  constructor() { super(); }
}

class Success<T> extends Status<T> {
  constructor(public readonly value: T) { super(); }
}

class Failure<T> extends Status<T> {
  constructor(public readonly tag: ErrorTag,
              public readonly details: string) {
    super();
  }
}