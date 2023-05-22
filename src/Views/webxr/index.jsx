import { createDOM, cleanupDOM, throttle } from "../../tool/tools.ts";
import useConnect from "../../hooks/useConnect.js";
import useRoom from "../../hooks/useRoom.js";
import Avatar from "../../component/avatar/index.jsx";

import "aframe";
import { Entity, Scene } from "aframe-react";

import floor from "../../assets/image/floor.jpg";

import React, { useEffect, useRef, useState } from "react";


const A = window.AFRAME;
const JitsiMeetJS = window.JitsiMeetJS;
const conf = JitsiMeetJS.events.conference;
const conn = JitsiMeetJS.events.connection;

const WebXR = props => {

    const connection = useConnect();
    const [connected, setConnected] = useState(false);
    const room = useRoom(connection);
    const [users, setUsers] = useState({});
    const localTracks = useRef([]);
    const remoteTracks = useRef({});
    const assetsRef = useRef();

    const onLocalTracks = tracks => {
        console.log('**************localTracks**************');
        console.log(tracks);
        for (const track of tracks) {
            localTracks.current.push(track);
        }

        // for (let i in localTracks) {
        //     if (localTracks[i].getType() === 'video') {
        //         cleanupDOM("localVideo" + i);
        //         const video = createDOM('video', {
        //             autoplay: '1',
        //             id: 'localVideo' + i,
        //             width: 450,
        //             height: 300
        //         });
        //         container.current?.append(video);
        //         localTracks[i].attach(video);
        //         document.getElementById("localScreen").setAttribute("src", "#localVideo" + i);
        //     }
        //     else {
        //         cleanupDOM("localAudio" + i);
        //         const audio = createDOM('audio', {
        //             autoplay: '1',
        //             id: 'localAudio' + i,
        //             muted: false
        //         });
        //         container.current?.append(audio);
        //         localTracks[i].attach(audio);
        //     }
        // }
    };

    const onRemoteTrack = track => {
        console.log('**************remoteTrack**************');
        console.log(track);
        console.log(track.isLocal())
        console.log(remoteTracks.current);
        if (track.isLocal()) {
            return;
        }

        const participantId = track.getParticipantId();
        if (track.getType() == 'audio') {
            remoteTracks.current[participantId][0] = track;
        }
        else {
            remoteTracks.current[participantId][1] = track;
        }

        if (track.getType() === 'video') {
            cleanupDOM(participantId + 'video');
            const video = createDOM('video', {
                autoplay: '1',
                id: participantId + 'video',
            });
            assetsRef.current?.append(video);
            track.attach(video);
        } else {
            cleanupDOM(participantId + 'audio');
            const audio = createDOM('audio', {
                autoplay: '1',
                id: participantId + 'audio'
            });
            assetsRef.current?.append(audio);
            track.attach(audio);
        }
    };

    const onConferenceJoined = () => {
        console.log('conference joined!');
        for (const track of localTracks.current){
            room.addTrack(track);
        }
        console.log(room)
    };

    const onConnectionFailed = () => {
        alert('connect failed');
        console.log('connect failed');
    };

    const disconnect = async () => {
        console.log('disconnect');
        connection?.removeEventListener(conn.CONNECTION_ESTABLISHED, onConnectionSuccess);
        connection?.removeEventListener(conn.CONNECTION_FAILED, onConnectionFailed);
        connection?.removeEventListener(conn.CONNECTION_DISCONNECTED, disconnect);

        for (let i = 0; i < localTracks.current.length; i++) {
            localTracks.current[i].dispose();
        }

        return await connection?.disconnect();
    };


    const onUserJoined = id => {
        console.log(`User ${id} Joined!`);
        users[id] = [0, 0, 0];
        remoteTracks.current[id] = [null, null];
        setUsers({ ...users });
    };

    const onUserLeft = id => {
        console.log(`User ${id} left!`);
        delete users[id];
        setUsers({ ...users });
    };

    const onMessgeReceived = (r, data) => {
        switch (data.type) {
            case "pos":
                if (users[r._id][0] == data.x && users[r._id][1] == data.z && users[r._id][2] == data.r){
                    return;
                }
                users[r._id] = [data.x, data.z, data.r];
                setUsers({ ...users });
                break;
            default:
                break;
        }
    };

    const onConnectionSuccess = () => {
        setConnected(true);
        room.on(conf.TRACK_ADDED, onRemoteTrack);
        room.on(conf.TRACK_REMOVED, track => { console.log(`track ${track} removed!`) });
        room.on(conf.CONFERENCE_JOINED, onConferenceJoined);
        room.on(conf.USER_JOINED, onUserJoined);
        room.on(conf.USER_LEFT, onUserLeft);
        room.on(conf.ENDPOINT_MESSAGE_RECEIVED, onMessgeReceived);
        room.join();

        A.registerComponent('send-pos', {
            tick: throttle(function () {
                const pos = this.el.object3D.position;
                const r_y = this.el.getAttribute("rotation").y;
                sendPos(pos.x, pos.z, r_y + 180);
            }, 1200)
        });
    };

    const sendPos = (x, z, r) => {
        room?.sendMessage({
            type: "pos",
            x: x.toFixed(3),
            z: z.toFixed(3),
            r: r.toFixed(3)
        });
    };

    const connect = async () => {

        JitsiMeetJS.setLogLevel(JitsiMeetJS.logLevels.ERROR);
        let flag = false;
        await navigator.mediaDevices.getUserMedia({ video: true })
            .then(() => {
                flag = true
            }, () => {
                console.log('Camera not available!');
            });

        const tracks = flag
            ? await JitsiMeetJS.createLocalTracks({
                devices: ['audio', 'video']
            })
            : await JitsiMeetJS.createLocalTracks({
                devices: ['audio']
            });

        onLocalTracks(tracks);

        connection.addEventListener(conn.CONNECTION_ESTABLISHED, () => setConnected(true));
        connection.addEventListener(conn.CONNECTION_FAILED, onConnectionFailed);
        connection.addEventListener(conn.CONNECTION_DISCONNECTED, disconnect);
        connection.connect();
    };

    const hangup = async () => {
        removeRemoteTracks();
        room && await room.leave();
        await disconnect();
    };

    const removeRemoteTracks = () => {
        console.log(Object.values(remoteTracks.current))
        Object.values(remoteTracks.current).forEach(tracks => {
            for (const track of tracks) {
                for (const t of track.containers) {
                    t.remove();
                }
            }
        })
    };

    useEffect(() => {
        if (connected) {
            onConnectionSuccess();
        }
    }, [connected]);

    useEffect(() => {
        if (connection) {
            connect();
        }
        return () => hangup();
    }, [connection]);

    return (
        <div>
            <Scene vr-mode-ui="enterVRButton: #button">
                {/* <a-sky src={sky} radius="15" shadow="receive: true"></a-sky> */}
                <a id="button" style={{ position: "fixed", zIndex: 999 }}>Enter VR Mode</a>
                <a-entity laser-controls="hand: right"></a-entity>
                <a-entity id="rightHand" hand-controls="hand: right; handModelStyle: lowPoly; color: #ffcccc"></a-entity>

                <Entity primitive="a-sky" radius="15" shadow="receive: true" src="aframe/sky.jpg" />
                <Entity primitive="a-plane" src={floor} repeat=" 60 60" rotation="-90 0 0" scale="25 25 1" shadow="receive: true" static-body />
                <a-entity progressive-controls></a-entity>

                {/* <!--movement--> */}
                <a-entity id='cameraRig'>
                    {/* <Entity id='head' primitive="a-camera" user-height="1.6" look-controls="pointerLockEnabled: true" send-pos> */}
                    <Entity id='head' primitive="a-camera" user-height="1.6" send-pos>

                        <Entity
                            primitive="a-cursor"
                            cursor={{ fuse: false }}
                            material={{ color: 'white', shader: 'flat', opacity: 0.75 }}
                            geometry={{ radiusInner: 0.005, radiusOuter: 0.007 }}
                        />
                    </Entity>
                    <a-entity id="left-hand" teleport-controls="cameraRig: #cameraRig; teleportOrigin: #head;" gearvr-controls></a-entity>
                    <a-entity id="right-hand" teleport-controls="cameraRig: #cameraRig; teleportOrigin: #head;" gearvr-controls></a-entity>
                </a-entity>

                <a-box data-brackets-id="514" color="#AA0000" depth="0.2" height="0.7" width="5" material="" geometry="" position="-1.0 0.35 1.5"></a-box>
                <a-box color="#AA0000" depth="2.4" height="0.1" width="5.5" position="-1.0 0.73905 1.5"></a-box>

                {
                    Object.keys(users).map(id => {
                        console.log(remoteTracks.current)
                        return id !== "me" &&
                            <Avatar key={id} id={id} pos={users[id]} track={(remoteTracks.current[id] && remoteTracks.current[id][1] != null) ? true : false} />
                    })
                }

                {/* <!--environment light--> */}
                <a-assets id="asset-container" ref={assetsRef}>

                </a-assets>

                {/* <!--radio--> */}
                <a-entity data-brackets-id="327" id="yellow" gltf-model="aframe/radio/scene.gltf" position="9.11851 0.45804 -7.96256" sound="src: mpi,Benjamin%20-%20Inferno.mp3" scale="0.2 0.2 0.2" rotation="0 17.71 0">
                    <a-sphere data-brackets-id="328" color="#00AA00" radius="0.2" position="-0.5 0.93319 0" play="" material="" geometry=""></a-sphere>
                    <a-sphere data-brackets-id="329" color="#AA0000" radius="0.2" position="0.5 1 0" stop="" material="" geometry=""></a-sphere>
                </a-entity>
                <a-box color="yellow" height="0.422" width="0.39" depth="0.75" position="9.11054 0.25999 -7.98199" data-brackets-id="440" ></a-box>

                {/* <!--celling--> */}
                <a-box color="white" height="1" width="20" depth="20" position="0 4.5 0"></a-box>
                {/* <!--wall--> */}
                <a-box data-brackets-id="600" color="white" position="9.9 2 0" material="" geometry="height: 4; width: 0.2; depth: 20"></a-box>
                <a-box data-brackets-id="627" color="white" position="0 2 -9.9" material="" geometry="height:4; width: 20; depth: 0.2"></a-box>
                <a-box data-brackets-id="845" color="white" position="7.3 2 7.5" material="" geometry="height: 4; width: 5; depth: 0.2"></a-box>
                <a-entity data-brackets-id="1806" gltf-model="aframe/window/scene.gltf" position="3.82 -1.0 7.7" scale="0.04 0.074 0.04" rotation="0 60 0"></a-entity>
                <a-box data-brackets-id="845" color="white" position="-7.3 2 7.5" material="" geometry="height: 4; width: 5; depth: 0.2"></a-box>
                <a-entity data-brackets-id="1808" gltf-model="aframe/window/scene.gltf" position="-3.86296 -1.0 7.7" scale="0.04 0.073 0.04" rotation="0 60 0"></a-entity>
                <a-box data-brackets-id="1083" color="white" position="0.04123 2 7.5" material="" geometry="height: 4; width: 5.82; depth: 0.2"></a-box>
                <a-box data-brackets-id="1637" color="white" position="-3.83305 3.75848 7.5" material="" geometry="height: 0.55; width: 1.96; depth: 0.2"></a-box>
                <a-box data-brackets-id="1637" color="white" position="3.89924 3.75848 7.5" material="" geometry="height: 0.55; width: 1.96; depth: 0.2"></a-box>

                <a-box data-brackets-id="303" color="white" position="-9.9 2 -5.01609" material="" geometry="height: 4; width: 0.2; depth: 9.94"></a-box>



            </Scene>


        </div>
    );
}
//};

export default WebXR;