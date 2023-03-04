import {readdirSync} from "fs";

/**
 * 读取文件夹下文件名
 * @param path 文件夹路径
 */
export function readDir(path: string): string[] {
    return readdirSync(path)
}