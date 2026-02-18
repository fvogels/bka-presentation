abstract class Status<T> {
  abstract getType(): string;
}

class Loading<T> extends Status<T> {
  constructor() { }
  getType(): string { return 'Loading'; }
}

class Success<T> extends Status<T> {
  constructor(public readonly value: T) { }
  getType(): string { return 'Success'; }
}

class Failure<T> extends Status<T> {
  constructor(public readonly tag: ErrorTag,
              public readonly details: string) { }
  getType(): string { return 'Failure'; }
}
