import {ToolTip} from "./tool-tip";
import {FileSliceUploader} from "./file-slice-uploader";
import Vue from "vue";

export interface InstallationOptions {
    locale: any,
    i18n: any,
    size: string
}

export function install(vue: typeof Vue, options: InstallationOptions): void

export class SyToolTip extends ToolTip {
}

export class SyFileSliceUploader extends FileSliceUploader {
}