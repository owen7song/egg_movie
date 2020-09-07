/**
 *
 *
 * @export
 * @param {node} element
 * @param {string} attr
 * @param {any} val
 * @returns attr
 */
export function elmentAttr(element, attr, val) {
    if (val) {
        element.setAttribute(attr, val);
    } else {
        return element.getAttribute(attr);
    }
}


/**
 *
 *
 * @export
 * @param {string} expr
 * @returns NODE 当前选中的元素
 */
export function queryElement(expr) {
    return document.querySelector(expr);
}

/**
 *
 *
 * @export
 * @param {string} expr
 * @returns NODELIST node元素集合
 */
export function queryElementAll(expr) {
    return document.querySelectorAll(expr);
}


/**
 *
 *
 * @export
 * @param {node} element
 * @returns {object} 距离页面的距离
 */
export function getOffset(element) {
    let top = 0;
    let left = 0;
    while (element !== null) {
        if (element.offsetLeft || element.offsetTop) {
            top += element.offsetTop;
            left += element.offsetLeft;
        }
        element = element.parentNode;
    }
    return {
        top: top,
        left: left
    }
}


/**
 *
 *
 * @export
 * @param {el} element
 * @param {boolean} hasBorder
 * @returns number 元素高度
 */
export function outerHeight(element, hasBorder) {
    return hasBorder ? element.offsetHeight : element.client.clientHeight;
}


/**
 *
 *
 * @export
 * @param {el} element
 * @param {boolean} hasBorder
 * @returns number 元素宽度
 */
export function outerWidth(element, hasBorder) {
    return hasBorder ? element.offsetHeight : element.client.clientHeight;
}



/**
 *
 *
 * @export
 * @param {el} element
 * @param {string} className
 * @returns boolean 是否含有当前类名
 */
export function hasClass(element, className) {
    let classNames = element.className.split(' ');
    return classNames.includes(className);
}