import { useAction } from '@/shared/hooks/useAction';
import { FC } from 'react';
import { AiFillGoogleSquare } from 'react-icons/ai';

export const GoogleButton: FC<{ text: string }> = ({ text }) => {
  const { googleSignIn } = useAction();
  return (
    <button
      type="button"
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full flex justify-center items-center"
      onClick={googleSignIn}
    >
      <div className="mr-2 h-5 w-5 mt-2">
        <AiFillGoogleSquare />
      </div>
      <span>{text}</span>
    </button>
  );
};
