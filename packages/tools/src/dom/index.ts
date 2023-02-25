/**
 * 创建 HTML DOM 节点
 * @param tag html 标签名
 * @param attr 标签属性对象
 * @param innerHTML 标签内部 HTML
 */
export function createHTML(tag: string, attr?: object, innerHTML?:string): HTMLElement {
    const element = document.createElement(tag);
    Object.keys(attr).forEach(key => {
        element.setAttribute(key, attr[key]);
    })
    element.innerHTML = innerHTML;
    return element;
}