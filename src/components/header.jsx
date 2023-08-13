export default function Header() {
  return (
    <>
      <header>
        <div>
          <nav
            className={`mx-auto px-3 py-2 md:px-6 md:py-4 w-full flex justify-between items-center`}
          >
            <h3 className={`text-[20px] md:text-[40px] font-bold`}>TrixNG</h3>
            <button
              className={`p-2 text-base md:p-3 bg-[#04148c] rounded-lg md:text-[22px] font-medium `}
            >
              Join Waitlist
            </button>
          </nav>
        </div>
      </header>
    </>
  );
}
