import { BubbleChat } from 'flowise-embed-react'

const Chat = () => {
    return (
        <BubbleChat
            chatflowid="c44f7768-ae8d-4f2b-b65c-4a8d68bc2607"
            apiHost="https://leandrontl-chatbot.hf.space"
            theme={{
                button: {
                    backgroundColor: "#008000",
                    right: 20,
                    bottom: 20,
                    size: "medium",
                    iconColor: "white",
                    // customIconSrc: 
                },
                chatWindow: {
                    welcomeMessage: "Olá, sou a Clean, a assistente virtual da CleanDiscard. Como posso te ajudar?",
                    backgroundColor: "#ffffff",
                    height: 700,
                    width: 400,
                    fontSize: 16,
                    poweredByTextColor: "#303235",
                    botMessage: {
                        backgroundColor: "#f7f8ff",
                        textColor: "#303235",
                        showAvatar: true,
                        avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png",
                    },
                    userMessage: {
                        backgroundColor: "#008000",
                        textColor: "#ffffff",
                        showAvatar: true,
                        avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
                    },
                    textInput: {
                        placeholder: "Digite sua mensagem aqui...",
                        backgroundColor: "#ffffff",
                        textColor: "#303235",
                        sendButtonColor: "#008000",
                    }
                }
            }}
        />
    );
};

export default Chat;