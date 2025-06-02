export const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-gray-100 py-10">
        <div className="text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Dried Mango ,  All rights reserved.
          </p>
        </div>
    </footer>
  );
}