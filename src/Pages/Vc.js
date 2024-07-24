import React, { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import SimplePeer from 'simple-peer';
import { v4 as uuidv4 } from 'uuid';

const socket = io('http://13.51.171.52:5000');

const iceServers = [
  { urls: 'stun:stun.l.google.com:19302' },
  // Additional STUN/TURN servers can be added here
];

const Vc = () => {
  const [stream, setStream] = useState(null);
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState('');
  const [callerSignal, setCallerSignal] = useState(null);
  const [callAccepted, setCallAccepted] = useState(false);
  const [idToCall, setIdToCall] = useState('');
  const [roomId, setRoomId] = useState('');
  const [userStream, setUserStream] = useState(null);

  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
      setStream(stream);
      if (myVideo.current) {
        myVideo.current.srcObject = stream;
      }
    });

    socket.on('offer', (data) => {
      setReceivingCall(true);
      setCaller(data.from);
      setCallerSignal(data.signal);
    });

    socket.on('answer', (data) => {
      setCallAccepted(true);
      connectionRef.current.signal(data.signal);
    });

    socket.on('candidate', (data) => {
      if (connectionRef.current) {
        connectionRef.current.signal(data.candidate);
      }
    });

    socket.on('user-joined', (id) => {
      setCaller(id);
    });

    return () => {
      socket.off('offer');
      socket.off('answer');
      socket.off('candidate');
      socket.off('user-joined');
    };
  }, []);

  const callUser = (id) => {
    const peer = new SimplePeer({
      initiator: true,
      trickle: false,
      config: { iceServers },
      stream: stream,
    });

    peer.on('signal', (data) => {
      socket.emit('offer', { signal: data, to: id, from: roomId });
    });

    peer.on('stream', (userStream) => {
      setUserStream(userStream);
      if (userVideo.current) {
        userVideo.current.srcObject = userStream;
      }
    });

    peer.on('error', (err) => console.error('Peer Error:', err));

    connectionRef.current = peer;
  };

  const answerCall = () => {
    setCallAccepted(true);
    const peer = new SimplePeer({
      initiator: false,
      trickle: false,
      config: { iceServers },
      stream: stream,
    });

    peer.on('signal', (data) => {
      socket.emit('answer', { signal: data, to: caller, from: roomId });
    });

    peer.on('stream', (userStream) => {
      setUserStream(userStream);
      if (userVideo.current) {
        userVideo.current.srcObject = userStream;
      }
    });

    peer.signal(callerSignal);

    connectionRef.current = peer;
  };

  const createRoom = () => {
    const newRoomId = uuidv4(); // Generate a unique Room ID
    setRoomId(newRoomId);
    socket.emit('join', newRoomId);
    console.log(`Created room with ID: ${newRoomId}`);
  };

  const joinRoom = (room) => {
    socket.emit('join', room);
    setRoomId(room);
    console.log(`Joined room with ID: ${room}`);
  };

  return (
    <div>
      <div>
        <video playsInline muted ref={myVideo} autoPlay style={{ width: '300px' }} />
        <video playsInline ref={userVideo} autoPlay style={{ width: '300px' }} />
      </div>
      <div>
        <button onClick={createRoom}>Create Room</button>
        <input
          type="text"
          value={idToCall}
          onChange={(e) => setIdToCall(e.target.value)}
          placeholder="ID to call"
        />
        <button onClick={() => callUser(idToCall)}>Call</button>
        {receivingCall && !callAccepted ? (
          <div>
            <h1>{caller} is calling...</h1>
            <button onClick={answerCall}>Answer</button>
          </div>
        ) : null}
        <input
          type="text"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          placeholder="Room ID"
        />
        <button onClick={() => joinRoom(roomId)}>Join Room</button>
      </div>
    </div>
  );
};

export default Vc;
