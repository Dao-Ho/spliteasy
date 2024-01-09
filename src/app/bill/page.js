"use client";
import React, { useEffect, useState } from 'react';

export default function Bill({ searchParams }) {
  console.log(searchParams.people);
  return (
    <div>
      <h1>This is for the payment page</h1>
      <p>Number of people: {searchParams.people} </p>
    </div>
  );
}
