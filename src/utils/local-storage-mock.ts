
class LocalStorageMock {
    public store: any = {};

    public clear(): void {
        this.store = {};
    }

    public getItem(key: string): any | null {
        return this.store[key] || null;
    }

    public setItem(key: string, value: any): void {
        this.store[key] = value.toString();
    }

    public removeItem(key: string): void {
        delete this.store[key];
    }
}

export default new LocalStorageMock()