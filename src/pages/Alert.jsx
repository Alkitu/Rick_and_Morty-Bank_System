export function Alert({ message }) {
  return (
    <div
      className=" border border-white text-white px-4 py-3 rounded relative mb-2 text-center"
      role="alert"
    >
      <span className="sm:inline block">{message}</span>
    </div>
  );
}
