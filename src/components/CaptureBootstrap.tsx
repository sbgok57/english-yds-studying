'use client';

import { useEffect } from 'react';
import { installErrorCapture } from '@/lib/debug/capture';

export default function CaptureBootstrap() {
  useEffect(() => {
    installErrorCapture();
  }, []);

  return null;
}
