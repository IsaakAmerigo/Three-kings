import { useState } from 'react'
import './BookCreate.css'
import Layout from '../../components/Layout/Layout'
import { Redirect } from 'react-router-dom'
import { createBook } from '../../services/books'

const BookCreate = (props) => {

    const [book, setBook] = useState({
            title: '',
            author: '',
            genre: '',
            imgURL: '',
            description: ''
            
        })

    const [isCreated, setCreated] = useState(false)

    const handleChange = (event) => {
        const { name, value } = event.target
        setBook({
                ...book,
                [name]: value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const created = await createBook(book)
        setCreated({ created })
    }

    if (isCreated) {
        return <Redirect to={`/books`} />
    }
    return (
        <Layout>
            <form className="create-form" onSubmit={handleSubmit}>
                <input
                    className="input-title"
                    placeholder='Title'
                    value={book.title}
                    name='title'
                    required
                    autoFocus
                    onSubmit={handleSubmit}
                />
                <input
                    className="input-author"
                    placeholder='Author'
                    value={book.author}
                    name='author'
                    required
                    onSubmit={handleSubmit}
                />
                <input
                    className="input-path"
                    placeholder='Path'
                    value={book.path}
                    name='path'
                    selectBoxOptions="Left-Hand-Path;Traditional Path;Right-Hand-Path"
                    onSubmit={handleSubmit}
                />
                <input
                    className="input-image-link"
                    placeholder='Image Link'
                    value={book.imgURL}
                    name='imgURL'
                    required
                    onSubmit={handleSubmit}
                />
                <textarea
                    className="textarea-description"
                    rows={25}
                    placeholder='Description'
                    value={book.description}
                    name='description'
                    required
                    onSubmit={handleSubmit}
                />
                <button type='submit' className="save-button">Save</button>
            </form>
        </Layout>
    )
}

export default BookCreate