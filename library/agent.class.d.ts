export default class Agent {
    private static getAvailableResolution;
    private static getColorDepth;
    private static getCurrentResolution;
    private static getScreenPrint;
    private static getFontsList;
    static getCanvasFingerprint(): string;
    static getFontsFingerprint(): number;
    static getWebGLFingerprint(): number;
    static isIncognito(): Promise<boolean>;
    static getUserAgent(): string;
    static getPeriodicWaveFingerprint(): Promise<number>;
    static getBrowserFingerprint(): Promise<number>;
}
