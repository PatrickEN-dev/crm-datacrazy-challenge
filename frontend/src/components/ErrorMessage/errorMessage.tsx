interface IUserNotFoundProps {
  firstMessage: string;
  secondMessage?: string;
}

const ErrorMessage = ({ firstMessage, secondMessage }: IUserNotFoundProps) => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2 p-5">
      <h2 className="font-bold">{firstMessage}</h2>
      {secondMessage && <h2 className="font-bold">{secondMessage}</h2>}
    </div>
  );
};

export default ErrorMessage;
