import React from 'react'


const Searchlist = props => {
    return (
      <>
        <div className="filter_result">
          <input
            value={props.title}
            type="checkbox"
            onClick={props.checkboxHandler}
          />
          <div className="filtr_text_cont">
            <p className="filter_title">{props.title}</p>
            <p className="filter_subtitle">{props.subtitle}</p>
          </div>
        </div>
      </>
    );
}



export default Searchlist;