export default function Footer() {
  return (
    <>
      <footer
        className={`text-center fixed bottom-0 mt-[100px] font-medium w-full bg-[#053d87] p-4`}
      >
        © {new Date().getFullYear()} - TrixNG All Rights Reserved.
      </footer>
    </>
  );
}
