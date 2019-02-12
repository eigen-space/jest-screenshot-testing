// Your file needs to be clean of any root level import or exports.
// That would turn the file into a module and disconnect it from the global type declaration namespace.
// More : https://basarat.gitbooks.io/typescript/content/docs/project/modules.html
export {};

declare global {
    namespace NodeJS {
        import MockInstance = jest.MockInstance;


        interface Global {
            fetch: MockInstance<any>;
        }
    }
}