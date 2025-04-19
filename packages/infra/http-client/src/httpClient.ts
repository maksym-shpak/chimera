export interface HttpClient {
    get<T>(url: string, options?: RequestInit): Promise<T>;
}

export const defaultHttpClient: HttpClient = {
    async get<T>(url: string, options?: RequestInit): Promise<T> {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json() as Promise<T>;
    }
};
