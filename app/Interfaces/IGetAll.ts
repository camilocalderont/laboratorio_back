export interface IGetAll<T> {
  getAll(): Promise<T[]>;
}
