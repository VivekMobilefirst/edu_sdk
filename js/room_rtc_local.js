const APP_ID = "17a8bd5c2fe04b5db9c64f6c3689c041"
localStorage.setItem('websdk_ng_global_parameter','e30=')
localStorage.setItem('loglevel','INFO')
// Create uid for a user, uid is generated by random and unique for each user
let uid = sessionStorage.getItem('uid')
if (!uid) {
    uid = String(Math.floor(Math.random() * 10000))
    sessionStorage.setItem('uid',uid)
}

let token = null;
// let client;
var client;

let rtmClient;
var channel;

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
let roomId = urlParams.get('room')
//room.html?room=234

//if we don't have a room
if (!roomId) {
    roomId = 'main'
}

// let displayName = sessionStorage.getItem('display_name')
// if (!displayName) {
//     window.location.href = '/'
// }

// audio and video stream
let localTracks = []
let remoteUsers = {}
// screen sharing
let localScreenTracks;
let sharingScreen = false;

window.onload = async function() {

// require('https://edu-sdk.vercel.app/js/agora-rtm-sdk-1.5.1.js'), function(agora) {
// Initial Room
// var joinRoomInit = async () => {
//     const AgoraRTM = require('agora-rtm-sdk')
    // Real time messaging
    rtmClient = await AgoraRTM.createInstance(APP_ID)
    await rtmClient.login({"test_user_id1008", "006a9a93ac27e184ee4bd333586bc90eff9IAAG4Jxo77ddUCy7JPr7xqwcbGpcCZxN1RPYdofJ4aus0QZ6H1MAAAAAEAAISHlNdkMlZAEA6AN24Fpk"})
    // add user's displayName
    await rtmClient.addOrUpdateLocalUserAttributes({'name':displayName})

    client = AgoraRTC.createClient({mode: 'live', codec: 'h264'});
        // join the roomId channel
    channel = await rtmClient.createChannel(roomId)
    await channel.join()
    // handleMemberJoined implemented in room_rtm.js
    channel.on('MemberJoined', handleMemberJoined)
    channel.on('MemberLeft', handleMemberLeft)
    channel.on('ChannelMessage', handleChannelMessage)
    getMembers()
    addBotMessageToDom(`${displayName} joined the room`)
    // Real time video and audio
//     client = AgoraRTC.createClient({mode:'rtc',codec:'vp8'})
    await client.join(APP_ID, roomId, token, uid)

    // Every time a user published or left, listen to that and call handleUserPublished
    client.on('user-published',handleUserPublished)
    client.on('user-left',handleUserLeft)
// }
// }
};   
// ask a user for access for microphone and camera permission (stored as array)
let joinStrem = async () => {
    // hide the join button and display the 
    document.getElementById('join-btn').style.display = 'none'
    document.getElementsByClassName('stream__actions')[0].style.display = 'flex'

    localTracks = await AgoraRTC.createMicrophoneAndCameraTracks({},{encoderConfig:{
        // setting for the video quality
        width:{min:640,idea:1280, max:1920},
        height:{min:480,idea:720, max:1080}
    }})

    let player = `<div class="video__container" id = "user-container-${uid}">
                        <div class = "video-player" id = "user-${uid}"></div>
                    </div>`

    document.getElementById('streams__container').insertAdjacentHTML('beforeend', player)
    document.getElementById(`user-container-${uid}`).addEventListener('click', expandVideoFrame)

    document.getElementById('mic-btn').classList.add('active')
    document.getElementById('screen-btn').classList.remove('active')


    // Audio track is stored at index 0 and video track stored at index 1
    localTracks[1].play(`user-${uid}`)
    
    if (client !== undefined) {
    console.log("uid",uid,client);
    console.log("localTracks[0]",localTracks[0]);
    console.log("localTracks[1]",localTracks[1]);
    alert('client fetching');
    // publish the local track to others
   await client.publish([localTracks[0],localTracks[1]])
  } else {
    alert('client not fetching');
  }
}

let switchToCamera = async() => {
    let player = `<div class="video__container" id = "user-container-${uid}">
                        <div class = "video-player" id = "user-${uid}"></div>
                    </div>`
    displayFrame.insertAdjacentHTML('beforeend', player)

    await localTracks[0].setMuted(true)
    await localTracks[1].setMuted(true)

    document.getElementById('mic-btn').classList.add('active')
    document.getElementById('camera-btn').classList.add('active')

    localTracks[1].play(`user-${uid}`)
    await client.publish([localTracks[1]])
}

