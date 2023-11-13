export default class CanvasFingerprint {
    private canvas;
    private readonly context;
    imageNoised: boolean;
    constructor(imageNoised?: boolean);
    getFingerprint(): string;
}
