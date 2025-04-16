// Define the HttpClient interface
export interface HttpClient {
    get<T>(url: string, options?: RequestInit): Promise<T>;
}

// Implement the defaultHttpClient using fetch
export const defaultHttpClient: HttpClient = {
    async get<T>(url: string, options?: RequestInit): Promise<T> {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json() as Promise<T>;
    }
};

// Usage example
// defaultHttpClient.get<MyType>('https://api.example.com/data')
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error)); 