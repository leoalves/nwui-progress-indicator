import * as React from 'react';
import { View } from 'react-native';

import { ProgressIndicator } from '~/components/nativewindui/ProgressIndicator';

export default function ProgressIndicatorExample() {
  const [progress, setProgress] = React.useState(13);
  let id: ReturnType<typeof setInterval> | null = null;
  React.useEffect(() => {
    if (!id) {
      id = setInterval(() => {
        setProgress((prev) => (prev >= 99 ? 0 : prev + 5));
      }, 1000);
    }
    return () => {
      if (id) clearInterval(id);
    };
  }, []);
  return (
    <View className="p-4">
      <ProgressIndicator value={progress} />
    </View>
  );
}