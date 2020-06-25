import { FS } from "@types/emscripten";

// interface FS {
//     ignorePermissions: boolean;
//     trackingDelegate: any;
//     tracking: any;
//     genericErrors: any;

//     //
//     // paths
//     //
//     lookupPath(path: string, opts: any): FS.Lookup;
//     getPath(node: FS.FSNode): string;

//     //
//     // nodes
//     //
//     isFile(mode: number): boolean;
//     isDir(mode: number): boolean;
//     isLink(mode: number): boolean;
//     isChrdev(mode: number): boolean;
//     isBlkdev(mode: number): boolean;
//     isFIFO(mode: number): boolean;
//     isSocket(mode: number): boolean;

//     //
//     // devices
//     //
//     major(dev: number): number;
//     minor(dev: number): number;
//     makedev(ma: number, mi: number): number;
//     registerDevice(dev: number, ops: any): void;

//     //
//     // core
//     //
//     syncfs(populate: boolean, callback: (e: any) => any): void;
//     syncfs(callback: (e: any) => any, populate?: boolean): void;
//     mount(type: Emscripten.FileSystemType, opts: any, mountpoint: string): any;
//     unmount(mountpoint: string): void;

//     mkdir(path: string, mode?: number): any;
//     mkdev(path: string, mode?: number, dev?: number): any;
//     symlink(oldpath: string, newpath: string): any;
//     rename(oldpath: string, newpath: string): void;
//     rmdir(path: string): void;
//     readdir(path: string): any;
//     unlink(path: string): void;
//     readlink(path: string): string;
//     stat(path: string, dontFollow?: boolean): any;
//     lstat(path: string): any;
//     chmod(path: string, mode: number, dontFollow?: boolean): void;
//     lchmod(path: string, mode: number): void;
//     fchmod(fd: number, mode: number): void;
//     chown(path: string, uid: number, gid: number, dontFollow?: boolean): void;
//     lchown(path: string, uid: number, gid: number): void;
//     fchown(fd: number, uid: number, gid: number): void;
//     truncate(path: string, len: number): void;
//     ftruncate(fd: number, len: number): void;
//     utime(path: string, atime: number, mtime: number): void;
//     open(path: string, flags: string, mode?: number, fdstart?: number, fdend?: number): FS.FSStream;
//     close(stream: FS.FSStream): void;
//     llseek(stream: FS.FSStream, offset: number, whence: number): any;
//     read(stream: FS.FSStream, buffer: ArrayBufferView, offset: number, length: number, position?: number): number;
//     write(stream: FS.FSStream, buffer: ArrayBufferView, offset: number, length: number, position?: number, canOwn?: boolean): number;
//     allocate(stream: FS.FSStream, offset: number, length: number): void;
//     mmap(stream: FS.FSStream, buffer: ArrayBufferView, offset: number, length: number, position: number, prot: number, flags: number): any;
//     ioctl(stream: FS.FSStream, cmd: any, arg: any): any;
//     readFile(path: string, opts?: { encoding?: "binary" | "utf8"; flags?: string }): string | Uint8Array;
//     writeFile(path: string, data: string | ArrayBufferView, opts?: { flags?: string }): void;

//     //
//     // module-level FS code
//     //
//     cwd(): string;
//     chdir(path: string): void;
//     init(
//         input: null | (() => number | null),
//         output: null | ((c: number) => any),
//         error: null | ((c: number) => any),
//     ): void;

//     createLazyFile(parent: string | FS.FSNode, name: string, url: string, canRead: boolean, canWrite: boolean): FS.FSNode;
//     createPreloadedFile(parent: string | FS.FSNode, name: string, url: string,
//         canRead: boolean, canWrite: boolean, onload?: () => void, onerror?: () => void, dontCreateFile?: boolean, canOwn?: boolean): void;
// }
declare interface LibFaust extends EmscriptenModule {
    cwrap(name: string, type: string, args: string[]): (...args: any[]) => any;
    UTF8ArrayToString(u8Array: number[], ptr: number, maxBytesToRead?: number): string;
    stringToUTF8Array(str: string, outU8Array: number[], outIdx: number, maxBytesToWrite: number): number;
    UTF8ToString(ptr: number, maxBytesToRead?: number): string;
    stringToUTF8(str: string, outPtr: number, maxBytesToRead?: number): void;
    lengthBytesUTF8(str: string): number;
    allocateUTF8(str: string): number;
    UTF16ToString(ptr: number): string;
    stringToUTF16(str: string, outPtr: number, maxBytesToRead?: number): void;
    lengthBytesUTF16(str: string): number;
    UTF32ToString(ptr: number): string;
    stringToUTF32(str: string, outPtr: number, maxBytesToRead?: number): void;
    lengthBytesUTF32(str: string): number;
    // Undocumented Promise-like, has issue in https://github.com/emscripten-core/emscripten/issues/5820
    // then(func: (module: any) => any): LibFaust;
    FS: FS;
}
declare function FaustModule(FaustModule: LibFaust, ...args: any[]): LibFaust;
export class LibFaustLoader {
    static load(wasmLocation: string, dataLocation: string): Promise<LibFaust>;
}
