"use client";
//TicketMessage component
type TicketMessageProps = { message: string; left?: boolean };
const TicketMessage = ({ message, left = false }: TicketMessageProps) => {
  return (
    <div className={`${left ? "self-end" : "self-start"} flex flex-col`}>
      <div
        className={`bg-primary-base text-white px-4 py-1 ${
          left ? "rounded-[20px_8px_8px_0px]" : "rounded-[8px_20px_0_8px]"
        } `}
      >
        {message}
      </div>
      <div
        className={`h-[20px] w-[10px] ${
          left ? "self-end rounded-tl-full " : " rounded-tr-full "
        } shadow-[0px_-10px_0px_0px_theme(colors.primary.base)]`}
      />
    </div>
  );
};

export default TicketMessage;
