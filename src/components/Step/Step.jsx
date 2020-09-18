import React from "react"
import styles from "../../index.scss"

const title = "找專家三步驟，輕鬆獲取免費報價"
const step = [
        { img: "https://assets-au-01.kc-usercontent.com:443/e0a5d496-0e0b-02ac-957e-28068fa4bd4d/0171e36c-1193-4792-8891-2227fdb3e017/icon1.png", title: "1.提出需求", content: "為您篩選合適的專家"},
        { img: "https://assets-au-01.kc-usercontent.com:443/e0a5d496-0e0b-02ac-957e-28068fa4bd4d/38028014-e168-49b9-bdb6-23fc2737609a/icon2.png", title: "2.免費比價", content: "多位專家為您即時報價"},
        { img: "https://assets-au-01.kc-usercontent.com:443/e0a5d496-0e0b-02ac-957e-28068fa4bd4d/fc20c29a-038c-4b26-8911-3484a652f623/icon3.png", title: "3.找到服務", content: "挑選想要的專業服務"},
    ]

const ContentStep = (props) => {
    const { img, title, content } = props
    return (
        <div className={ styles.content }>
            <div className={ styles.step }>
                <img src={ img } alt="img" className={ styles.img }/>
                  <div>
                      <div className={ styles.stepTitle }>{ title }</div>
                      <div className={ styles.stepContent }>{ content }</div>
                  </div>
            </div>
        </div>
    )
}

const Step = () => {
    return (
        <div className={styles.bg}>
            <div className={styles.subContent}>
                <div>{ title }</div>
                <div className={styles.flex}>
                <ContentStep img={step[0].img}
                             title={step[0].title}
                             content={step[0].content}/>
                <ContentStep img={step[1].img}
                             title={step[1].title}
                             content={step[1].content}/>
                <ContentStep img={step[2].img}
                             title={step[2].title}
                             content={step[2].content}/>
                </div>
            </div>
        </div>
    )
}

export default Step;