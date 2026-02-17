interface Visitor<T, R> {
  visitLoading(): R ;
  visitSuccess(t: T): R;
  visitFailure(tag: ErrorTag, details: string): R;
}
class Loading<T> extends Status<T> {
  accept<R>(visitor: Visitor<T, R>): R {
    return visitor.visitLoading();
  }
}
class Success<T> extends Status<T> {
  accept<R>(visitor: Visitor<T, R>): R {
    return visitor.visitSuccess(this.value);
  }
}
class Failure<T> extends Status<T> {
  accept<R>(visitor: Visitor<T, R>): R {
    return visitor.visitFailure(this.tag, this.details);
  }
}
