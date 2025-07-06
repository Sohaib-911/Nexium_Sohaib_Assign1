'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

// Creating a custom type for Qoute or a custom data structure
type Quote = {
  id: number;
  topic: string;
  text: string;
}

// Creating an array of quotes 
const QuoteData: Quote[] = [
  { id: 1, topic: 'Variables', text: 'Variables are used to store data in memory.' },
  { id: 2, topic: 'Variables', text: 'Use meaningful names for variables.' },
  { id: 3, topic: 'Variables', text: 'Python variables do not need explicit declaration.' },

  { id: 4, topic: 'Data Types', text: 'Python has built-in data types like int, float, str, and bool.' },
  { id: 5, topic: 'Data Types', text: 'Use type() to check the data type.' },
  { id: 6, topic: 'Data Types', text: 'Strings are sequences of characters.' },

  { id: 7, topic: 'Lists', text: 'Lists are ordered and changeable.' },
  { id: 8, topic: 'Lists', text: 'You can store different data types in one list.' },
  { id: 9, topic: 'Lists', text: 'Use append() to add items to a list.' },

  { id: 10, topic: 'Tuples', text: 'Tuples are ordered but immutable.' },
  { id: 11, topic: 'Tuples', text: 'Use parentheses () to define a tuple.' },
  { id: 12, topic: 'Tuples', text: 'Tuples can be used as dictionary keys.' },

  { id: 13, topic: 'Dictionaries', text: 'Dictionaries store data as key-value pairs.' },
  { id: 14, topic: 'Dictionaries', text: 'Keys must be unique and immutable.' },
  { id: 15, topic: 'Dictionaries', text: 'Use dict[key] to access a value.' },

  { id: 16, topic: 'Sets', text: 'Sets are unordered collections of unique items.' },
  { id: 17, topic: 'Sets', text: 'Use add() to insert new elements.' },
  { id: 18, topic: 'Sets', text: 'Sets are useful for removing duplicates.' },

  { id: 19, topic: 'If Statements', text: 'if, elif, and else control conditional flow.' },
  { id: 20, topic: 'If Statements', text: 'Indentation is critical in Python.' },
  { id: 21, topic: 'If Statements', text: 'Conditions must evaluate to a boolean.' },

  { id: 22, topic: 'Loops', text: 'for loops iterate over sequences.' },
  { id: 23, topic: 'Loops', text: 'while loops run until a condition is false.' },
  { id: 24, topic: 'Loops', text: 'Use break and continue to control loop flow.' },

  { id: 25, topic: 'Functions', text: 'Define a function with def keyword.' },
  { id: 26, topic: 'Functions', text: 'Use parameters to pass data into functions.' },
  { id: 27, topic: 'Functions', text: 'Functions can return values using return.' },

  { id: 28, topic: 'Lambda Functions', text: 'Lambdas are anonymous functions.' },
  { id: 29, topic: 'Lambda Functions', text: 'Use for small, one-line operations.' },
  { id: 30, topic: 'Lambda Functions', text: 'Syntax: lambda x: x + 1' },

];

console.log(QuoteData);


export default function QuoteGenerator() {
  const [topic, setTopic] = useState('');
  const [filteredQuotes, setFilteredQuotes] = useState<Quote[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    const matches = QuoteData.filter(
      q => q.topic.toLowerCase() === topic.toLowerCase()
    );
    setFilteredQuotes(matches.slice(0, 3));
    setSubmitted(true);
  };

  return (

    // Main Container
    <div className="min-h-screen w-full bg-gray-900 flex flex-col items-center p-4 space-y-6">

      {/* Result Text */}
      {submitted && (
        <div className="text-center text-lg font-semibold text-white">
          {filteredQuotes.length > 0
            ? `Result: ${filteredQuotes.length} quote(s) found for "${topic}"`
            : `No quotes found for "${topic}"`}
        </div>
      )}

      {/* Quote Cards */}
      <div className="flex flex-wrap justify-center gap-4 mt-6 w-[1000px]">
        {filteredQuotes.map((quote, index) => (
          <Card key={index} className="bg-white text-secondary-foreground shadow-lg rounded-xlg w-64 h-30">
            <CardContent className="p-4 text-center">
              {quote.text}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Input & Button fixed at bottom */}
      <div className="fixed bottom-0 left-0 w-full bg-gray-900 p-4 shadow-inner flex justify-center">
        <div className="flex gap-2 w-full max-w-2xl items-center justify-center">
          <Input
            className="w-2/3 text-white bg-gray-800 border border-gray-600"
            placeholder="Enter a topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
          <Button className="bg-indigo-600 text-white hover:bg-indigo-700" onClick={handleSubmit}>
            Generate
          </Button>
        </div>
      </div>


    </div>

  );
}
