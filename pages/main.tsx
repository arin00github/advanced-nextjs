import { useRef, useCallback } from 'react';
import { useState } from 'react';
import { useTodos } from '../src/redux/useTodos';

const Heading = ({ title }: { title: string }) => <h2>{title}</h2>;

const Box: React.FunctionComponent = ({ children }) => (
  <div style={{ padding: '1rem', fontWeight: 'bold' }}>{children}</div>
);

const Button: React.FunctionComponent<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & { title?: string }
> = ({ title, children, style, ...reset }) => (
  <button
    {...reset}
    style={{
      ...style,
      backgroundColor: 'red',
      color: 'white',
      fontSize: '24px',
    }}
  >
    {title ?? children}
  </button>
);

const Incrementer: React.FunctionComponent<{
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}> = ({ value, setValue }) => (
  <button onClick={() => setValue(value + 1)}>Add - {value}</button>
);

function UL<T>({
  items,
  render,
  itemClick,
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
> & {
  items: T[];
  render: (item: T) => React.ReactNode;
  itemClick: (item: T) => void;
}) {
  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <li onClick={() => itemClick(item)} key={index}>
          {render(item)}
        </li>
      ))}
    </ul>
  );
}

function Main() {
  const { todos, addTodo, removeTodo } = useTodos([
    { id: 0, text: 'Buy fruits', done: false },
    { id: 1, text: 'Meet friends', done: false },
    { id: 2, text: 'Read a book', done: false },
  ]);

  const newTodoRef = useRef<HTMLInputElement>();

  //useTodos에서 가져온 addTodo로 스케줄 추가하는 함수 제작
  const onAddTodo = useCallback(() => {
    if (newTodoRef.current) {
      addTodo(newTodoRef.current.value);
      newTodoRef.current.value = '';
    }
  }, [addTodo]);

  const [value, setValue] = useState(0);
  return (
    <div>
      <div>MainPage</div>
      <Heading title="Introduction" />
      <UL
        items={todos}
        itemClick={(item) => alert(item.id)}
        render={(todo) => (
          <>
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </>
        )}
      />
      <Incrementer value={value} setValue={setValue} />
      <div>
        <input type="text" ref={newTodoRef} />
        <Button onClick={onAddTodo}>Add Todo</Button>
      </div>
    </div>
  );
}

export default Main;
