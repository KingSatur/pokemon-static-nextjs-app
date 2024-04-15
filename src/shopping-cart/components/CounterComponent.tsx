"use client";

import { useAppDispatch, useAppSelector } from "@/src/store";
import { add, initCounter, substract } from "@/src/store/counter/counterSlice";
import React, { useEffect } from "react";

interface Props {
  value?: number;
}

const getCounter = async (): Promise<any> => {
  const response = await fetch("/api/counter");
  const data = await response.json();
  return data.count;
};

const CounterComponent = ({ value = 10 }: Props) => {
  const counter = useAppSelector((state) => state.counterReducer.count);
  const dispath = useAppDispatch();

  useEffect(() => {
    getCounter().then((data) => {
      dispath(initCounter(data));
    });
  }, []);

  return (
    <>
      <span className="text-9xl">{counter}</span>
      <div className="flex">
        <button
          onClick={() => dispath(add(1))}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          +1
        </button>

        <button
          onClick={() => dispath(substract(1))}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          -1
        </button>
      </div>
    </>
  );
};

export default CounterComponent;
