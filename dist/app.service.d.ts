export declare class AppService {
    transformFilePath(filePath: string): string;
    getFileExtension(filename: string): string;
    getFilePath(fileName: string): string;
    private searchFileInDir;
    extractFileNameFromUrl(fullUrl: string): string;
}
