const Tween = {
    /*
        4个参数
        t：current  time（当前时间）
        b：beginning  value（初始值）
        c： change  in  value（变化量）
        d：duration（持续时间）
        return  （目标点）
    */
    linear: function (t, b, c, d) { //匀速
        return c * t / d + b;
    },
    easeIn: function (t, b, c, d) { //加速曲线
        return c * (t /= d) * t + b;
    },
    easeOut: function (t, b, c, d) { //减速曲线
        return -c * (t /= d) * (t - 2) + b;
    },
    easeBoth: function (t, b, c, d) { //加速减速曲线
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t + b;
        }
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    },
    easeInStrong: function (t, b, c, d) { //加加速曲线
        return c * (t /= d) * t * t * t + b;
    },
    easeOutStrong: function (t, b, c, d) { //减减速曲线
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    },
    easeBothStrong: function (t, b, c, d) { //加加速减减速曲线
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t * t * t + b;
        }
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    }
}

const cssHasUnitList = ['width', 'height', 'top', 'bottom', 'left', 'right', 'opacity', 'fontSize'];

const cssPlainList = ['zIndex']

let getStyle = (element, attr) => {
    return element.currentStyle ? element.currentStyle[attr] : getComputedStyle(element)[attr];
}

let getTimeNow = () => {
    return (new Date()).getTime();
}


export default (element, attrJson, duration, easing = 'easeIn', cb = () => {}) => {
    //存储当前的初始属性
    let currentAttr = {};
    for (let attr in attrJson) {
        currentAttr[`${attr}`] = 0;
        if (cssHasUnitList.includes(`${attr}`) || cssPlainList.includes(`${attr}`)) {
            if (attr === 'opacity') {
                currentAttr[`${attr}`] = Math.round(parseFloat(getStyle(element, attr)) * 100);
            } else {
                // let cuurentVal = parseInt(getStyle(element, attr));
                currentAttr[`${attr}`] = parseInt(getStyle(element, attr));
            }
        } else {
            currentAttr[`${attr}`] = element[`${attr}`]
        }
    }

    //初始时间
    let startTime = getTimeNow();

    clearInterval(element.timer);

    element.timer = setInterval(() => {
        let startMoveTime = getTimeNow()
        let currentTime = duration - Math.max(0, startTime - startMoveTime + duration);
        for (let attr in attrJson) {
            let values = Tween[`${easing}`](
                currentTime,
                currentAttr[`${attr}`],
                attrJson[`${attr}`] - currentAttr[`${attr}`],
                duration
            );
            if (cssHasUnitList.includes(`${attr}`)) {
                if (attr === 'opacity') {
                    element.style[`${attr}`] = parseFloat(values / 100);
                    element.style.filter = `alpha(opacity:${values})`;
                } else {
                    element.style[`${attr}`] = `${values}px`;
                }
            } else if (cssPlainList.includes(`${attr}`)) {
                element.style[`${attr}`] = values;
            } else {
                element[`${attr}`] = values;
            }
            if (currentTime >= duration) {
                clearInterval(element.timer);
                cb & cb();
            }
        }
    }, 10);
}