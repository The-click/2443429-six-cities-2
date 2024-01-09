import { CliCommandInterface } from './cli-command.interface.js';
import { TSVFileReader } from '../file-reader/index.js';

export default class ImportCommand implements CliCommandInterface {
  public readonly name = '--import';

  public execute(...parameters: string[]): void {
    const [filename] = parameters;
    const fileReader = new TSVFileReader(filename.trim());

    try {
      fileReader.read();
      console.log(fileReader.toArray());
    } catch (err) {
      if (!(err instanceof Error)) {
        throw err;
      }

      console.error(`Can't import data from file: ${filename}`);
      console.error(`Details: ${err.message}`);
    }
  }
}
