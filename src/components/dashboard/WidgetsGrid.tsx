"use client";

import React from "react";
import { SimpleWidget } from "./Simplewidget";
import { useAppSelector } from "@/src/store";

export const WidgetsGrid = () => {
  const counter = useAppSelector((state) => state.counterReducer.count);

  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget
        title={String(counter)}
        subtitle="Counter current value"
        href="/dashboard/counter"
        label="Counter widget"
      />
    </div>
  );
};
