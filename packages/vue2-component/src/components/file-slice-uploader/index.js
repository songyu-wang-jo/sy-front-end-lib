import SyFileSliceUploader from './src/file-slice-uploader.vue'

SyFileSliceUploader.install = function(Vue) {
    Vue.component(SyFileSliceUploader.name, SyFileSliceUploader);
};

export default SyFileSliceUploader;