import { BubbleChat } from 'flowise-embed-react'
import icon from '../../assets/icons/bot-icon.jpg'

const Chat = () => {
    return (
        <BubbleChat
            chatflowid="3697be62-2174-4cb4-8027-ea8ec062a26a"
            apiHost="https://leandrontl-chatbot.hf.space"
            theme={{
                button: {
                    backgroundColor: "#93f294",
                    right: 20,
                    bottom: 20,
                    size: "medium",
                    iconColor: "white",
                    // customIconSrc: 
                },
                chatWindow: {
                    welcomeMessage: "Olá, sou a Clean, a assistente virtual da CleanDiscard. Como posso te ajudar?",
                    backgroundColor: "#ffffff",
                    height: 600,
                    width: 400,
                    fontSize: 16,
                    poweredByTextColor: "#303235",
                    botMessage: {
                        backgroundColor: "#f7f8ff",
                        textColor: "#303235",
                        showAvatar: true,
                        avatarSrc: icon,
                    },
                    userMessage: {
                        backgroundColor: "#93f294",
                        textColor: "#ffffff",
                        showAvatar: true,
                        avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
                    },
                    textInput: {
                        placeholder: "Digite sua mensagem aqui...",
                        backgroundColor: "#ffffff",
                        textColor: "#303235",
                        sendButtonColor: "#93f294",
                    }
                }
            }}
        />
    );
};

export default Chat;