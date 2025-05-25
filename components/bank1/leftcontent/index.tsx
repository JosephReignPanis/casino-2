"use client";

import Image from "next/image";
import { useState } from "react";
import { headerlist } from "@/const/sidebar";
import Tabs from "../tabs";

export default function LeftContent() {
  return (
    <>
      <Tabs headerlist={headerlist} />
    </>
  );
}
