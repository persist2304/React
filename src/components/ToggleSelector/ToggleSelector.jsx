import React,{ useState } from 'react';

let faqs = [
    { q: '麵包可以直接吃嗎？', a: <div>可以呀，因為他是熟的。</div>, isCheck: false },
    { q: '水可以直接喝嗎？', a: <div>可以呀，因為他是水</div>, isCheck: false },
]

const ToggleSelector = () => {

    const [state, setState] = useState(false)

    const handleClick = (e) => {
        faqs[e].isCheck = !faqs[e].isCheck
        setState(!state)
    }
    return (
        <div>
            { faqs.map((faq, index) => {
                return (
                    <div key={ index }>
                        <div onClick={ () => { handleClick(index) }}>{ faq.q }</div>
                        <div>{ faq.isCheck? faq.a : null}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default ToggleSelector;