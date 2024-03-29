export default class Agent {
    static getTimeZone(): number;
    static isFirefox(): boolean;
    private static getAvailableResolution;
    private static getColorDepth;
    static getCurrentResolution(): string;
    static isFunctionNative(func: (...args: unknown[]) => unknown): boolean;
    static countTruthy(values: unknown[]): number;
    static isSafariWebKit(): boolean;
    static isWebKit616OrNewer(): boolean;
    static isWebKit(): boolean;
    private static getScreenPrint;
    private static getFontsList;
    private static getTextWidth;
    static getFontFingerprint(): string;
    static getDetailedWebGLReport(): string;
    static getCanvasFingerprint(): string;
    static getFontsFingerprint(): number;
    static getWebGLFingerprint(): number;
    static isIncognito(): Promise<boolean>;
    static getAudioFingerprint(): Promise<string>;
    static getPeriodicWaveFingerprint(): Promise<number>;
    /**
     * @see https://gitlab.torproject.org/legacy/trac/-/issues/13018
     * @see https://bugzilla.mozilla.org/show_bug.cgi?id=531915
     */
    static getMathFingerprint(): number;
    static getBrowserFingerprint(): Promise<number>;
}
