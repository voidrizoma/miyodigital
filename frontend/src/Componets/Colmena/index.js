import React from "react";
import Layout from "../Layout"
import Cipher from "./Cipher";
import Future from "./Furure";
import Best from "./BestFriend";

export default function index() {
  return (
    <div>
      <Layout>
      <Cipher />
      <Future />
      <Best />
      </Layout>
    </div>
  );
}
