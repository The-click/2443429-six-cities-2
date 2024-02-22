export interface FileReaderInterface {
  read(): void;
  readonly filename: string;
}
