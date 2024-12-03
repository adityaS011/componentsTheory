'use client';
import Input from '@/app/ui/Input';
import React, { useState } from 'react';

type Comments = {
  id: number;
  message: string;
  like: number;
  dislike: number;
  reply: Comments[];
};

const CommentInput: React.FC = () => {
  const [comment, setComment] = useState<string>('');
  const [comments, setComments] = useState<Comments[]>([]);

  const handleInput = (message: string, parentId: number | null = null) => {
    const newComment: Comments = {
      id: Date.now(),
      message,
      like: 0,
      dislike: 0,
      reply: [],
    };

    if (parentId === null) {
      setComments((prev) => [newComment, ...prev]);
    } else {
      setComments((prev) => addReplyToComment(prev, parentId, newComment));
    }
    setComment('');
  };

  const addReplyToComment = (
    comments: Comments[],
    parentId: number,
    reply: Comments
  ): Comments[] => {
    return comments.map((comment) => {
      if (comment.id === parentId) {
        return { ...comment, reply: [reply, ...comment.reply] };
      }
      return {
        ...comment,
        reply: addReplyToComment(comment.reply, parentId, reply),
      };
    });
  };

  return (
    <div className='w-full min-w-lg mx-auto p-4 gap-2 flex flex-col'>
      <div className='flex flex-row gap-2'>
        <Input
          setInput={setComment}
          input={comment}
          className='overflow-hidden bg-gray-100'
          placeholder='Add your comment...'
        />
        <button
          className='bg-blue-400 px-2 py-1 rounded-lg text-white'
          onClick={() => handleInput(comment)}
        >
          Submit
        </button>
      </div>

      <div className='w-full gap-4 flex flex-col bg-gray-300'>
        {comments.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            handleInput={handleInput}
          />
        ))}
      </div>
    </div>
  );
};

const CommentItem: React.FC<{
  comment: Comments;
  handleInput: (message: string, parentId: number | null) => void;
}> = ({ comment, handleInput }) => {
  const [replyOpen, setReplyOpen] = useState(false);
  const [replyMessage, setReplyMessage] = useState('');

  return (
    <div className='p-2 bg-slate-200 w-full px-4 py-2'>
      <div>{comment.message}</div>
      <div className='text-gray-600 opacity-95 flex flex-row gap-3 text-sm caret-transparent'>
        <div className='cursor-pointer hover:text-gray-700'>Like</div>
        <div className='cursor-pointer hover:text-gray-700'>Dislike</div>
        <div
          className='cursor-pointer hover:text-gray-700'
          onClick={() => setReplyOpen((prev) => !prev)}
        >
          Reply : {comment.reply.length}
        </div>
      </div>

      {replyOpen && (
        <div className='ml-4 mt-2 flex flex-col gap-2'>
          <div className='flex flex-row gap-2'>
            <input
              type='text'
              value={replyMessage}
              onChange={(e) => setReplyMessage(e.target.value)}
              className='flex-1 bg-gray-100 p-1 rounded'
              placeholder='Write a reply...'
            />
            <button
              className='bg-green-400 px-2 py-1 rounded-lg text-white'
              onClick={() => {
                handleInput(replyMessage, comment.id);
                setReplyMessage('');
              }}
            >
              Reply
            </button>
          </div>

          {comment.reply.length > 0 && (
            <div className='flex flex-col gap-2'>
              {comment.reply.map((reply) => (
                <CommentItem
                  key={reply.id}
                  comment={reply}
                  handleInput={handleInput}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CommentInput;
