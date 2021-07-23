import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <ul className="navigation">
        <li>
          <Link href="/main">main</Link>
        </li>
        <li>
          <Link href="/todo/todo-page1">todo</Link>
        </li>
      </ul>
    </div>
  );
}
