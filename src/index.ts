export const DEFAULT_BASE_URL = "https://formeler.com/api"
export const API_VERSION = "2025-11-12";

export interface IResponse {
    result: "success" | "failed";
}

export interface IFailedResponse extends IResponse {
    status: number;
    message: string;
}

export interface IDetectResponse extends IResponse {
    language: string;
    tokenCount: number;
}

export interface IBatchDetectResponse extends IResponse {
    languages: string[];
    tokenCount: number;
}

export class LangID {
    private apiKey: string;
    private baseUrl: string;

    constructor(apiKey: string, baseUrl: string = DEFAULT_BASE_URL) {
        this.apiKey = apiKey;
        this.baseUrl = baseUrl;
    }

    async detect(text: string): Promise<IDetectResponse> {
        const postData = JSON.stringify({text});
        const response = await fetch(`${this.baseUrl}/${API_VERSION}/langid/detect`, {method: "POST", headers: {authorization: this.apiKey, "content-type": "application/json"}, body: postData});
        if (response.status == 200)
            return (await response.json()) as IDetectResponse;
        const error = (await response.json()) as IFailedResponse;
        error.status = response.status;
        throw error;
    }

    async batchDetect(texts: string[]): Promise<IBatchDetectResponse> {
        const postData = JSON.stringify({texts});
        const response = await fetch(`${this.baseUrl}/${API_VERSION}/langid/batch-detect`, {method: "POST", headers: {authorization: this.apiKey, "content-type": "application/json"}, body: postData});
        if (response.status == 200)
            return (await response.json()) as IBatchDetectResponse;
        throw <IFailedResponse>{result: "failed", status: response.status, message: response.statusText};
    }
}

export class Formeler {
    readonly langID: LangID;

    constructor(apiKey: string, baseUrl: string = DEFAULT_BASE_URL) {
        this.langID = new LangID(apiKey, baseUrl);
    }
}