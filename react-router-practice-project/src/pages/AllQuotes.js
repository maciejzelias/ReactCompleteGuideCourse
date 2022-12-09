import React from "react";

import QuoteList from "../components/quotes/QuoteList";
const DUMMY_QUOTES = [
  { id: "q1", author: "Maciej", text: "Learing react is awesome !" },
  { id: "q2", author: "Maciek", text: "Learing react is grat !" },
];

export default function AllQuotes() {
  return <QuoteList quotes={DUMMY_QUOTES} />;
}
