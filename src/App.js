import "./App.css"
import Video from './Components/Video';
function App(){
  let videos=[{
    id:1,
    title: 'React tutorial',
    views: '10K',
    time: '1year',
    channel: 'Loja✅',
    bot: true,
  },
  {
    id:2,
    title: 'Harry poter',
    views: '10K',
    time: '1year',
    channel: 'Loja',
    bot: true,
  },
  {
    id:3,
    title: 'Yumeko Jabami',
    views: '10K',
    time: '1year',
    channel: 'Loja',
    bot: true,
  }
];
  return(
    <div className='App'>
      <div style={{ color: 'white'}}>Videos</div>
      {
        videos.map(video=><Video  
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          bot={false}
          ></Video>)
      }
    </div>
  );
}
 export default App;
