import { FileDescriptor } from './types';
import { flatten } from './utility';
import { writeFile } from './file';

/**
 * Writes an SCSS file that contains token variables
 *
 * @param filename - name of file to be created
 * @param file -  a single FileDescriptor item generated by getFileDescriptors
 * @param importedModule - module data
 * @param sep - separator string between prefix and key
 */
const writeSassFile = (
  filename: string,
  file: FileDescriptor,
  importedModule: any,
  sep: string
) => {
  let tokenItems: Record<string, any>;
  let output = '';

  Object.entries(importedModule.default).forEach(([section]) => {
    tokenItems = flatten(importedModule.default[section]);
    // core needs !default everywhere
    const defaultInclude = file.baseName.includes('core') ? ' !default' : '';

    Object.entries(tokenItems).forEach(([name, value]) => {
      // global objects in themes are not prefixed by the token type
      name = section === 'global' ? name : `${section}${sep}${name}`;
      output += `$${name}: ${value}${defaultInclude};\n`;
    });
  });

  if (output.length > 0) {
    writeFile(filename, output);
  }
};

/**
 * Accepts an array of file descriptors generated by getFileDescriptors('path')
 * and writes their imported data to filesystem as SCSS files to /dist
 *
 * @param fileDescriptors - An array of fileDescriptors generated by getFileDescriptors
 * @returns An exit code based on success writing output
 */
export const exportScssVars = (fileDescriptors: FileDescriptor[], outPath: string): number => {
  fileDescriptors.forEach((file) => {
    const importedModule = require(`${file.moduleImportName}`);
    // component files do not need a separator
    const sep = file.baseName.includes('component') ? '' : '-';

    const fn = `${outPath}/${file.baseName}-tokens.scss`;
    writeSassFile(fn, file, importedModule, sep);
  });

  return 0;
};

export default exportScssVars;
