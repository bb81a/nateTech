/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */

import * as React from 'react';

export interface IntroProps {
  children?: React.ReactNode;
}

function Intro({children}: IntroProps) {
  return (
    <div className="font-display text-[18px]  text-primary dark:text-primary-dark leading-relaxed">
      {children}
    </div>
  );
}

export default Intro;
