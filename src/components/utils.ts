export function getValueOnStorage(key: string) {
    const storage = window.sessionStorage;
    if (!storage) return;

    try {
        const value = storage.getItem(key);

        if (value === null) return;

        return JSON.parse(value);
    } catch (error) {
        console.error(error);
    }
}
export function setValueToStorage(key: string, value: unknown) {
    const storage = window.sessionStorage;
    if (!storage) return;

    try {
        const stringValue = JSON.stringify(value);

        storage.setItem(key, stringValue);
    } catch (error) {
        console.error(error);
    }
}
