const ContentItem = (props) =>{
    return(
        <li className={`view-content__item ${props.isActive ? 'active' : ''}`}>
            <div className="view-content__head">
                <div className="view-content__title">
                    <p>제 {props.index}경</p>
                    <h1>{props.title}</h1>
                </div>
                <div className="frame">
                    <p className="notice">{props.notice} <br/>{props.notice2}</p>
                    <div className="qr">
                        <img src={props.qr}/>
                    </div>
                </div>
            </div>
            <div className="content">
                <img src={props.content}/>
            </div>
        </li>
    )
}

export default ContentItem