'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { SendHorizonal } from 'lucide-react';
import { useState } from 'react';

interface Message {
    role: 'user' | 'ai';
    content: string;
}

export default function ChatUI() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');

    // Should add some sanitation to the input
    const sendMessage = () => {
        if (!input.trim()) return;

        const newMessage: Message = { role: 'user', content: input };
        setMessages([...messages, newMessage]);
        setInput('');

        setTimeout(() => {
            setMessages((prev) => [...prev, { role: 'ai', content: 'This is a response from the AI.' }]);
        }, 1000);
    };

    return (
        <Card className='w-full max-w-6xl mx-auto p-4 flex flex-col h-[70vh] border rounded-xl shadow-md dark:border-neutral-600'>
            <ScrollArea className='flex-1 p-2 space-y-1 overflow-y-auto rounded-md'>
                {messages.map((msg, idx) => (
                    <div
                        key={idx}
                        className={`p-3 rounded-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl m-2 ${
                            msg.role === 'user'
                                ? 'bg-blue-500 text-white self-end'
                                : 'bg-gray-200 text-black self-start'
                        }`}
                    >
                        {msg.content}
                    </div>
                ))}
            </ScrollArea>
            <div className='flex gap-2 p-4 border-t dark:border-neutral-700'>
                <Input
                    type='text'
                    placeholder='Type a message...'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className='flex-1 '
                />
                <Button onClick={sendMessage} variant='default'>
                    <SendHorizonal className='w-5 h-5' />
                </Button>
            </div>
        </Card>
    );
}
