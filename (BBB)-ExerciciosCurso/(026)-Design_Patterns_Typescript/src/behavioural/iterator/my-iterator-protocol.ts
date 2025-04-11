export interface MyIteratorProtocol<T> extends Iterator<unknown> {
  reset(): void;
}
