import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, SendHorizonal, Bot } from 'lucide-react'

import { communicateList, toeicList, ieltsList } from '@/features/products/data/products'
import type { Product } from '@/features/products/types/product.type'
import type { Message, ChatbotProps } from '@/features/chatbot/types/chatbot.type'

const keywords = ['Giao tiếp', 'IELTS', 'TOEIC']

const generateReplyAndSuggestions = (text: string): { reply: string; suggestions: Product[] } => {
  const lower = text.toLowerCase()

  if (lower.includes('giao tiếp')) {
    return {
      reply: 'Bạn nên học các khoá giao tiếp cơ bản sau:',
      suggestions: communicateList.slice(0, 2),
    }
  }

  if (lower.includes('ielts')) {
    return {
      reply: 'Bạn quan tâm đến IELTS? Đây là vài gợi ý chất lượng:',
      suggestions: ieltsList.slice(0, 2),
    }
  }

  if (lower.includes('toeic')) {
    return {
      reply: 'Dưới đây là khoá học TOEIC được đề xuất cho bạn:',
      suggestions: toeicList.slice(0, 2),
    }
  }

  return {
    reply: 'Tôi chưa hiểu rõ ý bạn. Bạn có thể hỏi về khoá học IELTS, TOEIC, giao tiếp,...',
    suggestions: [],
  }
}

const Chatbot = ({ onSelectProduct }: ChatbotProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const messagesEndRef = useRef<HTMLDivElement | null>(null)

  const sendMessage = () => {
    if (!input.trim()) return

    const userMsg: Message = {
      id: Date.now(),
      text: input,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString(),
    }

    setMessages((prev) => [...prev, userMsg])
    setInput('')

    setTimeout(() => {
      const { reply, suggestions } = generateReplyAndSuggestions(userMsg.text)

      const botReply: Message = {
        id: Date.now() + 1,
        text: reply,
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString(),
      }

      setMessages((prev) => [...prev, botReply])

      if (suggestions.length > 0) {
        const suggestionMessages = suggestions.map(
          (product): Message => ({
            id: Date.now() + Math.random(),
            sender: 'suggestion',
            timestamp: '',
            product,
          })
        )

        setMessages((prev) => [...prev, ...suggestionMessages])
      }
    }, 500)
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group fixed bottom-16 right-2 z-40 rounded-full bg-primary p-3 text-white shadow-lg hover:bg-orange-600 md:bottom-8 md:right-8"
        >
          <MessageCircle className="h-8 w-8 md:h-10 md:w-10" />

          <div className="absolute -top-10 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white opacity-0 transition group-hover:opacity-100">
            Trò chuyện cùng Chatbot
          </div>
        </button>
      )}

      {isOpen && (
        <motion.div
          drag
          dragConstraints={{
            left: 0,
            right: window.innerWidth - 320,
            top: 0,
            bottom: window.innerHeight - 500,
          }}
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="fixed bottom-16 right-6 z-50 flex h-[480px] w-[320px] flex-col overflow-hidden rounded-xl border bg-white shadow-xl md:bottom-12 md:right-12"
        >
          <div className="flex cursor-move items-center justify-between bg-primary px-4 py-2 font-semibold text-white">
            <span>Trợ lý AI</span>
            <button onClick={() => setIsOpen(false)} className="text-md text-white hover:text-gray-200">
              ✕
            </button>
          </div>

          <div className="flex-1 space-y-2 overflow-y-auto p-3 text-sm">
            {messages.map((msg) => {
              if (msg.sender === 'suggestion' && 'product' in msg) {
                const product = msg.product
                return (
                  <div
                    key={msg.id}
                    onClick={() => onSelectProduct(product)}
                    className="mt-2 max-w-full cursor-pointer rounded-lg border p-2 text-sm shadow-sm hover:bg-gray-100"
                  >
                    <img src={product.image} alt={product.name} className="h-24 w-full rounded object-cover" />
                    <div className="mt-1 font-semibold">{product.name}</div>
                    <div className="text-xs text-gray-500">{product.description.slice(0, 60)}...</div>
                    <div className="mt-1 font-bold text-orange-500">{product.price.toLocaleString()}₫</div>
                  </div>
                )
              }

              if ('text' in msg) {
                return (
                  <div key={msg.id} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                    <div
                      className={`max-w-[80%] rounded-lg px-3 py-2 ${
                        msg.sender === 'user' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {msg.text}
                    </div>
                    <div className="mt-1 text-xs text-gray-400">
                      {msg.sender === 'bot' ? (
                        <span className="flex items-center gap-1">
                          <Bot size={14} /> {msg.timestamp}
                        </span>
                      ) : (
                        msg.timestamp
                      )}
                    </div>
                  </div>
                )
              }

              return null
            })}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t px-3 py-2">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                sendMessage()
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Bạn muốn học gì?"
                className="flex-1 rounded-md border px-3 py-1 text-sm focus:outline-primary"
              />
              <button type="submit" className="text-primary hover:text-orange-600">
                <SendHorizonal size={18} />
              </button>
            </form>

            <div className="mt-2 flex flex-wrap gap-2 text-xs text-gray-500">
              {keywords.map((k) => (
                <button key={k} onClick={() => setInput(k)} className="rounded-full border px-3 py-1 hover:bg-gray-100">
                  {k}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}

export default Chatbot
