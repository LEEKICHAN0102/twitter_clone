import React from "react";

interface LayoutProps{
  title?:string;
  children:React.ReactNode;
}

export default function Layout({title,children}:LayoutProps){
  return (
      <div>
        {children}
      </div>  
  );
}