export default function BalanceComponent() {
    return (
      <div className="flex flex-col h-full bg-dark-blue rounded">
        <div className="flex-1 flex justify-start items-center ml-10">
          <p className="text-cream-white text-5xl">₹5000 <span className="text-cream-white text-base ">Balance</span></p>
        </div>
        <div className="flex-1 flex justify-end items-center mr-10">
          <p className="text-cream-white text-2xl">₹1000 <span className="text-cream-white text-base ">Spent</span></p>
        </div>
      </div>
    );
  }
  