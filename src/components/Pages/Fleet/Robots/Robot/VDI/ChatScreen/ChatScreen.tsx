import React from 'react';

interface IChatScreen {
  message: any;
  setMessage: any;
  chatMessages: any;
  currentUser: any;
  messagesEndRef: any;
  handleChatMessage: any;
}

const ChatScreen = ({
  message,
  setMessage,
  chatMessages,
  currentUser,
  messagesEndRef,
  handleChatMessage
}: IChatScreen) => {
  return (
    <div className="flex flex-col justify-center max-w-[20vw] w-[20vw] bg-layer-300 h-full border-l border-layer-600">
      <div className="h-[85vh] p-4 overflow-scroll">
        {chatMessages.length > 0 ? (
          <ul>
            {chatMessages.map((chatMessage) => (
              <li
                key={chatMessage.content}
                className="flex flex-col items-start justify-start my-4 w-full"
              >
                <div className="flex items-start justify-center">
                  <div className="w-10 h-10 rounded-full bg-layer-500"></div>
                  <p className="text-sm font-bold text-lowContrast uppercase pl-2">
                    {currentUser && currentUser.displayname}
                  </p>
                </div>
                <div className="w-full max-w-100 py-2 overflow-auto ">
                  <p className="text-white text-sm break-words whitespace-pre-line">
                    {chatMessage.content}
                  </p>
                </div>
              </li>
            ))}
            <li ref={messagesEndRef} />
          </ul>
        ) : (
          <div className="flex justify-center items-center h-[60vh] text-lowContrast">
            <p>Chat here!</p>
          </div>
        )}
      </div>
      <form className="h-[15vh] flex flex-col w-full" onSubmit={(e) => handleChatMessage(e)}>
        <textarea
          className="border resize-none border-layer-500 bg-layer-200 text-white m-2 p-2 max-w-full h-[10vh] focus:outline focus:outline-layer-600 rounded"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className="mx-2 h-[5vh] max-w-full bg-primary-100 hover:bg-primary-200 font-bold rounded"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatScreen;
