import React, { useState, useEffect } from 'react';

const Babys = (props) => {
    const [state, setState] = useState({
        mom: null,
        isGetData: false,
        isRightDad: false,
    })

    const ajaxSimulator = () => {
        setTimeout(() => {
            console.log('setTimeout')
            setState(preState => ({
                ...preState,
                isGetData: true,
                mom: '小美',
            }))
        }, 3000)
    }

    const checkDad = () => {
        if(props.dad == 'Chang')
            setState({ isRightDad: true })
        else
            setState({ isRightDad: false })
    }

    useEffect(() => {
        ajaxSimulator();
        checkDad()
        document.getElementById('talk').append('爸！');
        return(() => {
            document.getElementById('talk').innerHTML = '';
        })
    },[props.dad])

    if(!state.isRightDad){
        return (
            <div>他的媽媽，是誰，干你X事</div>
        )
    } else if(!state.isGetData){
        return(
            <div id='msg'>讀取中...</div>
        )
    } else {
        return (
            <div id='msg'>
                { `他的媽媽是${ state.mom }` }
            </div>
        )
    }
}

const Baby = () => {

    const [state, setState] = useState({
        born: true,
        dad: 'Chang'
    })

    const handleBtn = () => {
        console.log('handleBtn')

        setState(preState => ({
            ...preState, born: !state.born
        }))
    }

    const changeDad = () => {
        if(state.dad == 'Chang'){
            setState({
                dad: 'Wang'
            })
        } else {
            setState({
                dad: 'Chang'
            })
        }
    }

    const spawnBaby = () => {
        if(state.born)
            return <Baby dad={ state.dad } />
    }

    return(
        <div>
            { spawnBaby() }
            <div id='talk'></div>
            <button onClick={ changeDad }>換爸爸</button>
            <button onClick={ handleBtn }>{ (state.baby) ? '讓他回去肚子裡' : '讓他生' }</button>
        </div>
    )
}

export default Baby;