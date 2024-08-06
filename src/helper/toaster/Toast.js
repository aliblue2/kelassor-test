"use client";
import { useEffect } from "react";
import { toast } from "react-toastify";

const Toast = ({ type, message }) => {
  useEffect(() => {
    toast[type](message);
  }, []);
};

export default Toast;
