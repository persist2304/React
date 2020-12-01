import React, { useState, useRef, useEffect } from 'react';

// 控制 RWD ， 抓取目前螢幕大小： window.innerWidth
const useRWD = () => {
    const [device, setDevice] = useState('mobile');

    const handleRWD = () => {
        if(window.innerWidth > 768) setDevice("PC");
        else if(window.innerWidth > 576) setDevice("tablet");
        else setDevice("mobile");
    }
    // 改變長寬會觸發就是 resize 行為
    useEffect(() => {
        window.addEventListener('resize', handleRWD);
        handleRWD();
        return(() => {
            window.removeEventListener('resize', handleRWD);
        })
    }, []);

    return device;
}

const useRate = (value) => {
    const [state, setState] = useState(0)

    const mounted = useRef();
    const tm = useRef();
    const tmTwo = useRef();

    useEffect(() => {
        if(!mounted.current){ // Ref 為 false 等於 componentDidMount
            setState(value)
            mounted.current = true; // Ref 若等於 true 代表會進入 componentDidUpdate
        } else {
            if(state > value){
                tmTwo.current = setTimeout(() => {
                    setState(state - 1)
                }, 20)
            } else if(state < value){
                tm.current = setTimeout(() => {
                    setState(state + 1)
                }, 20)
            }
        }

    },[value, state])

    return state
}

const Cheer = (props) => {

    const score = useRate(props.value)

    return (
        <div>
            <h1>美心加油器</h1>
            <div>{ `目前分數${ score }` }<br/>
                { `還有沒有！再來 ${ 88 - score }分！` }
            </div>
            <button value={ Number(props.value)+1 } onClick={ props.onClick }>{ `加1分` }</button>
            <button value={ Number(props.value)+7 } onClick={ props.onClick }>{ `加7分` }</button>
            <button value={ Number(props.value)+10 } onClick={ props.onClick }>{ `加10分` }</button>
            <button value={ 0 } onClick={ props.onClick }>{ `0分` }</button>
        </div>
    )
}

const ProgressDIY = (props) => {

    const percent = useRate(props.value);

    return (
        <div>
            <div className='progress' style={{ backgroundColor: 'rgba(0,0,0,0.2)', width: '200px', height: '7px', borderRadius: '10px' }}>
                <div className='progress' style={{ backgroundColor: '#fe5196', width: percent+'%', height: '7px', borderRadius: '10px' }}></div>
            </div>
            { `目前比率：${ percent }%` }
            <button value={ 90 } onClick={ props.onClick }>增加比率至90</button>
            <button value={ 10 } onClick={ props.onClick }>增加比率至10</button>
        </div>
    )
}

const LoginForm = () => {
    const [value, setValue] = useState("快來輸入我")

    useEffect(() => {
        setTimeout(() => {
            setValue("用 fetch 拿到的資料")
        }, 2000)
    }, [])

    return (
        <div>
            <input disabled={true} type="text" onChange={ (e) => { setValue(e.target.value ) }} value={ value }/>
            <div>
                { `目前account:${ value }` }
            </div>
            <button onClick={ () => { setValue("") } }>用鍵盤取得新的Account</button>
        </div>
    )
}

const SelectorForm = () => {

    const [value, setValue] = useState('123')

    return (
        <div>
            <select name="number" id="number"
                    value={ value } onChange={ (e) => { setValue(e.target.value) } }>
                <option value="123">123</option>
                <option value="456">456</option>
                <option value="789">789</option>
            </select>
            <div>
                { `目前select:${ value }` }
            </div>
            <button onClick={ () => {
                setValue('789')
            } }>改變為789</button>
        </div>
    )
}

const CheckBoxForm = () => {

    const [check, setCheck] = useState(true)

    return (
        <div>
            <input type="radio" value="123" checked={check} onChange={(e)=>{setCheck(true)}} />123<br/>
            <input type="radio" value="456" checked={!check} onChange={(e)=>{setCheck(false)}} />456
        </div>
    )
}



const ToolsPractice=()=>{
    const [value, setValue] = useState(0);
    const [score, setScore] = useState(0);

    const device = useRWD();

    if(device === 'PC') return(
        <div>
            <CheckBoxForm />
            <br/>
            <SelectorForm />
            <br/>
            <LoginForm />
            <br/>
            <ProgressDIY value={value} onClick={(e)=>{setValue(e.target.value) }}/>
            <Cheer value={ score } onClick={ (e) => { setScore(e.target.value) } }/>
        </div>
    );
    else if(device === 'tablet') return <h1 style={{color:"#3a9ad9",fontFamily:"Microsoft JhengHei"}}>平板</h1>
    else return <h1 style={{color:"#29aba4",fontFamily:"Microsoft JhengHei"}}>手機</h1>


    return(
        <div>

            <ProgressDIY value={value} onClick={(e)=>{setValue(e.target.value) }}/>
            <Cheer value={ score } onClick={ (e) => { setScore(e.target.value) } }/>
        </div>
    );
}

export default ToolsPractice;
