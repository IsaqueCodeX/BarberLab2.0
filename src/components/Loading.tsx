import { Loader2 } from 'lucide-react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Loader2 className="h-16 w-16 text-primary animate-spin" />
    </div>
  );
};

export default Loading;