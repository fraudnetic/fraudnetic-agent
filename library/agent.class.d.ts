export default class Agent {
    private static getFontsList;
    static getCanvasFingerprint(): string;
    static getFontsFingerprint(): number;
    static getWebGLFingerprint(): number;
    static isIncognito(): Promise<boolean>;
    static getUserAgent(): string;
    static getPeriodicWaveFingerprint(): Promise<number>;
    static getBrowserFingerprint(): Promise<number>;
}
