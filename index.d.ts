declare class Fraudnetic {
    constructor();
    printDevelopment(): Promise<void>;
    init(isDevelopment?: boolean, withVersion?: boolean): Promise<unknown>;
}
declare const fraudnetic: Fraudnetic;
export default fraudnetic;
