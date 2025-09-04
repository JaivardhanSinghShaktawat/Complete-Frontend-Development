/* 
--------------------------------- Multimedia Elements ------------------------------

--> What are Multimedia Elements ? 
    Multimedia elements are audio , videos , images and embedded content like 
    pdf , svg and other documents.

--> How to add audio in HTML ? 
    audio element is used to add audio player in our HTML document. 
    By default the display of audio and video element is none.
    To see the controls of audio , put the controls attribute. 
    To see the audio and video element , use the controls attribute.

    Note : The content inside audio/video element will be dispalyed if the browser
    don't support audio and video element or the formats of the audio and video 
    files.

    The display of audio and video element is inline.

    <audio src="audio.mp3" controls autoplay muted loop preload="auto"></audio>

    src : it specifies the location/path of the audio file.
    it specifies the location/path where the audio is present.
    controls : it provides controls to the audio player.It is a boolean attribute. 
    muted : it mutes the audio when it is auto played. 
    autoplay : it plays the audio as soon as the web page loads.In chrome we have 
    to use muted because for SEO and accessiblity aspect it is not good.To use 
    autplay in audio/video element in chrome , we also need to use muted. 
    loop : it repeats the audio on loop.
    it loops the audio again and again.
    preload : it specifies how to load the audio when the web pages loads.
    it specifies how the content should get load when the web page loads.

    Note : We can also use audio element with source element to provide different
    formats of the same audio to support the audio on all the devices.It loads
    the audio in the background without delaying the other content loading.

    Note : The audio player looks different on different browsers. 

    Chrome and some browsers ignore the autoplay attribute.They don't allow to 
    autoplay the music on the document.We can add the autoplay attribute but it
    will be ignored in chrome.To use autoplay attribute in chrome , also use 
    the muted attribute. 
    In chrome video and audio won't autoplay.In safari audio and video will 
    autoplay.This is because for the accessibility reason.

    In safari the autoplay attribute works.

--> Using audio with source element.

    <audio controls autoplay muted loop preload="auto">
      <source src="audio.mp3" type="audio/mpeg" />
      <source src="audio.wav" type="audio/wav" />
      <source src="audio.ogg" type="audio/ogg" />
      You browser does'nt support audio element.
      <a href="audio.mp3" download="audio">Download Audio</a>
    </audio>

    if the mp3 is not supported by any device than the .wav audio will play.If .wav is 
    also not supported than oog will try to play and if it also don't works than 
    "Your browser does not support the audio element." text 
    will appear on the screen and an anchor element will be displayed to download
    the audio.

--> How to add video in HTML ? 
    Video element is used to add/embed/insert video player in our HTML document. 

    <video src="" controls autoplay muted loop preload="auto" poster="image.jpeg">
    </video>

    src : it specifies the location/path of the video file.
    it specifies the location/path where the video file is present.
    controls : it provides controls to the video player. 
    muted : it mutes the audio of the video when it is auto played. 
    autoplay : it plays the video when the web page loads. 
    loop : it loops the video. 
    preload : it determines how to preload the video when the web page loads.
    poster : The poster attribute displays an image until someone click 
    on the video to play or until the video loads.It's like thumnail of the video.

    preload has three values. 

    1. none : it means not to preload anything when the web page loads.It is the
    default value. 

    2. metadata : it tells the browser to preload the metadata about the video 
    file such as video length and basic information. 

    3. auto : it tells the browser to preload the complete video file with all the
    information. 

    Note : In interviews the preload attribute is asked a lot of times.

--> Formats Of Audio 

    Note : There are only three audio formats that we can use

    1. mp3  (type = "audio/mpeg")
    2. wav  (type = "audio/wav")
    3. ogg  (type = "audio/ogg")

    mp3 is compressed file and is smaller in size than ogg and wav.
    wav is not compressed larger in size but has more good quality.
    ogg is compressed file but it has more good quality than the mp3.

    HTML supports only mp3 , wav and ogg audio formats.

--> Formats Of Video

    1. mp4 (type = "video/mp4")
    2. webm (type = "video/webm")
    3. ogg (type = "video/ogg")

--> Note : We can also use video element with source element to provide different
    formats of the same video to support the video on all the devices.

    <video controls autoplay muted loop preload="auto" poster="thumbnail.jpg">
       <source src = "video.mp4" type = "video/mp4"/>
       <source src = "video.webm" type = "video/webm"/>
       <source src = "video.ogg" type = "video/ogg"/>
       You browser does'nt support video tag.
      <a href="video.mp4" download="video">Download Video</a>
    </video>

--> track : It is used to add the subtitles or captions of a video.

    <video width="320" height="240" controls>
      <source src="forrest_gump.mp4" type="video/mp4">
      <source src="forrest_gump.ogg" type="video/ogg">
      <track src="fgsubtitles_en.vtt" kind="subtitles" srclang="en" label="English">
      <track src="fgsubtitles_no.vtt" kind="subtitles" srclang="no" label="Norwegian">
    </video>

    Note : The extension of the subtitles/captions are either vtt or srt.

--> source : it is used with picture , audio and video element to provide different
    audios,videos and images.

--> embed : it is used to embed external multimedia content such as pdf , audio , 
    video , plugins etc. 

    object : it also used to embed external multimedia content like pdf , audio , 
    video , plugins etc. 

    Note : The main difference between object and embed is that embed is a void
    element whereas object is not a void element.

    Note : The main usecase of embed and object was to embed external plugins to 
    add some feature to the browser.

    Most of the browsers don't support plugins.So object and embed are now
    deprecated and are not used basically.

    We can embed pdf via embed , object and iframe but avoid using embed
    and object element.

    Don't use embed and object to add audio , video , pdf , images etc.
    Use audio , video , img , iframe element for that. 
    Don't use embed element to embed youtube videos.Instead use iframe element.
  
    Note : In simple , try to avoid the use of embed and object element.
    To embed pdf files you iframe element.
    
    Note : The content inside object will be displayed if the object element 
    fails to load the external multimedia content that we have provided in data 
    attribute.

    <object data="resume.pdf" type="application/pdf">
    Failed to load pdf file.
    </object>

    Note : embed is a void element.We cannot put content inside it like object
    element.If you want to use embed and object than avoid embed and try to use
    object element.
    Note : Avoid using embed and object.

--> svg : it stands for scalable vector graphics.It is used to create 2D shapes ,
    diagrams and graphics.
    It is smaller in size and has good quality.

    Syntax : 

    <svg height="500" width="500">
     // content/shapes/diagrams
    </svg>

    Here we have created an canvas of an area 500*500 inside we draw the diagrams.
    Here 500 is the pixels.

    We can also give height and width in percentage. 

    <svg height="auto" width="100%" style="background-color: orange"></svg>

    Creating a circle using svg. 

     <svg height="500" width="500">
      <circle
        cx="200"
        cy="200"
        r="5"
        fill="red"
        stroke-width="4"
        stroke="gray"
      ></circle>
      </svg>

      fill : it specifies the background color of a shape.
      stroke-with : it is the border width of the shapes.
      stroke : it is the border color of the shapes. 
      cx : it specifies x distance. 
      cy : it specifies y distance.
      x : it specifies x distance. 
      y : it specifies y distance.
      r : it specifies the radius of the circle.
      height : it specifies the height of the rectangle.
      width : it specifies the width of the rectange. 

     Creating rectangle
 
     <svg height = "200" width = "300">
       <rect x = "50" y = "50" height = "100" width = "300" fill = "blue"></rect>
     </svg>
 
     Creating Square
 
     <svg height = "200" width = "300">
       <rect x = "50" y = "50" height = "100" width = "100" fill = "red"></rect>
     </svg>

         Creating Triangle

     <svg  height = "200" width = "400">
       <polygon points = "150 ,10 10 , 300 300 , 300" fill = "red" ></polygon>
     </svg>
 
     There is no triangle element in html.We use points
     attribute to specify the distance in x-axis and y-axis.
*/
