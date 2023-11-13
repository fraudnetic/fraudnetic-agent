declare class Fraudnetic {
    constructor();
    printDevelopment(): Promise<void>;
    init(isDevelopment?: boolean, withVersion?: boolean): Promise<string | {
        version: string;
        encoded: string;
    }>;
}
declare const fraudnetic: Fraudnetic;
export default fraudnetic;
