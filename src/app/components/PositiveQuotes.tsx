"use client"

import { useEffect, useState } from 'react';

interface QuoteData {
  quote: string;
  author: string;
}

export default function PositiveQuotes () {
  const [quote, setQuote] = useState<string>('');
  const [author, setAuthor] = useState<string>('');

  useEffect(() => {
    // Fetch the quote data once when the component is mounted
    const fetchQuote = async () => {
      try {
        const response = await fetch('https://qapi.vercel.app/api/random');
        const data: QuoteData = await response.json(); // Type the response as QuoteData
        setQuote(data.quote);
        setAuthor(data.author);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchQuote(); 
  }, []); // Empty dependency array ensures it runs only on mount 

  return (
    <div className="flex justify-center items-center mt-10 p-16">
      <div className="bg-green-100 p-4 rounded-xl shadow-lg w-96">
        <blockquote className="text-xl text-green-700 font-semibold italic text-center mb-4">
          {quote}
        </blockquote>
        <p className="text-lg text-center text-green-700">- {author}</p>
      </div>
    </div>
  );
};