import React,{ useState, useEffect } from "react"
import styles from "../../index.scss"
import { useSelector } from "react-redux";

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
    const data = useSelector(state => state.StepReducer);
    return (
        <div className={styles.bg}>
            <div className={styles.subContent}>
                <div>{ data[0].title }</div>
                <div className={styles.flex}>
                <ContentStep img={data[1].img}
                             title={data[1].title}
                             content={data[1].content}/>
                <ContentStep img={data[2].img}
                             title={data[2].title}
                             content={data[2].content}/>
                <ContentStep img={data[3].img}
                             title={data[3].title}
                             content={data[3].content}/>
                </div>
            </div>
        </div>
    )
}

export default Step;

