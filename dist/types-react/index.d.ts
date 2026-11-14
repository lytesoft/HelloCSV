import { default as Importer } from './importer';
import { ImporterDefinition } from './types';
import { OuterStateBuilder } from './importer/state';
export * from './types';
export default Importer;
export interface ImporterInstance {
    /** Re-renders the importer with new props, keeping its state. */
    render: (props: ImporterDefinition) => void;
    /** Removes the importer, its listeners and anything it rendered outside the element. */
    unmount: () => void;
}
export declare function renderImporter(element: HTMLElement, props: ImporterDefinition): ImporterInstance;
export { OuterStateBuilder as CsvImporterStateBuilder };
//# sourceMappingURL=index.d.ts.map