interface SuccessMessageProps {
    message: string;
  }
  
  export default function SuccessMessage({ message }: SuccessMessageProps) {
    return (
      <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded">
        {message}
      </div>
    );
  }