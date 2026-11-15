import { ImporterOutputFieldType, SheetRow } from '../../types';
import { UniqueValidatorDefinition } from '../types';
import { Validator } from './base';

export class UniqueValidator extends Validator {
  seen: Set<ImporterOutputFieldType>;

  caseInsensitive: boolean;

  getKey: UniqueValidatorDefinition['getKey'];

  constructor(definition: UniqueValidatorDefinition) {
    super(definition);
    this.caseInsensitive = definition.caseInsensitive || false;
    this.getKey = definition.getKey;
    this.seen = new Set();
  }

  private comparableValue(fieldValue: ImporterOutputFieldType) {
    if (Array.isArray(fieldValue)) {
      const sorted = [...fieldValue].sort();
      return this.caseInsensitive
        ? JSON.stringify(sorted.map((v) => v.toLocaleLowerCase()))
        : JSON.stringify(sorted);
    }
    if (this.caseInsensitive && typeof fieldValue === 'string') {
      return fieldValue.toLocaleLowerCase();
    }
    return fieldValue;
  }

  isValid(fieldValue: ImporterOutputFieldType, row: SheetRow) {
    let value = fieldValue;
    if (this.getKey) {
      const key = this.getKey(fieldValue, row);
      if (key == null || key === '') {
        return;
      }
      value = key;
    }

    const comparableValue = this.comparableValue(value);
    if (this.seen.has(comparableValue)) {
      return this.definition.error || 'validators.unique';
    }
    this.seen.add(comparableValue);
  }
}
