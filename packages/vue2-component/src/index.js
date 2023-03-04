import SyToolTip from './components/tool-tip'
import SyFileSliceUploader from './components/file-slice-uploader'

const components = [
    SyToolTip,
    SyFileSliceUploader
]

const install = function (Vue, option) {
    components.forEach(component => {
        Vue.component(component.name, component);
    })
}

export default {
    install,
    SyToolTip,
    SyFileSliceUploader
}