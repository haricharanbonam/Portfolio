"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

export default function ClarityProvider() {
  useEffect(() => {
    const clarityId = process.env.NEXT_PUBLIC_PROJECT_ID;

    if (clarityId) {
        console.log(clarityId);
      Clarity.init(clarityId);
    }
  }, []);

  return null;
}