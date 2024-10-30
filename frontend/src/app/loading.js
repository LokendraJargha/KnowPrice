import Spinner from "@/components/common/Spinner";

export default function Loading() {
  return (
    <div className="text-center space-x-4 py-20 bg-customBg bg-white bg-opacity-50 h-screen">
      <h1 className="text-2xl font-extrabold text-customPurple py-8">
        <Spinner /> Lodaing....
      </h1>
      <p className="text-sm font-light">Hopefully not for too long..</p>
    </div>
  );
}
