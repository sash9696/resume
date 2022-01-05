import React from 'react';
import './ToolsImg.css'

function ToolsImg({img, name, link}) {
    return (
        <div>
            <a className="tools_comp" href={link} target="_blank">
                <div className="tools_comp_img">
                    <img src={img} alt="" />
                </div>
                <div className="tools_comp_name">
                    {name}
                </div>
            </a>
        </div>
    )
}

export default ToolsImg
