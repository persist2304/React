import React,{ useState } from 'react';
import styles from '../../style/FoldabelContent.scss'

const FoldableContent = (props) => {

    const [ifExpand, setIfExpand] = useState(false);
    
    const toggleIfExpand = () => {
        setIfExpand(!ifExpand);
    }

    const _renderLabel = () => {
        let moreText = props.more || '顯示更多';
        const label = ifExpand ? '顯示較少' : moreText;
        return (
            <div onClick={ toggleIfExpand }>
                { label }
            </div>
        )
    }

    const { children, maxHeight } = props;
    const contentHeight = ifExpand 
        ? { maxHeight: 'none', overflow: 'initial' }
        : { maxHeight: `${maxHeight}`, overflow: 'hidden' };
    return (
        <div>
            <div className={ styles.contentContainer} style={ contentHeight }>
                <div>
                    { children }
                </div>
                <div className={ ifExpand? styles : styles.mask }></div>
            </div>
            { _renderLabel() }
        </div>
    )
}

export default FoldableContent;