// handle remote user and get their sights
let handleUserPublished = async(user, mediaType) => {
    remoteUsers[user.uid] = user

    // subscribe to the user's track and create player for that user
    await client.subscribe(user, mediaType)
    
    // check if the user is already existed or not
    let player = document.getElementById(`user-container-${user.uid}`)
    if (player === null) {
        player = `<div class="video__container" id = "user-container-${user.uid}">
        <div class = "video-player" id = "user-${user.uid}"></div>
        </div>`
        document.getElementById('streams__container').insertAdjacentHTML('beforeend', player)
        document.getElementById(`user-container-${user.uid}`).addEventListener('click', expandVideoFrame)
    }

    // when large frame is toggled and new user comes in, set its display frame to small
    if (displayFrame.style.display) {
        let videoFrame = document.getElementById(`user-container-${user.uid}`)
        videoFrame.style.height = '100px'
        videoFrame.style.width = '100px'
    }

    // checkfor the audio type and video type
    if (mediaType === 'video') {
        user.videoTrack.play(`user-${user.uid}`)
    }

    if (mediaType === 'audio') {
        user.audioTrack.play()
    }

}

// handle and delete the video frame when a user left
let handleUserLeft = async(user) => {
    delete remoteUsers[user.uid]
    let item =  document.getElementById(`user-container-${user.uid}`)
    if (item) {
        item.remove()
    }
    // remvoe the frame when user leave
    if (userIdInDisplayFrame === `user-container-${user.uid}`) {
        displayFrame.style.display = null
        // reseet the video frame to 300px
        let videoFrames = document.getElementsByClassName('video__container')

        for (let i = 0;videoFrames.length > i; i++) {
            videoFrames[i].style.height = '300px'
            videoFrames[i].style.width = '300px'
        }
    }
}

// active the button when click on it
let toggleCamera = async(e) => {
    let button = e.currentTarget

    // if camera is muted, unmute it else if camera is unmuted, mute it
    if (localTracks[1].muted) {
        await localTracks[1].setMuted(false)
        button.classList.add('active')
    } else {
        await localTracks[1].setMuted(true)
        button.classList.remove('active')
    }
}

let toggleMic = async(e) => {
    let button = e.currentTarget

    // if camera is muted, unmute it else if camera is unmuted, mute it
    if (localTracks[0].muted) {
        await localTracks[0].setMuted(false)
        button.classList.add('active')
    } else {
        await localTracks[0].setMuted(true)
        button.classList.remove('active')
    }
}

let toggleScreen = async(e) => {
    let screenButton = e.currentTarget
    // disable the camera when sharing screen
    let cameraButton = document.getElementById('camera-btn')

    if (!sharingScreen) {
        sharingScreen = true

        screenButton.classList.add('active')
        cameraButton.classList.remove('active')
        cameraButton.style.display = 'none'
        // access for screen sharing
        localScreenTracks = await AgoraRTC.createScreenVideoTrack()
        document.getElementById(`user-container-${uid}`).remove()
        displayFrame.style.display = 'block'

        let player = `<div class="video__container" id = "user-container-${uid}">
        <div class = "video-player" id = "user-${uid}"></div>
        </div>`

        displayFrame.insertAdjacentHTML('beforeend',player)
        document.getElementById(`user-container-${uid}`).addEventListener('click',expandVideoFrame)

        //play the screen sharing (locally)
        userIdInDisplayFrame = `user-container-${uid}`
        localScreenTracks.play(`user-${uid}`)
        //play the screen sharing to other users
        await client.unpublish([localTracks[1]])
        await client.publish([localScreenTracks])

        let videoFrames = document.getElementsByClassName('video__container')
        for (let i = 0; videoFrames.length > i; i++) {
            // smaller the other frame
            if (videoFrames[i].id != userIdInDisplayFrame) {
              videoFrames[i].style.height = '100px'
              videoFrames[i].style.width = '100px'
            }
        }
    } else {
        sharingScreen = false
        cameraButton.style.display = 'block'
        document.getElementById(`user-container-${uid}`).remove()
        await client.unpublish([localScreenTracks])

        switchToCamera()
    }
}

//handle leave room button
let leaveStream = async(e) => {
    e.preventDefault()
    // show join button when leave stream and hide stream__actions
    document.getElementById('join-btn').style.display = 'block'
    document.getElementsByClassName('stream__actions')[0].style.display = 'none'
    // close all the local track
    for (let i = 0; localTracks.length>i;i++) {
        localTracks[i].stop()
        localTracks[i].close()
    }
    //unpublish the audio and video
    await client.unpublish([localTracks[0],localTracks[1]])
    //if sharing screen unpublish screen track
    if (localScreenTracks) {
        await client.unpublish([localScreenTracks])
    }
    //remove the video frame
    document.getElementById(`user-container-${uid}`).remove()
        //hide the toggled large frame
    if(userIdInDisplayFrame === `user-container-${uid}`) {
        displayName.style.display = null

        for (let i = 0; videoFrames.length > i; i++) {
            videoFrames[i].style.height = '300px'
            videoFrames[i].style.width = '300px'
        }
    }
    // send leave message to channel
    channel.sendMessage({text:JSON.stringify({'type':'user_left', 'uid':uid})})
}

document.getElementById('camera-btn').addEventListener('click',toggleCamera)
document.getElementById('mic-btn').addEventListener('click',toggleMic)
document.getElementById('screen-btn').addEventListener('click',toggleScreen)
document.getElementById('join-btn').addEventListener('click',joinStrem)
document.getElementById('leave-btn').addEventListener('click',leaveStream)
// joinRoomInit()
