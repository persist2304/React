import React from "react"
import { connect } from "react-redux"
import { List } from "../List"

class ConnectTodoLists extends React.Component {
    render() {
        //先排序
        this.props.data
            .sort((f, s) => { return f.important < s.important ? -1 : 1 })
            .sort((f, s) => { return f.complete > s.complete ? 1 : -1 })
        console.log(this.props.data)
        //算次數
        let todoCount = 0
        let Lists = this.props.data.map((item) => {
            // 資料從 InProgrss && Completed 來
            // 判斷頁面如果是 Progress 的話
            switch (this.props.page){
                case "progress":{
                    // progress 顯示未完成的畫面，如果 item.complete 為 true 代表完成。那就不顯示。
                    if(item.complete)
                        return null
                    break;
                }
                case "completed":{
                    // completed 顯示完成的畫面，如果 item.complete 為 fasle 代表未完成。那就不顯示。
                    if(!item.complete)
                        return null
                    break;
                }
            }

            //算數量
            if(this.props.page){
                todoCount++
            }
            else if(!item.complete){
                todoCount++
            }

            return <List key={item.id} listData={item} />
        })

        return (
            <div>
                <div>
                    {Lists}
                </div>
                <div class="countText">
                    <span>{todoCount} tasks {this.props.page === "completed" ? "completed" : "left"}</span>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { data: state }
}

const ToDoLists = connect(mapStateToProps)(ConnectTodoLists)


export { ToDoLists }