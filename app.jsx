import React from 'react';
import ReactDOM from 'react-dom';

//建立一個 DOM 物件
const displayTime = () => {
    let nowTime = (
        <div>
            <span>nowTime:{new Date().toLocaleTimeString()}</span>
        </div>
    )
    ReactDOM.render(nowTime,document.getElementById('root'));
}

setInterval(displayTime,1000)

//使用 ReactDOM.render 把剛剛建立的 element 插入目標 DOM 中
