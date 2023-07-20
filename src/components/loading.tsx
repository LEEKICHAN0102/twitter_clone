import { Spinner } from "@chakra-ui/spinner";

export default function Loading() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Spinner className="w-6 h-6 text-white" />
    </div>
  );
}