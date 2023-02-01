import React from 'react'

export default function Write() {
  return (
    <div>
      <form>
        <label htmlFor="inputFile">
            <i class="fa-solid fa-plus"></i>
        </label>
        <input type="file" id="inputFile"
        style={{ display: 'none'}}
        />
        <input type="text" placeholder='title' />
        <textarea placeholder='description'></textarea>
      </form>
    </div>
  )
}
