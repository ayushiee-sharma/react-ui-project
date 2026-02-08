function Parent(props){

  return(
    <div className="parent"> 
      <div className="top" >
          <img src={props.img} />
          <div className="save">{props.save} <i class="ri-bookmark-line"></i></div>
          </div>
           <div className="com">{props.comp}</div>
           <div className="position">{props.position}</div>
        <div className="mid">
          <div className="nature">{props.nature}</div>
         <div className="level">{props.level}</div>
         </div>
          
          <div className="bot">
            <div className="salary">{props.salary}</div>
            <div className="button">{props.button}</div>
          </div>
          <div className="loc">
            {props.location}

          </div>

    </div>
  )
}
export default Parent