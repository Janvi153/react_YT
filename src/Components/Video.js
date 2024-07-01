import './Video.css';
function Video({title,channel="lolo",views,time,bot})
{
    let channelJSX;
    if(bot){
        channelJSX= <div className="channel">{channel} 🤖</div>
    }
    else
    {
        channelJSX= <div className="channel">{channel}</ div>
    }
    return(
        <>
        <div className='container'>
        <div className="pic">
        <img src="https://picsum.photos/160/90" alt="Katherine Johnson"></img>
        </div>
        <div className="title">{title}</div>
        {channelJSX}
        <div className="views">
            {views} views <span>.</span>
            {time}
        </div>
        </div>
        </>
    );
}
export default Video;