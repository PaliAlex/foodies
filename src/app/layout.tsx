import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import React, {ReactNode} from "react";

import './globals.css';
import {MainHeader} from "@/app/components/main-header";

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

interface IRootLayoutProps {
    children?: ReactNode;
}

const RootLayout: React.FC<IRootLayoutProps> = ({ children }) => {
  return (
      <html lang="en">
      <body>
            <MainHeader />
            {children}
      </body>
      </html>
  );
}

export default RootLayout;