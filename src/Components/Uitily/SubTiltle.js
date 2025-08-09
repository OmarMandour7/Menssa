import React from 'react'
import { Link } from 'react-router-dom'

const SubTiltle = ({ title, btntitle, pathText }) => {
    return (
        <div className="d-flex justify-content-between fonn pt-4">
            <div className="sub-tile fs-2 ">{title}</div>
            {btntitle ? (
                <Link to={`${pathText}`} style={{ textDecoration: 'none' }}>
                    <div className="more-now">{btntitle}</div>
                </Link>
            ) : null}
        </div>
    )
}

export default SubTiltle
