const TourContentItem = ({isActive, key, index, title, notice, notice2,qr, content}) => {

    return(
        <li key={`TOUR_MODAL_ITEM_${key}`} className={`view-content__item ${isActive ? 'active' : ''}`}>
            <div className="view-content__head">
                <div className="view-content__title">
                    <p>제 {index}경</p>
                    <h1>{title}</h1>
                </div>
                <div className="frame">
                    <p className="notice">{notice} <br/>{notice2}</p>
                    <div className="qr">
                        <img src={qr}/>
                    </div>
                </div>
            </div>
            <div className="content">
                <img src={content}/>
            </div>
        </li>
    )
}

export default TourContentItem