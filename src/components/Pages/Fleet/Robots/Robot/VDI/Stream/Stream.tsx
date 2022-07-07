/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useRef, useState, useEffect } from 'react';
// @ts-ignore
import GuacamoleKeyboard from '../../../../../../../utils/guacamoleKeyboard/guacamole-keyboard.ts';
import Button from '../../../../../../Button/Button';
import ChatScreen from '../ChatScreen/ChatScreen';

interface ICurrentUser {
  id: string;
  displayname: string;
  admin: boolean;
  muted: boolean;
}
interface IMessage {
  id: string;
  content: string;
  event: string;
}

const Stream = ({ port, ip }) => {
  const [currentUser, setCurrentUser] = useState<ICurrentUser>();
  const [users, setUsers] = useState<ICurrentUser[]>([]);
  const [message, setMessage] = useState<string>('');
  const [chatMessages, setChatMessages] = useState<IMessage[]>([]);
  const [controller, setController] = useState<string>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(50);
  const [connectionState, setConnectionState] = useState('');

  const messagesEndRef = useRef(null);
  const video = useRef<any>(null);
  const peer = useRef<any>(null);
  const candidate = useRef<any>(null);
  const channel = useRef<any>(null);
  const controlReq = useRef<any>(false);
  const client = useRef<any>(null);
  const overlay = useRef<any>();
  const keyboard = useRef<any>(null);

  /* Scroll chat to bottom on new message */
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  /* open or close chat screen */
  const handleChatStatus = () => {
    setIsChatOpen(!isChatOpen);
  };

  /* Request Access */
  const requestAccess = () => {
    if (!controlReq.current) {
      overlay.current?.focus();
      client.current.send(JSON.stringify({ event: 'control/request' }));
      controlReq.current = true;
    }
  };

  const releaseControl = () => {
    console.log(controlReq.current);
    if (controlReq.current) {
      client.current.send(JSON.stringify({ event: 'control/release' }));
      controlReq.current = false;
      console.log(controller);
    }
  };

  /* Change Screensize */
  const handleFullscreen = () => {
    video.current?.requestFullscreen();
  };

  /* Change Quality */
  const handleQualityChange = (e) => {
    overlay.current?.focus();
    if (Number(e.target.value) === 1080) {
      client.current.send(
        JSON.stringify({
          event: 'screen/set',
          width: 1920,
          height: 1080,
          rate: 50
        })
      );
    } else if (Number(e.target.value) === 720) {
      client.current.send(
        JSON.stringify({
          event: 'screen/set',
          width: 1280,
          height: 720,
          rate: 72
        })
      );
    } else if (Number(e.target.value) === 480) {
      client.current.send(
        JSON.stringify({
          event: 'screen/set',
          width: 480,
          height: 270,
          rate: 102
        })
      );
    }
  };

  const onTrack = (event: RTCTrackEvent) => {
    if (event.track.kind === 'video') {
      video.current!.srcObject = event.streams[0];
      video.current?.play();
    }
  };

  const onConnection = (event: any) => {
    setConnectionState(peer.current.connectionState);
    switch (connectionState) {
      case 'checking':
        setConnectionState('Checking');
        break;
      case 'connected':
        setConnectionState('Connected');
        break;
      case 'failed':
        setConnectionState('Failed');
        break;
      case 'disconnected':
        setConnectionState('Disconnected');
        break;
    }
    video.current.srcObject = event.streams[0];
  };

  const handleChatMessage = (e) => {
    e.preventDefault();
    if (message.length > 0) {
      client.current.send(JSON.stringify({ event: 'chat/message', content: message }));
      setMessage('');
    }
  };

  const handleMuteStatus = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e) => {
    setVolume(Number(e.target.value));
  };

  let buffer: ArrayBuffer;
  let payload: DataView;
  useEffect(() => {
    client.current = new WebSocket(`ws://${ip}:${port}/ws?password=secret`);
    video.current?.focus();
    keyboard.current = GuacamoleKeyboard();
    keyboard.current.onkeydown = (key: number) => {
      buffer = new ArrayBuffer(11);
      payload = new DataView(buffer);
      payload.setUint8(0, 0x03);
      payload.setUint16(1, 8, true);
      payload.setBigUint64(3, BigInt(key), true);
      if (typeof buffer !== 'undefined' && channel.current!.readyState === 'open') {
        channel.current!.send(buffer);
      }
    };
    keyboard.current.onkeyup = (key: number) => {
      buffer = new ArrayBuffer(11);
      payload = new DataView(buffer);
      payload.setUint8(0, 0x04);
      payload.setUint16(1, 8, true);
      payload.setBigUint64(3, BigInt(key), true);
      console.log('type:', typeof buffer);
      if (typeof buffer !== 'undefined') {
        channel.current!.send(buffer);
      }
    };
    keyboard.current.listenTo(overlay.current);
    overlay.current.liste;
    video.current?.addEventListener('mousemove', (key) => {
      // 0x01;
      if (typeof video.current === 'undefined') return;

      const rect = video.current?.getBoundingClientRect();
      if (rect) {
        buffer = new ArrayBuffer(7);
        payload = new DataView(buffer);
        payload.setUint8(0, 0x01);
        payload.setUint16(1, 4, true);
        payload.setUint16(3, Math.round((1920 / rect.width) * (key.clientX - rect.left)), true);
        payload.setUint16(5, Math.round((1080 / rect.height) * (key.clientY - rect.top)), true);
        if (typeof buffer !== 'undefined' && channel.current.readyState === 'open') {
          channel.current!.send(buffer);
        }
      }
    });
    video.current?.addEventListener('mouseenter', () => {
      overlay.current!.focus();
    });
    video.current?.addEventListener('mousedown', (key) => {
      // 0x01;
      key.preventDefault();
      overlay.current!.focus();
      if (controlReq) {
        buffer = new ArrayBuffer(11);
        payload = new DataView(buffer);
        payload.setUint8(0, 0x03);
        payload.setUint16(1, 8, true);
        payload.setBigUint64(3, BigInt(key.button + 1), true);
        if (typeof buffer !== 'undefined' && channel.current.readyState === 'open') {
          channel.current!.send(buffer);
        }
      }
    });
    video.current?.addEventListener('wheel', (key) => {
      // 0x01;
      if (controlReq) {
        buffer = new ArrayBuffer(7);
        payload = new DataView(buffer);
        payload.setUint8(0, 0x02);
        payload.setUint16(1, 4, true);
        payload.setInt16(3, key.deltaX / -100, true);
        payload.setInt16(5, key.deltaY / -100, true);
        if (typeof buffer !== 'undefined' && channel.current.readyState === 'open') {
          channel.current!.send(buffer);
          console.log('cancelled!');
        }
      }
    });
    video.current?.addEventListener('mouseup', (key) => {
      // 0x01;
      if (controlReq) {
        console.log(key.button + 1);
        buffer = new ArrayBuffer(11);
        payload = new DataView(buffer);
        payload.setUint8(0, 0x04);
        payload.setUint16(1, 8, true);
        payload.setBigUint64(3, BigInt(key.button + 1), true);
        console.log('clicked');
        if (typeof buffer !== 'undefined' && channel.current.readyState === 'open') {
          channel.current!.send(buffer);
          console.log('cancelled!');
        }
      }
    });

    const onError = (e: any) => {
      console.log('error:', e.error);
    };

    client.current.onmessage = (e: any) => {
      const { event, ...payload } = JSON.parse(e.data);
      if (event === 'member/connected') {
        setCurrentUser(payload);
      }
      if (event === 'control/locked') {
        setController(payload.id);
        client.current.send(JSON.stringify({ event: 'control/keyboard', layout: 'us' }));
        client.current.send(
          JSON.stringify({
            event: 'control/keyboard',
            capsLock: false,
            numLock: true,
            scrollLock: false
          })
        );
      }
      if (event === 'control/release') {
        setController(null);
      }
      if (event === 'signal/candidate') {
        const newPayload = JSON.parse(payload.data);
        if (peer.current) {
          peer.current.addIceCandidate(newPayload);
        } else {
          candidate.current = newPayload;
        }
      }
      if (event === 'signal/provide') {
        const { sdp, lite, ice, id } = payload;
        peer.current = new RTCPeerConnection();
        peer.current.ontrack = onTrack.bind(this);
        peer.current.onconnection = onConnection.bind(this);
        peer.current.addTransceiver('video', { direction: 'recvonly' });
        peer.current.addTransceiver('audio', { direction: 'recvonly' });

        channel.current = peer.current.createDataChannel('data');
        channel.current.onerror = onError.bind(this);
        peer.current.addIceCandidate(candidate.current);
        peer.current.setRemoteDescription({ type: 'offer', sdp });
        peer.current.onconnectionstatechange = (event: any) => {
          if (peer.current.connectionState === 'connected') {
            video.current?.focus();
            video.current?.play();
            setConnectionState('Connected');
          }
        };

        peer.current.createAnswer().then((d: any) => {
          peer.current!.setLocalDescription(d);
          client.current!.send(
            JSON.stringify({
              event: 'signal/answer',
              sdp: d.sdp,
              displayname: 'neko'
            })
          );
        });
      }
      if (event === 'member/list') {
        const { members } = payload;
        members.map((memb) => {
          const findMember = users.find((x) => x.displayname === memb.displayname);
          if (!findMember) {
            setUsers([...users, memb]);
          }
        });
      }
      if (event === 'chat/message') {
        setChatMessages((prev) => [...prev, payload]);
        setMessage('');
        scrollToBottom();
      }
    };
    return () => {
      client.current.close();
      keyboard.current.reset();
      // document.removeEventListener()
    };
  }, []);

  return (
    <div className="h-screen flex">
      {/* DISPLAY AND SETTINGS */}
      <div className={`${isChatOpen ? 'w-[80vw]' : 'w-full'} flex flex-col justify-between h-full`}>
        {/* MAIN FRAME */}
        <div className="flex justify-center items-center h-[80vh]">
          <video
            onContextMenu={(e) => e.preventDefault()}
            playsInline
            ref={video}
            autoPlay
            muted={isMuted}
            controls={false}
            style={{
              cursor: 'none',
              backgroundColor: '#000'
            }}
          />
        </div>
        {/* CONTROLS */}
        <div
          className={`${
            isChatOpen ? 'w-[80vw]' : 'w-screen'
          } flex justify-around items-center bg-layer-200 border-t border-layer-600 relative p-4`}
        >
          {/* OPTIONS */}
          <div className="flex flex-col h-full">
            <p className="text-lowContrast text-sm uppercase font-bold">Settings</p>
            <div className="flex flex-col items-center justify-center">
              {/* VOLUME */}
              <div className="flex items-center justify-start">
                {isMuted ? (
                  <img src="/icons/volume_off.svg" onClick={handleMuteStatus} />
                ) : (
                  <img src="/icons/volume.svg" onClick={handleMuteStatus} />
                )}
                <input
                  type="range"
                  min="1"
                  max="100"
                  onChange={handleVolumeChange}
                  className="ml-2"
                />
              </div>
              {/* QUALITY */}
              <div className="flex items-center justify-start w-full">
                <img src="/icons/hd.svg" />
                <select
                  onChange={handleQualityChange}
                  className="bg-layer-100 border border-layer-600 ml-2 w-full"
                >
                  <option value={1080}>1080p</option>
                  <option value={720}>720p</option>
                  <option value={480}>480p</option>
                </select>
              </div>
            </div>
          </div>
          {/* STATUS */}
          <div className="flex flex-col h-full">
            <div className="p-1">
              <p className="text-sm text-lowContrast font-bold uppercase">Connection</p>
              <p className="text-green-300 text-base font-bold">Healthy</p>
            </div>
            <div className="p-1">
              <p className="text-sm text-lowContrast font-bold uppercase">Controller</p>
              {controller ? (
                <div className="flex items-center justify-center">
                  <p className="text-white text-base font-bold mr-2">
                    {users.find((user) => user.id === controller)?.displayname}
                  </p>

                  <Button
                    disabled={false}
                    style="primary"
                    type="button"
                    handleClick={releaseControl}
                    text="Release Control"
                  />
                </div>
              ) : (
                <div>
                  <Button
                    disabled={false}
                    style="primary"
                    type="button"
                    handleClick={requestAccess}
                    text="Request Access"
                  />
                </div>
              )}
            </div>
          </div>
          {/* VIEWERS */}
          <div className="flex flex-col h-full">
            <p className="text-lowContrast text-sm uppercase font-bold">Viewers</p>
            <div>
              {users.map((user) => (
                <p key={user.id} className="flex items-center">
                  {user.displayname}
                  {user.admin && <span className="font-bold text-sm">(Admin)</span>}
                </p>
              ))}
            </div>
          </div>
          {/* BUTTONS */}
          <div className="flex flex-col items-center">
            <div
              onClick={handleFullscreen}
              className="p-1 bg-layer-400 hover:bg-layer-500 cursor-pointer border border-layer-600 my-1"
            >
              <img src="/icons/fullscreen.svg" />
            </div>
            <div
              className="p-1 bg-layer-400 hover:bg-layer-500 cursor-pointer border border-layer-600 my-1"
              onClick={handleChatStatus}
            >
              <img src={isChatOpen ? '/icons/chat.svg' : '/icons/chatOff.svg'} />
            </div>
          </div>
          {/* <button onClick={() => video.current?.play()}>Play Mate</button> */}
          {/*  <button
          onClick={() => {
            overlay.current!.focus();
          }}
        >
          focus
        </button> */}

          <div ref={overlay} tabIndex={1}></div>
        </div>
      </div>
      {isChatOpen ? (
        <ChatScreen
          message={message}
          setMessage={setMessage}
          chatMessages={chatMessages}
          currentUser={currentUser}
          messagesEndRef={messagesEndRef}
          handleChatMessage={handleChatMessage}
        />
      ) : (
        ''
      )}
      {/* CHAT SCREEN */}
    </div>
  );
};

export default Stream;
