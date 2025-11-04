import { DemoContainerProps } from "../types/type";

export const DemoContainer: React.FC<DemoContainerProps> = ({
  title,
  children,
}) => (
  <div className="border border-gray-200 rounded-xl shadow-xl p-4 mb-10 bg-white max-w-lg mx-auto transform hover:scale-[1.01] transition duration-300">
    <h2 className="text-xl font-extrabold text-gray-700 mb-4 p-3 bg-indigo-50 rounded-t-lg border-b-2 border-indigo-200">
      {title}
    </h2>
    <div className="p-2 border border-dashed border-gray-100">{children}</div>
  </div>
);
