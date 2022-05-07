window.addEventListener('load', () => {
    // 导入相关变量
    const pen = document.querySelector('.pen-img');
    const pen6 = document.querySelector('.pen6');
    const pen12 = document.querySelector('.pen12');
    const pen18 = document.querySelector('.pen18');
    const penColor = document.querySelector('.pen-color');
    const eraser = document.querySelector('.eraser-img');
    const eraser10 = document.querySelector('.eraser10');
    const eraser20 = document.querySelector('.eraser20');
    const eraser30 = document.querySelector('.eraser30');
    const clear = document.querySelector('.clear');
    const drawing = document.querySelector('#drawing');
    const ctx = drawing.getContext('2d');
    let currentPen = 'pen6';
    let penSize = 1;
    //监听鼠标在画板处按下
    drawing.onmousedown =  function (event) {
        //初始化设置
        ctx.strokeStyle = penColor.value;
        ctx.lineWidth = penSize;
        ctx.lineCap = "round"; //划线起始点圆形
        ctx.lineJoin = "round"; //划线拐点圆角
        if(currentPen === 'pen6' || currentPen === 'pen12' || currentPen === 'pen18') {
            ctx.globalCompositeOperation = "source-over";
        } else {
            ctx.globalCompositeOperation = "destination-out";
        }
        let x = event.pageX - drawing.offsetLeft;
        let y = event.pageY - drawing.offsetTop;
        ctx.beginPath();
        ctx.moveTo(x, y);
        drawing.onmousemove = function (event) {
            let x = event.pageX - drawing.offsetLeft;
            let y = event.pageY - drawing.offsetTop;
            ctx.lineTo(x, y);
            ctx.stroke();
        };
        document.onmouseup = function () {
            drawing.onmousemove = null;
        };

    }
    //监听画笔颜色变化
    penColor.addEventListener('change', () => {
        pen6.style.backgroundColor = penColor.value;
        pen12.style.backgroundColor = penColor.value;
        pen18.style.backgroundColor = penColor.value;
    })
    //监听画笔的粗细
    pen.addEventListener('click', throttle(() => {
        currentPen = 'pen6';
        penSize = 1;
        drawing.classList.add('choose-pen')
        drawing.classList.remove('choose-eraser')
    }, 200))
    pen6.addEventListener('click', throttle(() => {
        currentPen = 'pen6';
        penSize = 1;
        drawing.classList.add('choose-pen')
        drawing.classList.remove('choose-eraser')
    }, 200))
    pen12.addEventListener('click', throttle(() => {
        currentPen = 'pen12';
        penSize = 6;
        drawing.classList.add('choose-pen')
        drawing.classList.remove('choose-eraser')
    }, 200))
    pen18.addEventListener('click', throttle(() => {
        currentPen = 'pen18';
        penSize = 12;
        drawing.classList.add('choose-pen')
        drawing.classList.remove('choose-eraser')
    }, 200))
    //监听橡皮的大小
    eraser.addEventListener('click', throttle(() => {
        currentPen = 'eraser10';
        penSize = 10;
        drawing.classList.add('choose-eraser')
        drawing.classList.remove('choose-pen')
    }, 200))
    eraser10.addEventListener('click', throttle(() => {
        currentPen = 'eraser10';
        penSize = 10;
        drawing.classList.add('choose-eraser')
        drawing.classList.remove('choose-pen')
    }, 200))
    eraser20.addEventListener('click', throttle(() => {
        currentPen = 'eraser20';
        penSize = 20;
        drawing.classList.add('choose-eraser')
        drawing.classList.remove('choose-pen')
    }, 200))
    eraser30.addEventListener('click', throttle(() => {
        currentPen = 'eraser30';
        penSize = 30;
        drawing.classList.add('choose-eraser')
        drawing.classList.remove('choose-pen')
    }, 200))
    //清空画板按钮
    clear.addEventListener('click', throttle(() => {
        drawing.height = drawing.height;
    }, 10))
    //节流函数
    function throttle (fn, delay) {
        let timer = null;
        return () => {
            if(timer) {return}
            timer = setTimeout(() => {
                fn.apply(this, arguments)
                timer = null;
            }, delay)
        }
    }
})