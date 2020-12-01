import React, { useState } from 'react';
import styles from "../../style/Loan.scss";
// use hook get Data
import { useSelector, useDispatch } from 'react-redux';
// add method & edit 
import { addOrder, editOrder, deleteOrder } from '../../action/order.js'
import orderReducer from '../../reducers/order';

const InputForms = (props) => {
    return (
        <div>
            <input id="name" type="text" value={ props.value } onChange={ props.onChange }/>
        </div>
    )
}

const CssWorld = () => {
    const [state, setState] = useState(1);

    // add name method && edit null value
    const [value, setValue] = useState({ id: "", name: "", age: ""})
    const [status, setStatus] = useState('add')

    const submit = () => {
        if(status == 'add'){
            // pass by value
            dispatch(addOrder(value))
        } else {
            // edit reducer
            console.log('edit');
            dispatch(editOrder(value))
        }
        // resetValue
        setValue({ id: '', name: '', age: '' })
        setStatus('add')
    }

    // edit method
    const edit = (e) => {
        setValue({ name: getOrderData[e].name, id: e })    
        setStatus('edit')
    }

    // delete method 
    const deletes = (e) => {
        dispatch(deleteOrder(e));
        setStatus('add');
    }

    
    // input change method
    const handleChange = (e) => {
        const { id, value } = e.target;
        setValue(prevState => ({
            ...prevState, [id] : value
        }))
    }   



    // getRedux, state 代表是所有 store 裡面的值
    const getOrderData = useSelector(state => state.orderReducer);

    // get data 
    let lists = getOrderData.map((item, index) => {
        return <div key={ index } onClick={ () => {edit(index)} }>{ item.name } <button onClick={ () => { deletes(index)} }>DELETE</button> </div>
    })

    // dispatch method
    const dispatch = useDispatch();



    const getDataURL = 'https://ptx.transportdata.tw/MOTC/v2/Rail/THSR/AvailableSeatStatusList/1000?$top=1&$format=JSON'
    const getData = () => {
        fetch(getDataURL, {
            method: "GET",
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(e => {
            console.log(e);
        })
    }

    const data = {
        mainTitle : '企業融資申請',
        subTitle : {
            title: '取得營運資金拓展您的事業',
            subTitle: '只要您擁有公司營業證就符合申請資格，新創不是障礙。'
        },
        itmeContent : {
            first: {
                title: '快速線上審核',
                img: 'https://picsum.photos/100/100?random53',
                content: '最快48小時撥款'
            },
            second: {
                title: '最靈活',
                img: 'https://picsum.photos/100/100?random57',
                content: '克制您的融資方案'
            },
            third: {
                title: '最安全',
                img: 'https://picsum.photos/100/100?random85',
                content: '個資不外洩'
            }
        },
        productContent : {
            first: '產品說明',
            second: '關於中租',
            third: '關於融資'
        }
    }

    let content = null;
    switch(state) {
        case 1:
            content = <div>lias laboriosam maxime quaerat.</div>
            break
        case 2:
            content = <div>456</div>
            break;
        default: 
            content = <div>hi</div>
    }

    // 點擊指定位置
    const scrollToAnchor = (anchorName) => {
        if (anchorName) {
            let anchorElement = document.getElementById(anchorName);
            if(anchorElement) {
                anchorElement.scrollIntoView({block: 'start', behavior: 'smooth'});
            }
        }
    }

    return (
        <div>
        {/* input*/}
        <InputForms value={ value.name } onChange={ handleChange }/>
        
        
        {/* <div className={ styles.inputValue }>
            <input id="name" type="text" value={ value.name } onChange={ handleChange }/>
        </div> */}
        
        {/* button */}
        <div className={ styles.button }>
            <button type="button" onClick={ submit }>add name</button>
        </div>

        {/* edit */}

        
        {console.log(getOrderData)}



        {/* list */}
        { lists }
        {/* <div className={ styles.getData }>
            { getOrderData.map((item, index) => (
                <div key={ index } onClick={ edit }>{ item.name }</div>
            )) }
        </div> */}
        


        <hr/>
            <div className={ styles.container }>
                <div className="jump" className={ styles.jump }>
                    <a onClick={ () => {
                        scrollToAnchor('tabBlock');
                    }}>ScrollDown</a>
                </div>
                
                <div className= { styles.getData }>
                    <button onClick={ () => { getData() }}>GETDATA</button>
                </div>
                <div className= { styles.mainTitle }>
                    <h5>{ data.mainTitle }</h5>
                </div>
                <section>
                    <div className={ styles.subTitle }>
                        <h5>{ data.subTitle.title }</h5>
                        <p>{ data.subTitle.subTitle }</p>
                    </div>
                    <div className={ styles.wrap }>
                        <div className={ styles.item }>
                            <h3>{ data.itmeContent.first.title }</h3>
                            <img src={ data.itmeContent.first.img }/>
                            <p>{ data.itmeContent.first.content }</p>
                        </div>
                        <div className={ styles.item }>
                            <h3>{ data.itmeContent.second.title }</h3>
                            <img src={ data.itmeContent.second.img }/>
                            <p>{ data.itmeContent.second.content }</p>
                        </div>
                        <div className={ styles.item }>
                            <h3>{ data.itmeContent.third.title }</h3>
                            <img src={ data.itmeContent.third.img }/>
                            <p>{ data.itmeContent.third.content }</p>
                        </div>
                    </div>
                </section>
                {/* product */}
                <div className={ styles.tabBlock }>
                        <div className={ styles.tab }>
                            <div className={ state == 1 ? styles.active : '' } onClick={ () => { setState(1) } }>{ data.productContent.first }</div>
                            <div className={ state == 2 ? styles.active : '' } onClick={ () => { setState(2) } }>{ data.productContent.second }</div>
                            <div className={ state == 3 ? styles.active : '' } onClick={ () => { setState(3) }}>{ data.productContent.third }</div>
                        </div>
                        <div className={ styles.content }>
                            { content }
                        </div>
                        <div id="tabBlock">
                            Hello
                        </div>
                </div>
            </div>
        </div>
    )
}

export default CssWorld;