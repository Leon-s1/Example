import React, { useState, useRef } from 'react'

interface TodoFormProps {
  onAdd(title: string): void
}

// export function TodoForm() {
export const TodoForm: React.FC<TodoFormProps> = (props) => {
  // const [title, setTitle] = useState<string>('')  1ый способ обработки инпутов схуком useState

  const ref = useRef<HTMLInputElement>(null) //эту ссылку привязываем к инпуту.  2ой способ обработки инпутов с хуком useRef

  // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {  1ый способ обработки инпутов схуком useState
  //   setTitle(event.target.value)  1ый способ обработки инпутов схуком useState
  // }

  const KeyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      props.onAdd(ref.current!.value)
      // console.log(ref.current!.value) //2ой способ обработки инпутов с хуком useRef
      ref.current!.value = '' //2ой способ обработки инпутов с хуком useRef
      // console.log(title)   1ый способ обработки инпутов схуком useState
      // setTitle('')   1ый способ обработки инпутов схуком useState
    }
  }

  return (
    <div className="input-field mt2">
      <input
        // onChange={changeHandler}   1ый способ обработки инпутов схуком useState
        // value={title}   1ый способ обработки инпутов схуком useState
        ref={ref}
        type="text"
        id="title"
        placeholder="Введите название дела"
        onKeyPress={KeyPressHandler}
      />
      <label htmlFor="title" className="active">
        Введите название дела
      </label>
    </div>
  )
}
