export interface IFind<T> {
  find(id: number): Promise<T | null>;
}
