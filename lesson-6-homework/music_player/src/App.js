import React,{useState} from 'react'
import './App.css';
import Main from './components/Main'
import Footer from './components/Footer'

export default function App() {
  const [music_data] = useState(()=>[{
      name: '12월엔(sad night)',
      artist: '$ÜN/JB',
      picUrl: "http://p1.music.126.net/0-nJ8SPNSa6go8ffehQjzQ==/109951165549840947.jpg",
      src: 'https://music.163.com/song/media/outer/url?id=1805356596.mp3',
      time: 277493,
      album: "하얀색 (White)",
    },
    {
        name: "作势装腔",
        artist: "张韶涵",
        picUrl: "http://p2.music.126.net/6X1e4gqCX3NoA_Xm6SiavQ==/109951164553007725.jpg",
        src: 'https://music.163.com/song/media/outer/url?id=1408983926.mp3',
        time: 228592,
        album: "单曲",
    },
    {
        name: "Million Dollar Mood",
        artist: "WEALTHYSELF",
        picUrl: "http://p2.music.126.net/7BWImB0yz-LQt3FRbT9YCw==/109951163771038764.jpg",
        src: 'https://music.163.com/song/media/outer/url?id=1337296869.mp3',
        time: 175360,
        album: "Million Dollar Mood",
    },
    {
        name: "吹灭小山河",
        artist: "国风堂 / 司南",
        picUrl: "http://p1.music.126.net/taWBQliW8wLh_pqXElAeww==/109951164923015271.jpg",
        src: 'https://music.163.com/song/media/outer/url?id=1412559986.mp3',
        time: 186198,
        album: "观风月·竹马篇",
    },
    {
        name: "自己按门铃自己听 (Live)",
        artist: "周深",
        picUrl: "http://p1.music.126.net/SnrbCk-XWOERwZ5wiulhwQ==/109951164887098113.jpg",
        src: 'https://music.163.com/song/media/outer/url?id=1439111144.mp3',
        time: 269211,
        album: "歌手·当打之年 第10期",
    },
  ]);

  const [index,setIndex]= useState(0);
  // 改变现在播放的歌曲索引，默认为0
  const ChooseClick=function(i) {
    setIndex(i);
  }

  const[isPlay,setIsPlay]=useState(false);
  // 改变播放状态，默认为暂停 
  const SetIsPlay=function(IsPlay) {
    setIsPlay(IsPlay);
  }

  return (
    <>
      <Main items={music_data} nowIndex={index} ChooseClick={ChooseClick.bind(this)} isPlay={isPlay} SetIsPlay={SetIsPlay.bind(this)}/>
      <Footer items={music_data} nowIndex={index} ChooseClick={ChooseClick.bind(this)} isPlay={isPlay} SetIsPlay={SetIsPlay.bind(this)}/>
    </>
  );
}
