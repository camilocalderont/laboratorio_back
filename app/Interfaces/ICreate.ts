export interface ICreate<T> {
  create(data: Partial<T>): Promise<T>;
}
